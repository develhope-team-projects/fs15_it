import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { hash } from "bcrypt";
import handleSubmit from "@/app/components/Form";
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, password, singer, beatmaker }: any = body;
    const checkUsername = await db.user.findUnique({
      where: { name: name },
    });
    if (checkUsername) {
      return NextResponse.json(
        { user: null, message: "Username already used" },
        { status: 409 }
      );
    }
    const cryptedPassword = await hash(password, 10);
    const newUser = await db.user.create({
      data: {
        name,
        password: cryptedPassword,
        singer,
        beatmaker,
      },
    });
    const { password: newUserPassword, ...rest } = newUser;
    return NextResponse.json(
      { user: rest, message: "User created" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}

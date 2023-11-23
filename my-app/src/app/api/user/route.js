import { db } from "@/app/lib/db";
import { NextResponse } from "next/server";
import { hash } from "bcrypt";

export async function POST(request, response) {
  try {
    const body = await request.json();
    const { data } = body;

    const nameAlreadyUsed = await db.user.findUnique({
      where: { name: data.name },
    });
    if (nameAlreadyUsed) {
      return NextResponse.json(
        { user: null, message: "Name already exists" },
        { status: 409 }
      );
    }

    const randomPsw = await hash(data.password, 10);
    const newUser = await db.user.create({
      newData: {
        name,
        password: randomPsw,
        singer,
        beatmaker,
      },
    });
    const { password: newUserPassword, ...rest } = newUser;
    return NextResponse.json(
      { user: rest, message: "User crated successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "SOmething went wrong" },
      { status: 500 }
    );
  }
}

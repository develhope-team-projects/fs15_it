import { db } from "@/app/lib/db";
import { NextResponse } from "next/server";
import { hash } from "bcrypt";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, password, role } = body;

    const nameAlreadyUsed = await db.user.findUnique({
      where: { name: name },
    });
    if (nameAlreadyUsed) {
      alert("Username already exists");
      return NextResponse.json(
        { user: null, message: "Name already exists" },
        { status: 409 }
      );
    }

    const randomPsw = await hash(password, 10);
    const newUser = await db.user.create({
      data: {
        name,
        password: randomPsw,
        role,
      },
    });
    const { password: newUserPassword, ...rest } = newUser;
    return NextResponse.json(
      { user: rest, message: "User crated successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}

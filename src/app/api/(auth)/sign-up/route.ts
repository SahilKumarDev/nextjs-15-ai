import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db/mongoose";
import { registerSchema } from "@/lib/validation/auth-schema";
import User from "@/lib/models/user-model";

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();
    const validatedData = registerSchema.parse(body);

    const userExists = await User.findOne({ email: validatedData.email });
    if (userExists) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    const user = await User.create(validatedData);

    return NextResponse.json(
      {
        message: "User registered successfully",
        user: {
          id: user._id,
          email: user.email,
          name: user.name,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error("An unknown error occurred in sign-up.");
    }
  }
}

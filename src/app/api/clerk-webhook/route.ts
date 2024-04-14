import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, email_addresses, first_name, last_name, image_url } =
      body?.data;
    const email = email_addresses[0]?.email_address;

    await prisma.user.upsert({
      where: { clerkId: id },
      update: {
        email,
        firstName: first_name,
        lastName: last_name,
        profileImage: image_url,
      },
      create: {
        clerkId: id,
        email,
        firstName: first_name || "",
        lastName: last_name || "",
        profileImage: image_url || "",
      },
    });

    return new NextResponse("User updated in database successfully", {
      status: 200,
    });
  } catch (error) {
    console.log("Error updating database", error);
    return new NextResponse("Error updating user in database", { status: 500 });
  }
}

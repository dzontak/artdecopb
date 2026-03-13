import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as Record<string, unknown>;
    const { name, email, subject, message, wantsUpdates } = body;

    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // In production, this would save to D1:
    // const db = getDb(env.DB);
    // await db.insert(contactMessages).values({ name, email, subject, message, wantsUpdates });

    // For now, just log and return success
    console.log("Contact form submission:", {
      name,
      email,
      subject,
      message,
      wantsUpdates,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const apiKey = process.env.MAILERLITE_API_KEY;
    const groupId = process.env.MAILERLITE_GROUP_ID; // optional

    if (!apiKey) {
      return NextResponse.json(
        { error: "MailerLite API key not configured" },
        { status: 500 }
      );
    }

    const baseUrl = "https://connect.mailerlite.com/api";

    // Check if subscriber already exists
    const checkEndpoint = `${baseUrl}/subscribers/${encodeURIComponent(email)}`;
    const checkResponse = await fetch(checkEndpoint, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
    });

    if (checkResponse.ok) {
      // Subscriber exists
      return NextResponse.json(
        { error: "You have already subscribed. Please check your inbox." },
        { status: 409 }
      );
    } else if (checkResponse.status !== 404) {
      // Some other error occurred when checking subscriber
      const errorData = await checkResponse.json();
      return NextResponse.json(
        { error: errorData.message || "Failed to check subscription status" },
        { status: checkResponse.status }
      );
    }

    // Subscriber does not exist, proceed to subscribe
    const endpoint = `${baseUrl}/subscribers`;

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        email,
        groups: groupId ? [groupId] : [],
        resubscribe: true,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(
        { error: errorData.message || "Failed to subscribe" },
        { status: response.status }
      );
    }

    return NextResponse.json(
      { message: "Subscription successful" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: `${error}` }, { status: 500 });
  }
}

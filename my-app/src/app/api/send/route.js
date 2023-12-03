import { NextResponse } from "next/server";
import { Resend } from "resend";
import { EmailTemplate } from "@/app/components/email-template";

const resend = new Resend("re_BtPxnwtp_WdcjAb9ZntiYBZuLsy3Gtqm2");

export async function POST(req) {
  try {
    const body = await req.json();
    const { mail } = body;
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: String(mail),
      subject: "Newsletter SoundBridge",
      react: EmailTemplate({ firstName: mail }),
    });
    if (data.status === "success") {
      console.log("email sent");
      return NextResponse.json({
        message: "Email Successfully sent",
      });
    }
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}

import { NextResponse } from "next/server";
import { getCertificates } from "../../../lib/data";

export async function GET() {
  try {
    const data = await getCertificates();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
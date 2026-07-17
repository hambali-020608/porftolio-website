import { NextResponse } from "next/server";
import { getSkillsAndTechStack } from "../../../lib/data";

export async function GET() {
  try {
    const data = await getSkillsAndTechStack();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
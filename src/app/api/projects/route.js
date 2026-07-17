import { NextResponse } from "next/server";
import { getActiveProjects } from "../../../lib/data";

export async function GET() {
  try {
    const data = await getActiveProjects();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
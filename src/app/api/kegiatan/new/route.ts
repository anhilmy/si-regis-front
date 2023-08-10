import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    return NextResponse.json({ status: 401, "message": "Hello" }, { status: 401 })
}

export async function POST(req: NextRequest){
    const data = await req.formData()
    return NextResponse.redirect(new URL("/kegiatan", req.url))
}
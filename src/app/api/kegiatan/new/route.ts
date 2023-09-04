import { NextApiResponse } from "next";
import { redirect } from "next/dist/server/api-utils";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    // return NextResponse.json({ status: 401, "message": "Hello" }, { status: 401 })
    return NextResponse.redirect(new URL("/", request.url))
}

export async function POST(req: NextRequest){
    const data = await req.formData()
    console.log(data)
    // return NextResponse.json({"message": "success"}, {"status": 307})
    return NextResponse.redirect(new URL(`${process.env.BASE_URL}`, req.url))
}
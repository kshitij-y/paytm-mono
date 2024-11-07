import { NextResponse } from "next/server"
import db from "@repo/db/client";


export const GET = async () => {
    await db.user.create({
        where: {
            email: "asd",
            name: "adsads"
        }
    })
    return NextResponse.json({
        message: "hi there"
    })
}
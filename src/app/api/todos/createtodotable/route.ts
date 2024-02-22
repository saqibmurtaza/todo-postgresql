import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export default async function Get(_req:string) {
    try {
        const result = await sql `CREATE TABLE todos(id SERIAL PRIMARY KEY, Name varchar(255));`;
        
        const response = NextResponse.json({result}, {status:200});
        return response  
    } catch (error) {
        NextResponse.json({error}, {status:500})
    }
}
import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function DeleteTodo(todoId:number) {
    try {
        await sql `DELETE FROM todos WHERE id = ${todoId}`;
        return NextResponse.json({message:'Todo Deleted successfully'}, {status:200})
        
    } catch (error) {
        NextResponse.json({error:'Error Deleting Todo'}, {status:500})    
    }
    
}
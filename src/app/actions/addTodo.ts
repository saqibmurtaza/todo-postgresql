'use server'

import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

export default async function addTodo(formData:any) {
    const nameOf = formData.get('TodoTask');
    try {
        const userInput = await sql `INSERT INTO todos(Name) VALUES(${nameOf}) RETURNING id`;
        const todoId = userInput.rows[0].id;
        revalidatePath('/')  
    } catch (error) {
        console.log(error);
        return {status:500}
    }
    

}

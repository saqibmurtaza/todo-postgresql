import { sql } from '@vercel/postgres'
import React from 'react'
import addTodo from './actions/addTodo'
import DeleteButton from './components/DeleteButton'

const TodoApp = async() => {
  const {rows} = await sql `SELECT * from todos `

 
  return (
   <main className='flex items-center justify-center'>
      <div className='border flex items-center justify-center max-w-2xl m-10 shadow-lg w-full'>
        <div className='form'>
          <form action={addTodo}>
            <label htmlFor="Todotask">
              Enter Task
            </label>
            <input className='pholder mt-5' 
              type="text" 
              name='TodoTask' id='TodoTask'
              placeholder='Enter Todo'
            />
            <button type='submit' className='butt'>
              Add
            </button>
          </form>
          {
            rows.map((iterate, index) =>
              <div key={index} className='flex justify-between'>
                <div  className='task'>{iterate.name}</div>
                {/* <div>
                <DeleteButton todoId={iterate.id} />
                </div> */}
              </div>
            )
          }
        </div>
      </div>
      
    </main>
  )
}

export default TodoApp

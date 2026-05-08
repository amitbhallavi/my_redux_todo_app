import React, { useState } from 'react'
import { FaEdit, FaRandom, FaTrash } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { add, edit, remove } from '../features/todds/todoSlice'

const ListGroup = () => {

  const todos = useSelector((state) => state.todos.allTodos)



  const dispatch = useDispatch()

  const handleRemove = (id) => {
    dispatch(remove(id))

  }

  const handleEdit = (id) => {
    dispatch(edit(id))
  }




  return (
    <div className=" w-full flex flex-col justify-center items-center">
      <h1 className='text-center mb-5 bg-gray-300 px-5 '> Add Your Todo List </h1>

      {todos.map((todo) => (
        <ul className={` ${todo.completed ? 'bg-red-100' : 'bg-green-100'} w-9/10  list-none outline-none  relative  border border-gray-400 mb-2 p-3  rounded-lg `}>
          <li key={todo._id} >
            <p className='text-left text-gray-600 font-sm'>ID : {todo._id} </p>
            <h1 className='text-left font-bold text-lg'> {todo.title} </h1>
            <button onClick={() => { handleEdit(todo) }} className='absolute right-10 top-0.5 bg-green-600 text-white rounded-full px-1.5 py-1 cursor-pointer hover:bg-green-800'> <FaEdit></FaEdit> </button>
            <button onClick={() => handleRemove(todo._id)} className='absolute right-1 top-0.5 bg-red-600 text-white rounded-full px-1.5 py-1 cursor-pointer hover:bg-red-800'> <FaTrash></FaTrash> </button>
          </li>
        </ul>
      ))}
    </div>
  )
}

export default ListGroup

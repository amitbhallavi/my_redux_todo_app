import React, { use, useEffect, useState } from 'react'
import ListGroup from './ListGroup'
import { add, update } from '../features/todds/todoSlice'
import { useDispatch, useSelector } from 'react-redux'

const Form = () => {

  const { edit } = useSelector((state) => state.todos)


  const dispatch = useDispatch()


  const [title, setTitle] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    !edit.isEdit ?
      dispatch(add({ _id: crypto.randomUUID(), title })) :
      dispatch(update({ _id: edit.todo._id, title }))
    setTitle('')
  }

  useEffect(() => {
    setTitle(edit.todo.title)
  }, [edit])







  return (

    <div className=" w-full bg-gray-100 flex flex-col justify-center align-center text-center mt-40">

      <form onSubmit={handleSubmit} >

        <input
          value={title ?? ""}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          className=' border border-black px-3 py-2 mb-5 outline-none rounded-lg w-4/10'
          placeholder='Add Todo' required
        />

        <button className=' bg-blue-500 text-white px-3 py-2 rounded-lg ml-3'>Add Todo</button>

      </form>
      <ListGroup />
    </div>

  )
}

export default Form

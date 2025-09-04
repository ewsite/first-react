"use client"
import Button from "@/components/button"
import TextInput from "@/components/textInput"
import TodoList from "@/components/todoList"
import { useEffect, useId, useState } from "react"

export default function App() {

  const titleFieldId = useId()
  const timeFieldId = useId()
  const descriptionFieldId = useId()
  const [todos, setTodos] = useState([])

  let [isCreateNewFormOpen, setCreateNewFormOpen] = useState(false)
  const defaultTodos = [
    {
      title: "Morning",
      time: "06:00",
      description: "Wake Up"
    },
    {
      title: "Breakfast",
      time: "06:30",
      description: "Eat foods"
    },
    {
      title: "Bath",
      time: "07:00",
      description: "Bathing"
    },
    {
      title: "Out",
      time: "10:00",
      description: "Get Out"
    }
  ]

  useEffect(() => {  
    if (localStorage && localStorage.getItem("todos")) {
      setTodos(JSON.parse(localStorage.getItem("todos")))
    }
    else {
      setTodos(defaultTodos)
    }
    console.log("this")
  }, [])

  function addTodo() {
    let titleValue = document.querySelector(`#${titleFieldId}`).value
    let timeValue = document.querySelector(`#${timeFieldId}`)?.value
    let descriptionValue = document.querySelector(`#${descriptionFieldId}`).value

    const updatedTodos = [
      ...todos, 
      {
        title: titleValue,
        time: timeValue,
        description: descriptionValue
      }
    ]

    localStorage.setItem("todos", JSON.stringify(updatedTodos))
    setTodos(updatedTodos)
  }

  function removeTodo(index) {
    let todosCopy = Array.from(todos)
    todosCopy.splice(index, 1)
      localStorage.setItem("todos", JSON.stringify(todosCopy))
    setTodos(todosCopy)
  }

  let elements = todos.map((todo, index) => <TodoList key={index} title={todo?.title} time={todo?.time} description={todo?.description} onClick={() => removeTodo(index)}/>)
  
  return (
    <>
      <div className="flex items-center justify-center w-full min-h-screen">
        <div className="rounded-lg bg-blue-100 grow w-full min-h-full m-2 px-3 py-4 space-y-4">
          <h1 className="text-center font-bold text-2xl">To-Do List</h1>
          <div className="space-y-4">
            {elements}
          </div>
          <hr/>
          <div className="mt-4 rounded-lg bg-neutral-100 p-3 space-y-4 w-full">
            <div className="flex justify-between items-center min-w-full">
              <h1 className="font-bold text-2xl">Create New</h1>
              <Button color="primary" onClick={() => setCreateNewFormOpen(!isCreateNewFormOpen)}>Expand</Button>
            </div>
            <div className={`${(!isCreateNewFormOpen) ? "hidden": "flex"} w-full`}>    
              <div className="space-y-4 w-full">
                <div className="w-full flex space-x-2">
                  <label htmlFor={titleFieldId}>Title</label>
                  <TextInput id={titleFieldId}/>
                </div>
                <div className="w-full flex space-x-2">
                  <label htmlFor={timeFieldId}>Time</label>
                  <TextInput id={timeFieldId}/>
                </div>
                <div className="w-full flex space-x-2">
                  <label htmlFor={descriptionFieldId}>Description</label>
                  <TextInput id={descriptionFieldId}/>
                </div>
                <div className="w-full flex space-x-2">
                  <Button onClick={addTodo} color="primary">Add</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


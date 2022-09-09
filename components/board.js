import List from "../components/list"
import Card from "../components/card"
import { useState, useEffect } from "react"

const todoList = [
  {
    text: 'Comprar una suscripción a LeonidasEsteban.com',
    id: 'todoList-task-1'
  },
  {
    text: 'Iniciar mi primer proyecto en CSSMaster.com',
    id: 'todoList-task-2'
  }
]
const inProgressList = [
  {
    text: 'Ver los live live coding en youtube.com/LeonidasEsteban',
    id: 'inProgressList-task-2'
  }
]

const doneList = [
  {
    text: 'Proyecto de Trello 🎤',
    id: 'doneList-task-2'
  }
]

export default function Board() {
  const [dragged, setDragged] = useState(null)

  const [listOflists, setListOfLists] = useState({
    todoList,
    inProgressList,
    doneList,
  })

  function handleDrop(event) {
    event.preventDefault()
    const list = event.currentTarget.dataset.list
    const listOflistsClone = structuredClone(listOflists)
    const newList = listOflistsClone[dragged.list].filter(item => item.id !== dragged.data.id)
    listOflistsClone[dragged.list] = newList
    listOflistsClone[list].push(dragged.data)
    setListOfLists(listOflistsClone)
    console.log(event)
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">
        Development
      </h1>
      <main className="flex justify-between gap-4">
        <List
          name="TODO"
          handleDrop={handleDrop}
          id="todoList"
        >
          {
            listOflists.todoList.map((item, index) => (
              <Card setDragged={setDragged} {...item} key={item.id} />
            ))
          }
        </List>
        <List
          name="In progress"
          handleDrop={handleDrop}
          id="inProgressList"
        >
          {
            listOflists.inProgressList.map((item, index) => (
              <Card setDragged={setDragged} {...item} key={item.id} />
            ))
          }
        </List>
        <List
          name="Done"
          handleDrop={handleDrop}
          id="doneList"
        >
          {
            listOflists.doneList.map((item, index) => (
              <Card setDragged={setDragged} {...item} key={item.id} />
            ))
          }
        </List>
      </main>
    </div>
  )
}

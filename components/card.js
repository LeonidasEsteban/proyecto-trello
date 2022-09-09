import Image from "next/image"

function Card({ text, id, setDragged, list }) {
  function handleDragStart(event) {
    setDragged({
      data: {
        text, id
      }
      ,
      list: event.target.closest('[data-list]').dataset.list
    })
  }

  return (
    <div draggable onDragStart={handleDragStart} className="bg-slate-100 text-slate-900 rounded-md p-3 flex flex-col gap-4 hover:cursor-grab">
      <div className="flex justify-between ">
        <p className="font-medium">{text}</p>
        <Image src="/static/icons/edit.svg" width={20} height={20} alt="" />
      </div>
      <div className="flex justify-between">
        <Image src="/static/images/avatar.png" width={32} height={32} alt="" />
        <Image src="/static/icons/square.svg" width={20} height={20} alt="" />
      </div>
    </div>
  )
}

export default Card

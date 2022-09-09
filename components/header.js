import Image from "next/image"


function Header() {
  return (
    <div className="p-2 flex justify-center items-center bg-slate-900">
      <Image src="/static/images/logo.png" width={40} height={40} alt="Logo de la mejor plataforma de educación"></Image>
      <h1 className="p-2 font-bold text-xl">LeonidasEsteban.com</h1>
    </div>
  )
}

export default Header

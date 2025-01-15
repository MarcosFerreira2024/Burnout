
function Input({type,id,label,placeholder,name}) {

  return (
    <div className='flex gap-1 flex-col '>
      <div className='flex self-start'>
        <label className='text-label text-mainTitle font-poppins' htmlFor={id}>{label}</label>
      </div>
      <input className='placeholder:text-placeholder transition-all  focus:outline-red-600 focus:bg-secundarySubtitle focus:text-mainTitle focus:placeholder:text-mainTitle hover:bg-secundarySubtitle hover:placeholder:text-mainTitle text-secundaryTitle hover:text-mainTitle duration-300 ease-in-out inner drop min-w-[100%] max-w-[400px] border-[2px] border-mainStroke p-2 font-poppins   placeholder:text-secundarySubtitle bg-mainBg rounded-md  ' type={type} id={id} name={name} placeholder={placeholder} required />
    </div>
  )
}

export default Input

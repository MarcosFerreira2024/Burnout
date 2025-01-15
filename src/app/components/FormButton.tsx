import React from 'react'

function FormButton({label}) {
  return (
    <button className=' self-start  focus:outline-red-600 focus:bg-secundarySubtitle focus:text-mainTitle  hover:bg-secundarySubtitle  text-secundaryTitle hover:text-mainTitle transition-all duration-300 ease-in-out text-buttonForm inner drop  w-[125px] sm:w-[200px] border-[2px] border-mainStroke py-2 font-poppins   bg-mainBg rounded-md  '>
        {label}
    </button>
  )
}

export default FormButton

import React from 'react'
import Button from './Button'

function OptionsChangeData() {
  return (
    <div className=' flex flex-col  h-full gap-5 justify-end'>
      <div className='flex flex-col gap-5 bg-white border-[1px] border-[#eeeeee] rounded-md px-5 p-5 globalShadow'>
        <Button classes='w-full py-5 ' label='Excluir' version={1}/>
        <Button classes='w-full py-5 ' label='Voltar'  version={1}/>
        <Button classes='w-full py-5 ' label='Salvar'  version={2}/>
      </div>


    </div>
  )
}

export default OptionsChangeData

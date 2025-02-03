"use client"
import React, { useContext, useState } from 'react'
import { UserContext } from '../Contexts/UserContext'
import { Upload, X } from 'lucide-react'
import Button from './Button'
import Image from 'next/image'
import dotenv from "dotenv"
import { updateUser } from '../actions/user'
import { uploadToCloud } from '../utils/uploadFile'

dotenv.config()



function ModalPicture() {
    const {modalPicture,setModalPicture} = useContext(UserContext)

    const [value,setValue] = useState(null)

    const [error, setError] = useState(null)

    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const fileToUpload = e.currentTarget.file.files[0]

        
        
        if(!fileToUpload) return setError("Nenhum Arquivo selecionado")

        if(fileToUpload.type !== "image/png" && fileToUpload.type !== "image/jpeg" && fileToUpload.type !== "image/jpg") return setError("Selecione um arquivo de imagem")

        const data = await uploadToCloud(fileToUpload)

        if(data instanceof Error) return setError(data.message)

        const updated = await updateUser(data)

        if(updated){
            window.alert("Foto alterada com sucesso")
            window.location.reload()
        }
        
    }
    const handlePreview = (e:React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files[0]
        if(!file) return
        if (file && file.type !== "image/png" && file.type !== "image/jpeg" && file.type !== "image/jpg") {
            setValue("/ui/perfil.png")
            setError("Selecione um Arquivo de Imagem")
            return

        }
        setError(null)
        setValue(URL.createObjectURL(file))
    }
  return (
    <>
    
    {modalPicture?<div onClick={()=> setModalPicture(false)} className='fixed z-[999]     w-[100%] h-[100%] flex justify-center items-center'>
        <form onSubmit={handleSubmit} onClick={(e)=> e.stopPropagation()} className='relative group transition-all ease-in-out duration-300  min-h-[300px] p-5 min-w-[300px] rounded-md flex flex-col gap-2 items-center border-dashed globalShadow bg-white border-mainStroke border-2'>
            <div onClick={()=> setModalPicture(false)} className='absolute globalShadow transition-all ease-in-out duration-300 hover:rotate-[25deg]  top-2 right-2 border-dashed border-[2px] border-mainStroke rounded-full w-[34px] h-[34px] flex justify-center items-center cursor-pointer'> <X  width={16} height={16} className='  text-mainTitle'/></div>
            <label className='hover:scale-110 ease-in-out duration-300 transition-all py-10 px-10 ' htmlFor="file"><Upload  width={56} height={56} className=' text-mainTitle' /></label>
            <input type="file" id='file' name='file' onChange={handlePreview} className='hidden' />
            {value ? <div className='flex flex-col items-center absolute top-5 pointer-events-none'>
                <Image src={value}  width={120} height={120} alt='' title=''  className='rounded-full bg-white w-full h-full border-[1px] max-h-[120px] min-w-[120px] object-center min-h-[120px] max-w-[120px] object-cover' />

            </div> : null}
            <Button disabled={error} type='submit' version={1}  classes='px-5 py-2  border-mainStroke self-center' label={'Enviar'} />
            {error?<p className='text-sm text-red-600  '>{error}</p>:null}
            
        </form>



    </div>:null}
    
    
    </>
  )
}

export default ModalPicture

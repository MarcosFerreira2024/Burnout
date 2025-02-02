"use client"
import React, { useContext, useState } from 'react'
import { UserContext } from '../Contexts/UserContext'
import { Upload } from 'lucide-react'
import Button from './Button'
import Image from 'next/image'
import dotenv from "dotenv"
import { updateUser } from '../actions/user'

dotenv.config()



function ModalPicture() {
    const {modalPicture,setModalPicture} = useContext(UserContext)

    const [value,setValue] = useState(null)


    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(e.currentTarget.file.files[0])

        
        const file = e.currentTarget.file.files[0]
        if(!file) return

        const data = new FormData()
        data.append('file', file)
        data.append('upload_preset',"cloud_preset_Burnout")
        data.append('cloud_name',"dlf9xex9z")

        console.log(data)

        const response = await fetch(`https://api.cloudinary.com/v1_1/dlf9xex9z/image/upload`,{
            method: 'POST',
            body: data
        })
        const json = await response.json()

        if(response.status===200){
            await updateUser(json.url)
        }
    }
  return (
    <>
    
    {modalPicture?<div onClick={()=> setModalPicture(false)} className='fixed z-[999]     w-[100%] h-[100%] flex justify-center items-center'>
        <form onSubmit={handleSubmit} onClick={(e)=> e.stopPropagation()} className='relative group transition-all ease-in-out duration-300  min-h-[300px] p-5 min-w-[300px] rounded-md flex flex-col gap-2 items-center border-dashed globalShadow bg-white border-mainStroke border-2'>
            <label className='hover:scale-110 ease-in-out duration-300 transition-all py-10 px-10 ' htmlFor="file"><Upload  width={56} height={56} className=' text-mainTitle' /></label>
            <input type="file" id='file' name='file' onChange={(e)=> setValue(URL.createObjectURL(e.target.files[0]))} className='hidden' />
            {value ? <div className='flex flex-col items-center absolute top-5 pointer-events-none'>
                <Image src={value} width={120} height={120} alt="Preview" title="Preview" className='rounded-full max-h-[120px] min-w-[120px] object-center min-h-[120px] max-w-[120px] object-cover' />

            </div> : null}
            <Button type='submit' version={1}  classes='px-5 py-2 border-mainStroke self-center' label={'Enviar'} />
            
        </form>



    </div>:null}
    
    
    </>
  )
}

export default ModalPicture

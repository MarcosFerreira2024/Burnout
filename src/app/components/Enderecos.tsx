"use client"
import React, { useContext, useEffect, useRef, useState } from 'react'
import { UserContext } from '../Contexts/UserContext'
import dotenv from "dotenv"
import Button from './Button'
import Input from './Input'
import { ChevronLeft, X } from 'lucide-react'

dotenv.config()



function Enderecos() {
    const {showEnderecos,setShowEnderecos,user} = useContext(UserContext)

    const [modalAdicionarEndereco, setModalAdicionarEndereco] = useState<boolean>(false)

    const [bairro, setBairro] = useState<string>("")
    const [cep, setCep] = useState<string>("")
    const [logradouro, setLogradouro] = useState<string>("")
    const [numero, setNumero] = useState<string>("")
    const [complemento, setComplemento] = useState<string>("")
    const [cidade, setCidade] = useState<string>("")
    const [identificacao, setIdentificacao] = useState<string>("")
    const [uf, setUf] = useState<string>("")
    
    const [novoEndereco, setNovoEndereco] = useState<string[]>([])
    console.log(novoEndereco) // Evitar o Erro do unused vars por enqnt

    const inputRef = useRef(null)

    useEffect(()=>{

        if(modalAdicionarEndereco){
            inputRef.current.focus()
            return

        }

    },[modalAdicionarEndereco])

    let dragging = false

    const handleMouseDown = (e: React.MouseEvent) => {
        e.stopPropagation()
        dragging = true
        return

    }
    const handleMouseUp = (e:React.MouseEvent) => {
        e.stopPropagation()
        dragging = false
        return

    }
    const handleMouseMove = (e: React.MouseEvent) => {
        e.stopPropagation()
        
        e.preventDefault()
        
        if(dragging){
            e.currentTarget.scrollTop -= e.movementY
            return

        }
    }

    const handleOutModal = () => {
        if(dragging){
            return
        }
        setShowEnderecos(false)
        setModalAdicionarEndereco(false)
        return

    }
   
    const handleSubmit = () => {
        if(bairro && cep && logradouro && numero && complemento && cidade && identificacao && uf){

            setNovoEndereco([bairro,cep,logradouro,numero,complemento,cidade,identificacao,uf])
            setShowEnderecos(false)
            setModalAdicionarEndereco(false)
            return
            
        }
        return

    }
  return (
    <>
    
    {showEnderecos?<div onMouseDown={handleOutModal}    className='fixed z-[999]     w-[100%] h-[100%] flex justify-center items-center bg-black/20' >

        {modalAdicionarEndereco? 
        <form onSubmit={handleSubmit} onMouseEnter={()=> dragging = false} onMouseMove={handleMouseMove} onKeyDown={(e) => {
            if(e.key === "Enter"){
                handleSubmit()
                return
            }
                return

       }}  onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}  className='p-5 gap-5 max-h-[300px] w-[400px] relative   scroll overflow-hidden md:overflow-y-auto bg-white globalShadow border-[1px] border-[#eeeeee] rounded-md flex flex-col' onClick={(e)=> e.stopPropagation()}>
            <div className='absolute cursor-pointer top-5 right-5 z-10  flex items-center hover:scale-[120%] ease-in-out duration-300' onClick={()=> setModalAdicionarEndereco(false)} ><ChevronLeft width={16} height={16} className='text-mainTitle  '/><p className='font-poppins text-subtitleMobile md:text-subtitle text-mainSubtitle'>Voltar</p></div>
            <Input  ref={inputRef} id='cep' type='text' name='cep' label='CEP' value={cep} placeholder='Digite o CEP' onChange={(e) => setCep(e.target.value)} />
            <Input id='identificacao' name='identificacao'value={identificacao} type='text' label='Identificação' placeholder='Digite a Identificação' onChange={(e) => setIdentificacao(e.target.value)} />
            <Input id='logradouro' name='logradouro' type='text' value={logradouro} label='Logradouro' placeholder='Digite o Logradouro' onChange={(e) => setLogradouro(e.target.value)} />
            <Input id='numero' name='numero' type='text' label='Número' value={numero} placeholder='Digite o Número da sua residencia' onChange={(e) => setNumero(e.target.value)} />
            <Input id='complemento' name='complemento' type='text' value={complemento} label='Complemento' placeholder='Digite o Complemento' onChange={(e) => setComplemento(e.target.value)} />
            <Input id='bairro' name='bairro' type='text' label='Bairro' value={bairro}placeholder='Digite o nome do Bairro' onChange={(e) => setBairro(e.target.value)} />
            <Input id='cidade' name='cidade' type='text' label='Cidade' value={cidade} placeholder='Nome da Cidade' onChange={(e) => setCidade(e.target.value)} />
            <Input id='uf' name='uf' type='text' label='UF' placeholder='Digite a sigla do Estado' value={uf} onChange={(e) => setUf(e.target.value)} />
            <Button type='submit' label='Salvar' classes='px-5' />  



        </form>:        
        <div onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} className='p-5 bg-white globalShadow relative justify-between h-[300px] w-[400px] border-[1px] border-[#eeeeee] rounded-md flex flex-col' onClick={(e)=> e.stopPropagation()} >

            <div className='absolute top-5 right-5 flex items-center hover:scale-[150%] cursor-pointer ease-in-out duration-300 hover:rotate-12 '><X width={16} height={16} onClick={handleOutModal} className='text-mainTitle' /></div>
            
            {user.enderecos && user.enderecos.length>=1?<h1 className='font-poppins text-subtitleMobile md:text-subtitle text-mainSubtitle'>Endereços :</h1>:<p className='font-poppins text-subtitleMobile md:text-subtitle text-mainSubtitle'>Nenhum Endereço Cadastrado</p>}
            {user.enderecos?user.enderecos.map((endereco,i)=>(<p key={i}>{endereco}</p>)):<div className='flex flex-col'>
            <Button label='Adicionar Endereço' classes='w-full py-5' onClick={()=> setModalAdicionarEndereco(true)}/>
            



            </div>   }

        </div>}


    </div>:null}
    
    
    </>
  )
}

export default Enderecos

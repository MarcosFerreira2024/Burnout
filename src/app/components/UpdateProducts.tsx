"use client"
import React, { useContext } from 'react'
import { UserContext } from '../Contexts/UserContext'
import Produtos from './Produtos'
import useSWR from 'swr'
import ACTIONS from '../consts/Urls'
import { getAllProductsAdmin } from '../utils/Products'



function UpdateProducts() {

    

    const { user  } = useContext(UserContext)

    const {isLoading:isProductLoading, data:produtos} = useSWR ([ACTIONS.produtos.getAllAdmin.url],getAllProductsAdmin)
  return (
    <>
       
       {isProductLoading?"":produtos?produtos.map(item => <Produtos key={item.id} category={item.category} fav={user.fav.find(fav => fav === item.id)} id={item.id} photo={item.photo} name={item.name} price={item.price}/>):null}
    </>
  )
}

export default UpdateProducts

import React from 'react'
import Button from '../../../components/Button'

function page() {

  const adminProductsActions = [
    {
      label: 'Alterar Produtos',
      url: '/admin/products/update'
    },
    {
      label: 'Adicionar Produtos',
      url: '/admin/products/add'
    },


  ]
  const adminUserActions = [
    {
      label: 'Alterar Dados De Usuários',
      url: '/admin/user/update'
    },
    {
      label: 'Excluir Usuário',
      url: '/admin/user/remove'
    },
    {
      label: 'Limpar Carrinho',
      url: '/admin/user/clear'
    }


  ]


  return (
    <div className='flex flex-col mt-20 sm:mt-10 gap-40 flex-1 max-w-[1440px]  px-5 mx-auto '>
      <div>
        <h1 className='md:text-title font-alex text-titleMobile text-mainTitle'>Produtos : </h1>
        <div className='flex gap-5 flex-wrap md:flex-nowrap min-w-full'>
          {adminProductsActions.map((item,i)=> (
            <Button label={item.label} redirect={item.url} key={i} classes="px-5 py-5 md:py-8  text-lg   text-nowrap w-full sm:w-[calc(50%-10px)]        " version={2} />
          ))}

        </div>
      </div>
        <div>
        <h1 className='md:text-title font-alex text-titleMobile text-mainTitle'>Usuários : </h1>
        <div className='flex gap-5 flex-wrap md:flex-nowrap '>
          {adminUserActions.map((item,i)=> (
            <Button label={item.label} redirect={item.url} key={i} classes="px-5 py-5 md:py-8   w-full  text-lg   text-nowrap   " version={2} />
          ))}

        </div>
      </div>

    </div>
  )
}

export default page

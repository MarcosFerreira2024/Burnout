"use client"
import React, { useState } from 'react';
import Input from './Input';
import { FormButton } from './FormButton';
import { deleteFromCloud, uploadToCloud } from '../utils/uploadFile';
import { createProduct } from '../actions/products';
import Preview from './Preview';




function AdminAddProduct() {
  const [selectedSizes, setSelectedSizes] = useState<string[]>(["PP","P","M","G","GG"]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>(["","Todos","Sem"]);
  const [selectedPhotos, setSelectedPhotos] = useState<File[]>([]);
  
  
  const [ error , setError ] = useState<string>("")

  const [price, setPrice] = useState('R$99,99');
  const [name, setName] = useState('');
  const [colorName, setColorName] = useState('');
  const [colorHex, setColorHex] = useState('#000000');
  const [frete, setFrete] = useState<string>('Grátis');
  
  const handleSizeChange = (id: string) => {
    if (id === 'U') {
      setSelectedSizes(['U']);
    } else {
      setSelectedSizes((prev) => {
        const newSizes = prev.filter((size) => size !== 'U');
        if (newSizes.includes(id)) {
          return newSizes.filter((size) => size !== id);
        } else {
          return [...newSizes, id];
        }
      });
    }
  };
  
  const tamanhos = [
    { id: 'U', label: 'U', name: 'size' },
    { id: 'PP', label: 'PP', name: 'size' },
    { id: 'P', label: 'P', name: 'size' },
    { id: 'M', label: 'M', name: 'size' },
    { id: 'G', label: 'G', name: 'size' },
    { id: 'GG', label: 'GG', name: 'size' }
  ];
  
  const inputs = [
    { id: 'name', label: 'Nome', type: 'text',value:name ,placeholder: 'Insira o Nome do Produto', function: (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)},
    { id: 'price', label: 'Preço', type: 'text',value:price ,placeholder: 'Insira o Preço ', function: (e: React.ChangeEvent<HTMLInputElement>) => setPrice(e.target.value) },
    { id: 'colorName', label: 'Cor', type: 'text',value:colorName ,placeholder: 'Insira o nome da Cor ', function: (e: React.ChangeEvent<HTMLInputElement>) => setColorName(e.target.value) },
    { id: 'colorHex', label: 'Hexadecimal', type: 'text',value:colorHex ,placeholder: 'Insira o Hexadecimal',function: (e: React.ChangeEvent<HTMLInputElement>) => setColorHex(e.target.value) },
    { id: 'frete', label: 'Frete', type: 'text',value:frete ,placeholder: 'Insira o preço do Frete', function: (e: React.ChangeEvent<HTMLInputElement>) => setFrete(e.target.value) },
  ]
  const handleCategoryChange = (index: number, value: string) => {
    setSelectedCategories((prev) => {
      const newCategories = [...prev];
      newCategories[index] = value;
      return newCategories;
    });
  };

  const handlePhotoChange = (index: number, file: File) => {
    if(selectedPhotos.length >0 && selectedPhotos.find((item) => item.name === file.name)) return setError("Fotos Duplicadas")
    setSelectedPhotos((prev) => {
      const newPhotos = [...prev];
      newPhotos[index] = file;
      setError("")
      return newPhotos;
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();



    const url1 = await uploadToCloud(selectedPhotos[0]);
    const url2 = await uploadToCloud(selectedPhotos[1]);
    const url3 = await uploadToCloud(selectedPhotos[2]);

    if(url1 instanceof Error || url2 instanceof Error || url3 instanceof Error) return setError("Arquivos Incompativeis")

    const ArrayPhotos = [url1.url, url2.url, url3.url]

    if(ArrayPhotos.length < 3) return setError("Selecione 3 Fotos")

    if(
      !price ||
      !name ||
      !colorName ||
      !colorHex ||
      !frete ||
      selectedSizes.length === 0 ||
      selectedCategories.length === 0 ||
      selectedPhotos.length === 0
    ) return setError("Preencha todos os campos")

    if(price === "" || name === ""|| colorName === ""|| colorHex === ""|| frete === "") return setError("Campos Vazios")

    

    const formData = {
      price,
      name,
      colorName,
      colorHex,
      frete,
      size: selectedSizes,
      category: selectedCategories,
      photo: ArrayPhotos as string[],
    };



    const created = await createProduct(formData)

    if(created instanceof Error){
      setError(created.message)
      await deleteFromCloud(url1.public_id)
      await deleteFromCloud(url2.public_id)
      await deleteFromCloud(url3.public_id)
      return
    }
    window.alert("Produto Criado Com Sucesso")

    window.location.reload()

    


  };

  return (
    <>
        <form onSubmit={handleSubmit} className='grid relative lg:grid-cols-2 gap-5 border-b-2 pb-5 border-mainStroke'>
      {error?<p className='absolute bottom-0 right-0 text-red-600'>{error}</p>:null}
      <div className='flex flex-col gap-5'>
        {inputs.map((input) => (
          <Input
            name={input.id}
            classes=" min-h-[50px] max-h-[50px] w-full min-w-full  lg:max-w-[600px]"
            value={input.value}
            key={input.id}
            id={input.id}
            label={input.label}
            type={input.type}
            placeholder={input.placeholder}
            onChange={input.function}
          />
        ))}

        <div className='flex flex-col gap-2'>
          <h1 className='md:text-label text-labelMobile font-poppins text-mainTitle'>Tamanhos</h1>
          <div className='flex gap-2'>
            {tamanhos.map((tamanho) => (
               <div key={tamanho.id} className='flex items-center font-poppins gap-5 lg:gap-0'>
                <button
                title={tamanho.label}
                type='button'
                  id={tamanho.id}
                  name={tamanho.name}
                  className={`${selectedSizes.map((size) => size).includes(tamanho.id)?"bg-mainBg cursor-default text-secundaryTitle":""} xl:min-w-[50px] min-w-[35px] min-h-[35px] ease-in-out duration-300 transition-all  xl:min-h-[50px] globalShadow  border-[2px] rounded-md cursor-pointer border-mainStroke flex items-center justify-center text-mainSubtitle hover:bg-mainBg hover:text-secundaryTitle`}
                  onClick={()=> handleSizeChange(tamanho.id)}
                > {tamanho.id} </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-5'>
        {[1, 2, 3].map((index) => (
          <Input
            key={`photo${index}`}
            id={`photo${index}`}
            type='file'
            placeholder='Foto do Produto'
            name='photo'
            classes=" min-h-[50px] max-h-[50px] w-full min-w-full  lg:max-w-[600px]"
            label={`Foto ${index}`}
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                handlePhotoChange(index - 1, e.target.files[0]);
              }
            }}
          />
        ))}

        {[1, 2, 3].map((index) => (
          <Input
            key={`category${index}`}
            id={`category${index}`}
            type='text'
            placeholder='Categoria do Produto'
            name='category'
            classes=" min-h-[50px] max-h-[50px] w-full min-w-full  lg:max-w-[600px]"
            label={`Categoria ${index}`}
            value={selectedCategories[index - 1] || ''}
            onChange={(e) => handleCategoryChange(index - 1, e.target.value)}
          />
        ))}
      </div>

      <FormButton version={2} classes="max-w-[300px] w-full min-h-[50px] max-h-[50px]"  labelEnvio='Enviando...' labelPadrao='Enviar'  />
    </form>

    <div className='mt-20 mb-5'>
        <h1 className='md:text-title text-titleMobile font-alex text-mainTitle'>Preview :</h1>
    </div>
    <Preview dados={{
      price,
      name,
      colorName,
      colorHex,
      frete,
      size: selectedSizes,
      category: selectedCategories,
      photo: selectedPhotos
    }} />
    
    
    </>
  );
}

export default AdminAddProduct;
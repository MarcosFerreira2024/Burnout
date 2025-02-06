"use client"
import React, { useEffect, useState } from 'react'
import Preview from './Preview';
import { FormButton } from './FormButton';
import Input from './Input';
import { deleteFromCloud, uploadToCloud } from '../utils/uploadFile';
import { getOneProduct } from '../utils/Products';
import { updateProduct } from '../actions/products';
import Image from 'next/image';
import { X } from 'lucide-react';





function UpdateProduct({ id }: { id: string }) {
    const [existentPhotos, setExistentPhotos] = useState<string[]>([]);
    const [selectedPhotos, setSelectedPhotos] = useState<File[]>([]);
    const [changedPhotos, setChangedPhotos] = useState<boolean[]>([false, false, false]);
    const [selectedSizes, setSelectedSizes] = useState<string[]>([]);

    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [error, setError] = useState("");
    const [price, setPrice] = useState("R$99,99");
    const [name, setName] = useState("");
    const [colorName, setColorName] = useState("");
    const [colorHex, setColorHex] = useState("#000000");
    const [frete, setFrete] = useState("Grátis");


    const[loading,setLoading] = useState<boolean>(true)
    
    useEffect(() => {

        async function getData() {
            setLoading(true)
            const dataProducts = await getOneProduct(id);
            if (dataProducts instanceof Error) return;
            setSelectedSizes(dataProducts.size.map(item => item.toUpperCase()))
            setSelectedCategories(dataProducts.category);
            setPrice(dataProducts.price);
            setName(dataProducts.name);
            setColorName(dataProducts.colorName);
            setColorHex(dataProducts.colorHex);
            setFrete(dataProducts.frete);
            setExistentPhotos(dataProducts.photo);
          
          }
          getData();
          setLoading(false)

    
}, [id]);

if(loading){
  return(
    <div>Carregando...</div>
  )
}





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
const handlePhotoChange = (index: number, file: File) => {
    if (selectedPhotos.length > 0 && selectedPhotos.find((item) => item.name === file.name)) {
        return setError("Fotos Duplicadas");
    }
    
    setSelectedPhotos((prev) => {
        const newPhotos = [...prev];
        newPhotos[index] = file;
        return newPhotos;
    });
    
    setChangedPhotos((prev) => {
        const newChangedPhotos = [...prev];
        newChangedPhotos[index] = true;
        return newChangedPhotos;
    });
    
    setError("");
};

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const photoUrls: string[] = [];
    
    for (let i = 0; i < 3; i++) {
        if (changedPhotos[i] && selectedPhotos[i]) {
            const result = await uploadToCloud(selectedPhotos[i]);
        if (result instanceof Error) {
            setError("Arquivos Incompatíveis");
            return;
        }
        photoUrls[i] = result.url;
    } else {
        photoUrls[i] = existentPhotos[i];
    }
}

if (photoUrls.length < 3) {
    setError("Selecione 3 Fotos");
    return;
}

if (
    !price ||
    !name ||
    !colorName ||
    !colorHex ||
    !frete ||
    selectedSizes.length === 0 ||
    selectedCategories.length === 0
) {
    setError("Preencha todos os campos");
    return;
}

const formData = {
      price,
      name,
      colorName,
      colorHex,
      frete,
      size: selectedSizes,
      category: selectedCategories,
      photo: photoUrls,
    };
    
    const updated = await updateProduct(formData, id);
    
    if (updated instanceof Error) {
        setError(updated.message);
        for (let i = 0; i < 3; i++) {
            if (changedPhotos[i] && selectedPhotos[i]) {
                await deleteFromCloud(photoUrls[i]);
            }
        }
        return;
    }
    
    setChangedPhotos([false, false, false]);
    setExistentPhotos(photoUrls);
};

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


const handleCategoryChange = (index: number, value: string) => {
  setSelectedCategories((prev) => {
    const newCategories = [...prev];
    newCategories[index] = value;
    return newCategories;
  });
};

return (
    <>
      <form onSubmit={handleSubmit} className="grid relative lg:grid-cols-2 gap-5 border-b-2 pb-5 border-mainStroke">
        {error ? <p className="absolute bottom-0 right-0 text-red-600">{error}</p> : null}
        <div className="flex flex-col gap-5">
          {inputs.map((input) => (
            <Input
              name={input.id}
              classes="min-h-[50px] max-h-[50px] w-full min-w-full lg:max-w-[600px]"
              value={input.value}
              key={input.id}
              id={input.id}
              label={input.label}
              type={input.type}
              placeholder={input.placeholder}
              onChange={input.function}
            />
          ))}

          <div className="flex flex-col gap-2">
            <h1 className="md:text-label text-labelMobile font-poppins text-mainTitle">Tamanhos</h1>
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

        <div className="flex flex-col gap-5">
          {[1, 2, 3].map((index) => (
            <div key={`photo${index}`}>
              {existentPhotos[index - 1] && !changedPhotos[index - 1] ? (
                <div className='text-mainTitle flex flex-col  gap-2'>
                  <p className='md:text-label text-labelMobile'>Foto {index}:</p>
                  <div className='flex gap-2'>
                    <Image height={100} className='border-mainStroke border-2 min-h-[100px] max-h-[100px] min-w-[100px] max-w-[100px] w-full h-full rounded-full object-cover'  src={existentPhotos[index - 1]} alt={`Foto Existente ${index}`} width="100" />
                    <button
                      type="button"
                      className='md:text-placeholder text-placeholderMobile'
                      onClick={() => {
                        const newChangedPhotos = [...changedPhotos];
                        newChangedPhotos[index - 1] = true;
                        setChangedPhotos(newChangedPhotos);
                      }}
                    >
                      <X/>
                    </button>
                  </div>
                </div>
              ) : (
                <Input
                  id={`photo${index}`}
                  type="file"
                  placeholder="Foto do Produto"
                  name="photo"
                  classes="min-h-[50px] max-h-[50px] w-full min-w-full lg:max-w-[600px]"
                  label={`Foto ${index}`}
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      handlePhotoChange(index - 1, e.target.files[0]);
                    }
                  }}
                />
              )}
            </div>
          ))}

          {[1, 2, 3].map((index) => (
            <Input
              key={`category${index}`}
              id={`category${index}`}
              type="text"
              placeholder="Categoria do Produto"
              name="category"
              classes="min-h-[50px] max-h-[50px] w-full min-w-full lg:max-w-[600px]"
              label={`Categoria ${index}`}
              value={selectedCategories[index - 1] || ""}
              onChange={(e) => handleCategoryChange(index - 1, e.target.value)}
            />
          ))}
        </div>

        <FormButton version={2} classes="max-w-[300px] w-full min-h-[50px] max-h-[50px]" labelEnvio="Enviando..." labelPadrao="Enviar" />
      </form>

      <div className="mt-20 mb-5">
        <h1 className="md:text-title text-titleMobile font-alex text-mainTitle">Preview :</h1>
      </div>
      <Preview
        dados={{
          price,
          name,
          colorName,
          colorHex,
          frete,
          size: selectedSizes,
          category: selectedCategories,
          photo: selectedPhotos.length > 0 ? selectedPhotos : existentPhotos,
        }}
      />
    </>
  );
}

export default UpdateProduct;
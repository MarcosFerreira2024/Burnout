export interface ComponenteProduto {
    name: string,
    photo: string[],
    category: string[],
    price: string,
    id: string,
    fav: boolean
    url: string
}

export interface Product {
    id: string,
    name: string,
    price: string,
    frete: string,
    photo: string[],
    rating: number,
    favorito: boolean,
    size: string[],
    category: string[],
    colorName: string,
    colorHex: string,
    createdAt: string,
    updatedAt: string,

}
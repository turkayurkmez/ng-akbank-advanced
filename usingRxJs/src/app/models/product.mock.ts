export interface Product {
  id?: string;
  name?: string;
  price?: number;
  description?: string;
}

export const favoriteProduct: Product = {
    id:'8',
    name:'Çalışma koltuğu',
    description:'Bıdıbıdı',
    price:2500
};

export const productCollection: Product[]=[
    { id:'1', name:'Ürün A', description:"Ürün A açıklaması", price:1000},
    { id:'2', name:'Ürün B', description:"Ürün B açıklaması", price:1000},
    { id:'3', name:'Ürün C', description:"Ürün C açıklaması", price:1000},

]

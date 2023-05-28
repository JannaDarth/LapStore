import {products} from "./laptopStoreData.json";
const getProducts=()=>{
    return products;
}
const getProduct=(id)=>{
   return products.find((prod)=>{
        return prod.id==id;
    })
}
export {getProducts,getProduct}
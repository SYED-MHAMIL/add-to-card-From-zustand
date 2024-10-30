import {create} from "zustand"



export type ProductDataType={

    id:number,
    quantity :number ,
    name:string ;
    imageUrl:string[];
    price: number;
    actualPrice:number ;
}

type action ={
    addToCard : (cards :ProductDataType) => void ;
}

type cardsType= {
     cards : ProductDataType  | {}
}


const productData :ProductDataType []=[
    {  id : 1,
        quantity: 1,
        name:"Royals  Living Room Set",
        actualPrice :  1500,
        imageUrl:["https://woodc.pk/wp-content/uploads/2024/06/wrldjifd.webp" ,"https://ordermyfurniture.com/cdn/shop/files/Royals-Living-Room-TurkishFurniture-6_1080x.jpg?v=1716825049"] ,
        price : 1000 
    }, { id : 2,
        quantity: 1,
        name:"Nike Air MX Super 2500 - Red",
        imageUrl:["https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60?a=b" ,"https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"] ,
        price : 300 ,
        actualPrice :  600

    }
];

   


export const useAddCard=create<ProductDataType[]  & action  & cardsType>((set)=>({
    products: productData ,
    cards: {},
   addToCard:(cards : ProductDataType[])=>set({cards}),
  

}))
      





















"use client"
import { useAddCard } from "../store/addCard-store"






export default function Cards(){

   const cards=useAddCard((state)=>state.cards);
   console.log(Object.keys(cards));

   const values = Object.values(cards);
   console.log(values);
   
   const grandTotalPrice = values.reduce(
     (prevPrice, { price, quantity }) => price * quantity+ prevPrice,0
   );
 
  


    return(
        <>
        
        
        <section className="h-screen bg-gray-100 py-12 sm:py-16 lg:py-20">
  <div className="mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-center">
      <h1 className="text-2xl font-semibold text-gray-900">Your Cart</h1>
    </div>

   <div className="mx-auto mt-8 max-w-2xl md:mt-12">
      <div className="bg-white shadow">
        <div className="px-4 py-6 sm:px-8 sm:py-10">
          <div className="flow-root">
            <ul className="-my-8">
             
              { Object.keys(cards).map((key)=>{
                 
                 return  <li key={cards[key].id + Math.random() *390}  className="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
                 <div className="shrink-0">
                
                   <img className="h-24 w-24 max-w-full rounded-lg object-cover" src={cards[key].imageUrl[0]} alt="" />
                 </div>
 
                 <div className="relative flex flex-1 flex-col justify-between">
                   <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
                     <div className="pr-8 sm:pr-5">
                       <p className="text-base font-semibold text-gray-900">{cards[key].name}</p>
                       <p className="mx-0 mt-1 mb-0 text-sm text-gray-400">36EU - 4US</p>
                       <p className="mx-0 mt-1 mb-0 text-sm text-gray-400">quantity :{cards[key].quantity}</p>
                       <p className="mx-0 mt-1 mb-0 text-sm text-gray-700">Total :${cards[key].quantity * cards[key].price}</p>

                     </div>
 
                     <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                       <p className="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">${cards[key].price}</p>
 
                     
                     </div>
                   </div>
 
                   <div className="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
                     <button type="button" className="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900">
                       <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" className=""></path>
                       </svg>
                     </button>
                   </div>
                 </div>
               </li>
}) }
            </ul>
          </div>

        
          <div className="mt-6 flex items-center justify-between">
            <p className="text-sm font-medium text-gray-900">Subtotal</p>
            <p className="text-2xl font-semibold text-gray-900"><span className="text-xs font-normal text-gray-400">USD</span>{grandTotalPrice}</p>
          </div>

          <div className="mt-6 text-center">
            <button type="button" className="group inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800">
              Checkout
              <svg xmlns="http://www.w3.org/2000/svg" className="group-hover:ml-8 ml-4 h-6 w-6 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    
  
  </div>
</section>

        </>
    )
}
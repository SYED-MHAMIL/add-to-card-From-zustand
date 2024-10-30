"use client";


import { useAddCard } from "./store/addCard-store";


import Link from "next/link";

export default function Home() {
  const { products, addToCard, cards, increment, decrement } = useAddCard();
 

     


let grandTotalPrice;
let values = Object.values(cards);
   console.log(values);
if(values.length > 0){   
   grandTotalPrice = values.reduce(
     (prevPrice, { price, quantity }) => price * quantity+ prevPrice,0
   );

}



const add = (product) => {
  if ([product.id] in cards) {
    cards[product.id].quantity = cards[product.id].quantity  + 1;
  } else {
    // const newItem = { ...product};
    cards[product.id] = product;
  }
  addToCard(cards);
};

  const decerementHandler = (quantity: number, id: number) => {
    if (quantity > 1) {
      decrement(id);
    }
  };

  
let quanVal;
if(values){

let quan= (Object.values(cards).map(({quantity})=>quantity ).join("+"));
quanVal=eval(quan)
console.log(quanVal);

}



  return (
    <>
    
<nav className="bg-white border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
 
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Mart</span>

  <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse text-white">
  <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span className="badge badge-sm indicator-item">{quanVal ? quanVal : "0"}</span>
        </div>
      </div>
      <div
        tabIndex={0}
        className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
        <div className="card-body">
          <span className="text-lg font-bold text-black">Items {quanVal ? quanVal : "0"}</span>
          <span className="text-info">Subtotal: ${grandTotalPrice  ? grandTotalPrice : "0" } </span>
          {/* <span className="text-info">Subtotal: ${cardsData.length > 0  && subTotoal}</span> */}
          <div className="card-actions">
            <Link href={"/cards"}>
            <button className="btn btn-primary btn-block">View cart</button>

            </Link>
          </div>
        </div>
      </div>
    </div>

  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <a href="#" className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500" aria-current="page">Home</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
      </li>
    </ul>
  </div>
  </div>
</nav>
        
      <div className="flex justify-center items-center w-full h-screen gap-2 flex-wrap">
        {products.length > 0 &&
          products.map(
            (product) => (
              <div
                key={product.id}
                className="group my-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 mx-4 bg-white shadow-md"
              >
                <a
                  className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
                  href="#"
                >
                  <img
                    className="peer absolute top-0 right-0 h-full w-full object-cover"
                    src={product.imageUrl[0]}
                    alt="product image"
                  />
                  <img
                    className="peer absolute top-0 -right-96 h-full w-full object-cover transition-all delay-100 duration-1000 hover:right-0 peer-hover:right-0"
                    src={product.imageUrl[1]}
                    alt="product image"
                  />
                  <div className="absolute  bottom-0 mb-4 flex space-x-4 w-full justify-center">
                    <div className="rounded-full h-3 w-3 bg-gray-200 border-2 border-white"></div>
                    <div className="rounded-full h-3 w-3 bg-gray-200 border-2 border-white"></div>
                    <div className="rounded-full h-3 w-3 bg-gray-200 border-2 border-white"></div>
                  </div>
                  <svg
                    className="pointer-events-none absolute inset-x-0 bottom-5 mx-auto text-3xl text-white  transition-opacity group-hover:animate-ping group-hover:opacity-30 peer-hover:opacity-0"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill="currentColor"
                      d="M2 10a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v10a4 4 0 0 1-2.328 3.635a2.996 2.996 0 0 0-.55-.756l-8-8A3 3 0 0 0 14 17v7H6a4 4 0 0 1-4-4V10Zm14 19a1 1 0 0 0 1.8.6l2.7-3.6H25a1 1 0 0 0 .707-1.707l-8-8A1 1 0 0 0 16 17v12Z"
                    />
                  </svg>
                  <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
                    {parseFloat((product.price / product.actualPrice) * 100).toFixed(2)}% OFF
                  </span>
                </a>
                <div className="mt-4 px-5 pb-5">
                  <a href="#">
                    <h5 className="text-xl tracking-tight text-slate-900">
                      {product.name}
                    </h5>
                  </a>
                  
                  <div className="mt-2 mb-5 flex items-center justify-between">
                    <p>
                      <span className="text-3xl font-bold text-slate-900">
                        ${product.price}
                      </span>
                      <span className="text-sm text-slate-900 line-through">
                        ${product.actualPrice}
                      </span>
                    </p>
                  </div>

             

                  <button
      
                    onClick={() => add(product)}
            
                    className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2 h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    Add to cart{" "}
                  </button>
                </div>
              </div>
            )
          )}
      </div>
    </>
  );
}

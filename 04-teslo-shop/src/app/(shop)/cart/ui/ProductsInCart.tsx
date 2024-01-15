"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { QuantitySelector } from "@/components";
import { useCartStore } from "@/store";

export const ProductsInCart = () => {
  const [loaded, setLoaded] = useState( false );
  const productsInCart = useCartStore( state => state.cart );
  const updateProductQuantity = useCartStore( state => state.updateProductQuantity );
  const removeProduct = useCartStore( state => state.removeProduct );

  useEffect(() => {
    setLoaded( true ); //? Está es la forma de eliminar el error con la hidratación.
  }, [])
  

  if( !loaded ) return <p> Loading... </p>

  return (
    <>
      {
        productsInCart.map( product => (
          <div key={ `${ product.slug }-${ product.size }` } className="flex mb-5">
            <Image 
              src={`/products/${ product.image }`}
              width={ 100 }
              height={ 100 }
              style={{
                width: '100px',
                height: '100px'
              }}
              alt={ product.title }
              className="mr-5 rounded" 
            />

            <div>
              <Link className="hover:underline cursor-pointer" href={`/product/${ product.slug }`}>
                <p>{ product.size } - { product.title }</p>
              </Link>
              <p>${ product.price }</p>
              <QuantitySelector 
                quantity={ product.quantity } 
                onQuantityChanged={ quantiy => updateProductQuantity( product, quantiy ) }
              />

              <button 
                onClick={ () => removeProduct( product ) }
                className="underline mt-3"
              >
                Remover
              </button>
            </div>
          </div>
        ))
      }
    </>
  )
}

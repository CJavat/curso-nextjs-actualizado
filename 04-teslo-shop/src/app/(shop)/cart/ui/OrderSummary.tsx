"use client";

import { useCartStore } from "@/store";
import { currencyForman } from "@/utils";
import { useEffect, useState } from "react";

export const OrderSummary = () => {
  const [loaded, setLoaded] = useState( false );
  const { itemsInCart, subTotal, tax, total } = useCartStore( state => state.getSummaryInformation() );

  useEffect(() => {
    setLoaded( true );
  }, [])
  
  if( !loaded ) return <p> Loading... </p>

  return (
    <div className="grid grid-cols-2">
      <span>No. Productos</span>
      <span className="text-right">
        { itemsInCart === 1 ? '1 artículo' : `${ itemsInCart } artículos` }
      </span>

      <span>Subtotal</span>
      <span className="text-right">{ currencyForman(subTotal) }</span>

      <span>Impuestos</span>
      <span className="text-right">{ currencyForman(tax) }</span>

      <span className="text-2xl mt-5">Total:</span>
      <span className="text-right text-2xl mt-5">{ currencyForman(total) }</span>
    </div>
  )
}

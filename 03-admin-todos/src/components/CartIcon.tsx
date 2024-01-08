"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiShoppingBasket } from "react-icons/ci";

interface Props {
  totalItems: number;
}

export const CartIcon = ( { totalItems }: Props ) => {
  const pathName = usePathname();

  return (
    <Link href={"/dashboard/cart"} className={`p-2 flex items-center justify-center h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200 ${ pathName === '/dashboard/cart' && 'text-white bg-gradient-to-r from-sky-600 to-cyan-400'}`}>
      { 
        ( totalItems > 0 ) && <span className={`mr-2 text-sm text-blue-800 font-bold ${ pathName === '/dashboard/cart' && 'text-white'}`}>{ totalItems }</span>
      }
      <CiShoppingBasket size={25}/>
    </Link>
  )
}

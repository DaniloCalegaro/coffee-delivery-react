import { createContext, ReactNode, useState } from 'react'
import { Product } from '../types'

interface CartProviderProps {
  children: ReactNode
}

interface UpdateProductAmount {
  productId: number
  amount: number
}

interface CartContextData {
  cart: Product[]
  //addProduct: (productId: Product) => void
  //removeProduct: (productId: Product) => void
  //updateProduct: ({ productId, amount }: UpdateProductAmount) => void
}

export const CartContext = createContext<CartContextData>({} as CartContextData)

export function CartContextProvider({ children }: CartProviderProps) {
  const [cart, setCard] = useState<Product[]>([])

  return (
    <CartContext.Provider
      value={{ cart /*addProduct, removeProduct, updateProduct*/ }}
    >
      {children}
    </CartContext.Provider>
  )
}

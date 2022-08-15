import { createContext, ReactNode, useState } from 'react'
import toast from 'react-hot-toast'

import { Product } from '../types'
import listCoffeesJson from '../../products.json'

interface CartProviderProps {
  children: ReactNode
}

interface UpdateProductAmount {
  productId: number
  amount: number
}

interface CartContextData {
  cart: ProductInCart[]
  addProduct: (productId: number, amount: number) => void
  //removeProduct: (productId: Product) => void
  //updateProduct: ({ productId, amount }: UpdateProductAmount) => void
}

interface ProductInCart extends Product {
  amount: number
}

export const CartContext = createContext<CartContextData>({} as CartContextData)

export function CartContextProvider({ children }: CartProviderProps) {
  const [cart, setCard] = useState<ProductInCart[]>([])

  function addProduct(productId: number, amountAdd: number) {
    const updateCart = [...cart]
    const productExists = updateCart.find(item => item.id === productId)
    const currentAmount = productExists ? productExists.amount : 0
    const amount = currentAmount + amountAdd

    if (productExists) {
      productExists.amount = amount
    } else {
      const product = listCoffeesJson.coffees.find(
        product => product.id === productId
      )!

      const newProduct = { ...product, amount }
      updateCart.push(newProduct)
    }

    setCard(updateCart)
    toast.success('Café adicionado ao carrinho')
  }

  console.log(cart)

  function updateProductAmount({ productId, amount }: UpdateProductAmount) {}
  return (
    <CartContext.Provider
      value={{ cart, addProduct /*, removeProduct, updateProduct*/ }}
    >
      {children}
    </CartContext.Provider>
  )
}

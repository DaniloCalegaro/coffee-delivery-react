import { createContext, ReactNode, useState } from 'react'
import toast from 'react-hot-toast'

import { Product } from '../types'
import listCoffeesJson from '../../products.json'

interface CartProviderProps {
  children: ReactNode
}

type PaymentMethod = 'credit card' | 'debit card' | 'money' | null

interface CartContextData {
  cart: ProductInCart[]
  payment: PaymentMethod
  addProduct: (productId: number, amount: number) => void
  removeProduct: (productId: number) => void
  updateProduct: (productId: number, amount: number) => void
  selectPayment: (method: PaymentMethod) => void
}

interface ProductInCart extends Product {
  amount: number
}

export const CartContext = createContext<CartContextData>({} as CartContextData)

export function CartContextProvider({ children }: CartProviderProps) {
  const [cart, setCard] = useState<ProductInCart[]>([])
  const [payment, setPayment] = useState<PaymentMethod>(null)

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

  function updateProduct(productId: number, amount: number) {
    const updateCart = [...cart]
    const productExists = updateCart.find(item => item.id === productId)

    if (productExists) {
      productExists.amount = amount
      setCard(updateCart)
    } else {
      toast.error('Falha na atualização da quantidade do produto')
    }
  }

  function removeProduct(productId: number) {
    const updateCart = [...cart]
    const productIndex = updateCart.findIndex(
      product => product.id === productId
    )
    if (productIndex >= 0) {
      updateCart.splice(productIndex, 1)
      setCard(updateCart)
    } else {
      toast.error('Erro na remoção do produto')
    }
  }

  function selectPayment(method: PaymentMethod) {
    setPayment(method)
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addProduct,
        removeProduct,
        updateProduct,
        payment,
        selectPayment
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

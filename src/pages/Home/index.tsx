import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import {
  CoffeeListSection,
  HomeContainer,
  IntroSection,
  QualityList
} from './styles'

import listCoffeesJson from '../../../products.json'

import ImgCoffeeDelivery from '../../assets/images/image-home.svg'
import { CoffeeCard } from '../../components/CoffeeCard'

import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../contexts/CartContext'

interface ListCoffees {
  id: number
  image: string
  typesCoffee: string[]
  name: string
  description: string
  price: number
}

export function Home() {
  const [coffees, setCoffees] = useState<ListCoffees[]>([])

  useEffect(() => {
    async function getCoffees() {
      const data = listCoffeesJson.coffees.map(coffee => ({
        id: coffee.id,
        image: coffee.image,
        typesCoffee: coffee.typesCoffee,
        name: coffee.name,
        description: coffee.description,
        price: Number(coffee.price)
      }))
      setCoffees(data)
    }
    getCoffees()
  }, [])

  return (
    <HomeContainer>
      <IntroSection>
        <aside>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <strong>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </strong>

          <QualityList>
            <li>
              <i>
                <ShoppingCart size={15} />
              </i>
              <span>Compra simples e segura</span>
            </li>
            <li>
              <i>
                <Timer size={15} />
              </i>
              <span>Entrega rápida e rastreada</span>
            </li>
            <li>
              <i>
                <Package size={15} />
              </i>
              <span>Embalagem mantém o café intacto</span>
            </li>
            <li>
              <i>
                <Coffee size={15} />
              </i>
              <span>O café chega fresquinho até você</span>
            </li>
          </QualityList>
        </aside>
        <img
          src={ImgCoffeeDelivery}
          alt="Copo de café com logo Coffee Delivery"
        />
      </IntroSection>

      <CoffeeListSection>
        <h2>Nossos cafés</h2>
        <ul>
          {coffees.map(coffee => (
            <li key={coffee.id}>
              <CoffeeCard
                id={coffee.id}
                image={coffee.image}
                typesCoffee={coffee.typesCoffee}
                name={coffee.name}
                description={coffee.description}
                price={coffee.price}
              />
            </li>
          ))}
        </ul>
      </CoffeeListSection>
    </HomeContainer>
  )
}

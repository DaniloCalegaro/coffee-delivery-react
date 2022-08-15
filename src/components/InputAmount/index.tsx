import { useEffect, useState } from 'react'
import { InputAmountContainer } from './styles'

interface InputAmountProps {
  preLoadAmount?: number
  handleSetAmountProduct?: (amount: number) => void
}

export function InputAmount({
  preLoadAmount = 0,
  handleSetAmountProduct
}: InputAmountProps) {
  const [amount, setAmount] = useState(0)

  useEffect(() => {
    if (preLoadAmount) {
      setAmount(preLoadAmount)
    }
  }, [])

  function increaseAmount() {
    setAmount(state => state + 1)

    if (handleSetAmountProduct) {
      handleSetAmountProduct(amount + 1)
    }
  }

  function decreaseAmount() {
    if (amount > 0) {
      setAmount(state => state - 1)
      if (handleSetAmountProduct) {
        handleSetAmountProduct(amount - 1)
      }
    }
  }

  return (
    <InputAmountContainer>
      <button type="button" onClick={decreaseAmount}>
        {' '}
        -{' '}
      </button>
      <input type="text" readOnly value={amount}></input>
      <button type="button" onClick={increaseAmount}>
        {' '}
        +{' '}
      </button>
    </InputAmountContainer>
  )
}

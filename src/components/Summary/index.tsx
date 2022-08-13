import { ItensCart } from '../ItenCart'
import { SummaryContainer } from './styles'

export function Summary() {
  return (
    <SummaryContainer>
      <ItensCart />
      <ItensCart />
      <ItensCart />
      <ItensCart />
      <div className="sums">
        <span>Total de Itens</span>
        <strong>R$ 29,70</strong>
        <span>Entrega</span>
        <strong>R$ 3,50</strong>
        <span>Total</span>
        <strong>R$ 33,20</strong>
        <button type="button">Confirmar pedido</button>
      </div>
    </SummaryContainer>
  )
}

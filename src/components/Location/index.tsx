import { MapPin } from 'phosphor-react'
import { LocationContainer } from './styles'

export function Location() {
  return (
    <LocationContainer>
      <a href="#">
        <MapPin size={19} />
        <span>Batatais, SP</span>
      </a>
    </LocationContainer>
  )
}

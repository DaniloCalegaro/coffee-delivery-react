import { MapPin } from 'phosphor-react'
import { LocationContainer } from './styles'

export function Location() {
  return (
    <LocationContainer>
      <div>
        <MapPin size={19} />
        <span>Batatais, SP</span>
      </div>
    </LocationContainer>
  )
}

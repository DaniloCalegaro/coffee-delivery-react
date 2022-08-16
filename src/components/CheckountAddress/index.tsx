import { FormProvider, useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { MapPin } from 'phosphor-react'
import { CheckountAddressContainer } from './styles'

export function CheckountAddress() {
  const NewRequestCoffeeFormDataSchema = zod.object({
    cep: zod.string().min(3),
    street: zod.string().min(5),
    number: zod.string().min(1),
    complement: zod.string().optional(),
    district: zod.string().min(3),
    city: zod.string().min(2),
    uf: zod.string().min(2)
  })

  type NewRequestCoffeeFormData = zod.infer<
    typeof NewRequestCoffeeFormDataSchema
  >

  const newRequestCoffeeForm = useForm<NewRequestCoffeeFormData>({
    resolver: zodResolver(NewRequestCoffeeFormDataSchema)
  })

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors }
  } = newRequestCoffeeForm

  function handleSubmitNewAddress(data: NewRequestCoffeeFormData) {
    console.log(data)
    reset()
  }

  return (
    <CheckountAddressContainer>
      <div className="aderressInfo">
        <i>
          <MapPin size={20} />
        </i>

        <div>
          <strong>Endereço da entrega</strong>
          <span>Informe o endereço onde deseja receber seu pedido</span>
        </div>
      </div>

      <form id="address-form" onSubmit={handleSubmit(handleSubmitNewAddress)}>
        <input
          id="cep"
          type="text"
          placeholder="CEP"
          aria-invalid={errors.cep ? 'true' : 'false'}
          {...register('cep')}
        />

        <input
          id="street"
          type="text"
          placeholder="Rua"
          aria-invalid={errors.street ? 'true' : 'false'}
          {...register('street')}
        />
        <input
          id="number"
          type="text"
          placeholder="Número"
          aria-invalid={errors.number ? 'true' : 'false'}
          {...register('number')}
        />
        <input
          id="complement"
          type="text"
          placeholder="Complemento"
          aria-invalid={errors.complement ? 'true' : 'false'}
          {...register('complement')}
        />
        <input
          id="district"
          type="text"
          placeholder="Bairro"
          aria-invalid={errors.district ? 'true' : 'false'}
          {...register('district')}
        />
        <input
          id="city"
          type="text"
          placeholder="Cidade"
          aria-invalid={errors.city ? 'true' : 'false'}
          {...register('city')}
        />
        <input
          id="uf"
          type="text"
          placeholder="UF"
          aria-invalid={errors.uf ? 'true' : 'false'}
          {...register('uf')}
        />
      </form>
    </CheckountAddressContainer>
  )
}

import * as S from './styles'
import { FacebookSquare } from '@styled-icons/boxicons-logos/FacebookSquare'
import { Instagram } from '@styled-icons/boxicons-logos/Instagram'
import { Phone } from '@styled-icons/boxicons-regular/Phone'

type Props = {
  colorIcon?: string
}

const Icons = ({ colorIcon = '#28B0D1' }: Props) => (
  <S.Wrapper>
    <FacebookSquare width="50" color={colorIcon} />
    <Instagram width="50" color={colorIcon} />
    <Phone width="50" color={colorIcon} />
  </S.Wrapper>
)

export default Icons

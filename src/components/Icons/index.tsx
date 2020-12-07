import * as S from './styles'
import { FacebookSquare } from '@styled-icons/boxicons-logos/FacebookSquare'
import { Instagram } from '@styled-icons/boxicons-logos/Instagram'
import { Phone } from '@styled-icons/boxicons-regular/Phone'
import { AngleLeft } from '@styled-icons/fa-solid/AngleLeft'
import { AngleRight } from '@styled-icons/fa-solid/AngleRight'

type Props = {
  colorIcon?: string
}

const Icons = ({ colorIcon = '#28B0D1' }: Props) => (
  <S.Wrapper>
    <FacebookSquare width="50" color={colorIcon} />
    <Instagram width="50" color={colorIcon} />
    <Phone width="50" color={colorIcon} />
    <AngleLeft width="25" color={colorIcon} />
    <AngleRight width="25" color={colorIcon} />
  </S.Wrapper>
)

export default Icons

import * as S from './styles'
import { FacebookSquare } from '@styled-icons/boxicons-logos/FacebookSquare'
import { Instagram } from '@styled-icons/boxicons-logos/Instagram'
import { Phone } from '@styled-icons/boxicons-regular/Phone'
import { AngleLeft } from '@styled-icons/fa-solid/AngleLeft'
import { AngleRight } from '@styled-icons/fa-solid/AngleRight'
import { Clock } from '@styled-icons/bootstrap/Clock'
import { Telephone } from '@styled-icons/bootstrap/Telephone'
import { TelephoneFill } from '@styled-icons/bootstrap/TelephoneFill'

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
    <Clock width="30" color={colorIcon} />
    <Telephone width="30" color={colorIcon} />
    <TelephoneFill width="30" color={colorIcon} />
  </S.Wrapper>
)

export default Icons

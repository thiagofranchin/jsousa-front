import * as S from './styles'

type Props = {
  classComponent?: string
}

const Logo = ({ classComponent }: Props) => (
  <S.Wrapper className={classComponent ? classComponent : ''}>
    <img
      src="https://res.cloudinary.com/jsousacleaningservices/image/upload/v1608359292/images-default/jsousa-logo_iydyye.svg"
      alt="Logo"
    />
  </S.Wrapper>
)

export default Logo

import * as S from './styles'

type Props = {
  classComponent?: string
  widthLogo?: string
  urlImage?: string
}

const Logo = ({ classComponent, widthLogo, urlImage }: Props) => (
  <S.Wrapper className={classComponent ? classComponent : ''}>
    <S.LogoWrapper
      src={
        urlImage
          ? urlImage
          : 'https://res.cloudinary.com/jsousacleaningservices/image/upload/v1608359292/images-default/jsousa-logo_iydyye.svg'
      }
      alt="Logo"
      width={widthLogo}
    ></S.LogoWrapper>
  </S.Wrapper>
)

export default Logo

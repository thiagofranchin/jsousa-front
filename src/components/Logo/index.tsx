import * as S from './styles'

type Props = {
  classComponent?: string
  widthLogo?: string
  urlImage?: string
  urlImageMobile?: string
}

const Logo = ({
  classComponent,
  widthLogo,
  urlImage = 'https://res.cloudinary.com/jsousacleaningservices/image/upload/v1608359292/images-default/jsousa-logo_iydyye.svg',
  urlImageMobile = 'https://res.cloudinary.com/jsousacleaningservices/image/upload/v1609627797/images-default/jsousa-logo_white_j8tfvg.svg'
}: Props) => (
  <S.Wrapper className={`logo ${classComponent ? classComponent : ''}`}>
    <S.LogoWrapper
      className="d-none d-md-block"
      src={
        urlImage
          ? urlImage
          : 'https://res.cloudinary.com/jsousacleaningservices/image/upload/v1608359292/images-default/jsousa-logo_iydyye.svg'
      }
      alt="Logo"
      width={widthLogo}
    />

    <S.LogoWrapper
      className="d-md-none"
      src={urlImageMobile ? urlImageMobile : urlImage}
      alt="Logo"
      width={widthLogo}
    />
  </S.Wrapper>
)

export default Logo

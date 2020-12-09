import * as S from './styles'

type Props = {
  classComponent?: string
  title?: string
  colorTitle?: string
  subTitle?: string
  colorSubTitle?: string
  bgImageUrl?: string
  bgColor?: string
}

const HeroSmall = ({
  classComponent,
  title,
  colorTitle,
  subTitle,
  colorSubTitle,
  bgImageUrl,
  bgColor
}: Props) => (
  <S.Wrapper className={classComponent ? classComponent : ''}>
    <S.HeroSmallWrapper
      style={{ backgroundImage: `url(${bgImageUrl})` }}
      className={`${bgColor ? `bg-${bgColor}` : ''}`}
    >
      <div className="container">
        <S.SubTitle
          className={`${colorSubTitle ? `text-${colorSubTitle}` : ''}`}
        >
          {subTitle}
        </S.SubTitle>
        <S.Title className={`${colorTitle ? `text-${colorTitle}` : ''}`}>
          {title}
        </S.Title>
      </div>
    </S.HeroSmallWrapper>
  </S.Wrapper>
)

export default HeroSmall

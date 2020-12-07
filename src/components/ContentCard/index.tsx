import * as S from './styles'

type Props = {
  eyebrow?: string
  eyebrowLinkColor?: string
  title?: string
  text?: string
  alignText?: string
  bgColor?: string
  textColor?: string
  classContainer?: string
  contentIsFluid?: boolean
  urlImage?: string
  altImage?: string
  linkText?: string
  linkUrl?: string
}

const ContentCard = ({
  eyebrow,
  eyebrowLinkColor,
  title,
  text,
  alignText,
  bgColor,
  textColor,
  classContainer,
  urlImage,
  altImage,
  linkText,
  linkUrl
}: Props) => (
  <S.ContentCardWrapper
    className={`jumbotron
      ${bgColor ? `bg-${bgColor}` : ''}
      ${textColor ? `text-${textColor}` : ''}
      ${classContainer ? `text-${classContainer}` : ''}
    `}
  >
    <S.ContentCardRowWrapper
      className={`d-flex 
      ${alignText == 'right' ? 'flex-row-reverse' : 'flex-row'}`}
    >
      <S.ContentCardColumnWrapper className="col-lg-6">
        <S.ContentCardEyeBrow
          className={`${eyebrowLinkColor ? `text-${eyebrowLinkColor}` : ''}`}
        >
          <small
            className={`bor-header ${
              eyebrowLinkColor ? `bg-${eyebrowLinkColor}` : ''
            }`}
          ></small>
          {eyebrow}
          <small
            className={`bor-header bor-right ${
              eyebrowLinkColor ? `bg-${eyebrowLinkColor}` : ''
            }`}
          ></small>
        </S.ContentCardEyeBrow>
        <h2 className={`content-card-title`}>{title}</h2>
        <p className="content-card-text">{text}</p>
        <S.ContentCardLink
          className={`content-card-link ${
            eyebrowLinkColor ? `text-${eyebrowLinkColor}` : ''
          }`}
          href={linkUrl}
        >
          {linkText}
        </S.ContentCardLink>
      </S.ContentCardColumnWrapper>
      <S.ContentCardColumnWrapper className="col-lg-6">
        <img src={urlImage} alt={altImage} className="w-100" />
      </S.ContentCardColumnWrapper>
    </S.ContentCardRowWrapper>
  </S.ContentCardWrapper>
)

export default ContentCard

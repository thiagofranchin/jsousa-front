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
  urlImgTopic1?: string
  altImgTopic1?: string
  textTopic1?: string
  urlImgTopic2?: string
  altImgTopic2?: string
  textTopic2?: string
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
  urlImgTopic1,
  altImgTopic1,
  textTopic1,
  urlImgTopic2,
  altImgTopic2,
  textTopic2,
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
      className={`d-flex row
      ${alignText == 'right' ? 'flex-row' : 'flex-row-reverse'}`}
    >
      <S.ContentCardColumnWrapper className="col-lg-6 content-card-img">
        <img src={urlImage} alt={altImage} className="w-100" />
      </S.ContentCardColumnWrapper>

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

        <S.ContentCardTextList className="content-card-text-list">
          <img src={urlImgTopic1} alt={altImgTopic1} />
          <p>{textTopic1}</p>
        </S.ContentCardTextList>

        <S.ContentCardTextList className="content-card-text-list">
          <img src={urlImgTopic2} alt={altImgTopic2} />
          <p>{textTopic2}</p>
        </S.ContentCardTextList>
        <S.ContentCardLink
          className={`content-card-link ${
            eyebrowLinkColor ? `text-${eyebrowLinkColor}` : ''
          }`}
          href={linkUrl}
        >
          {linkText}
        </S.ContentCardLink>
      </S.ContentCardColumnWrapper>
    </S.ContentCardRowWrapper>
  </S.ContentCardWrapper>
)

export default ContentCard

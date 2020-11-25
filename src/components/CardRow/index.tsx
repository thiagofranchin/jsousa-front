import * as S from './styles'

type Props = {
  titleSection?: string
  subTitleSection?: string
  urlImageCard1?: string
  urlImageCard2?: string
  urlImageCard3?: string
  altImageCard1?: string
  altImageCard2?: string
  altImageCard3?: string
  sizeImageCard1?: string
  sizeImageCard2?: string
  sizeImageCard3?: string
  titleCard1?: string
  titleCard2?: string
  titleCard3?: string
  textCard1?: string
  textCard2?: string
  textCard3?: string
}

const CardRow = ({
  titleSection = 'Welcome To J. Sousa Cleaning Services',
  subTitleSection = `Subjects to ecstatic children he could ye leave up as built match. Dejection agreeable attention set suspected led offending dmitting an performed supposing by garden agreed matter.`,
  urlImageCard1 = `https://res.cloudinary.com/jsousacleaningservices/image/upload/v1606274340/images-default/icon-1_ekxwsg.png`,
  urlImageCard2 = `https://res.cloudinary.com/jsousacleaningservices/image/upload/v1606274340/images-default/icon-3_mry7a4.png`,
  urlImageCard3 = `https://res.cloudinary.com/jsousacleaningservices/image/upload/v1606274340/images-default/icon-2_n4lquf.png`,
  altImageCard1 = `Alt image 1`,
  altImageCard2 = `Alt image 2`,
  altImageCard3 = `Alt image 3`,
  sizeImageCard1 = `50`,
  sizeImageCard2 = `50`,
  sizeImageCard3 = `50`,
  titleCard1 = `Card title 1`,
  titleCard2 = `Card title 2`,
  titleCard3 = `Card title 3`,
  textCard1 = `1 Some quick example text to build on the card title and make up the bulk of the card content.`,
  textCard2 = `2 Some quick example text to build on the card title and make up the bulk of the card content.`,
  textCard3 = `3 Some quick example text to build on the card title and make up the bulk of the card content.`
}: Props) => (
  <>
    <S.CardRowHeader className="col-md-12">
      <S.CardRowTitle>{titleSection}</S.CardRowTitle>
      <S.Divider />
      <S.CardRowParagraph>{subTitleSection}</S.CardRowParagraph>
    </S.CardRowHeader>

    <S.CardRowColumnWrapper className="col-md-4">
      <S.CardWrapper className="card">
        <img
          src={urlImageCard1}
          className={`card-img-top w-${sizeImageCard1}`}
          alt={altImageCard1}
        />
        <div className="card-body">
          <h5 className="card-title">{titleCard1}</h5>
          <p className="card-text">{textCard1}</p>
        </div>
      </S.CardWrapper>
    </S.CardRowColumnWrapper>
    <S.CardRowColumnWrapper className="col-md-4">
      <S.CardWrapper className="card">
        <img
          src={urlImageCard2}
          className={`card-img-top w-${sizeImageCard2}`}
          alt={altImageCard2}
        />
        <div className="card-body">
          <h5 className="card-title">{titleCard2}</h5>
          <p className="card-text">{textCard2}</p>
        </div>
      </S.CardWrapper>
    </S.CardRowColumnWrapper>
    <S.CardRowColumnWrapper className="col-md-4">
      <S.CardWrapper className="card">
        <img
          src={urlImageCard3}
          className={`card-img-top w-${sizeImageCard3}`}
          alt={altImageCard3}
        />
        <div className="card-body">
          <h5 className="card-title">{titleCard3}</h5>
          <p className="card-text">{textCard3}</p>
        </div>
      </S.CardWrapper>
    </S.CardRowColumnWrapper>
  </>
)

export default CardRow

import * as S from './styles'

type Props = {
  classComponent?: string
  cardLeftUrlImage?: string
  cardLeftAltImage?: string
  cardLeftTitle?: string
  cardLeftText?: string
  cardRightUrlImage?: string
  cardRightAltImage?: string
  cardRightTitle?: string
  cardRightText?: string
}

const CardRowSimple = ({
  classComponent,
  cardLeftUrlImage,
  cardLeftAltImage,
  cardLeftTitle,
  cardLeftText,
  cardRightUrlImage,
  cardRightAltImage,
  cardRightTitle,
  cardRightText
}: Props) => (
  <>
    <div className="col-md-6 mb-4">
      <S.Wrapper className={classComponent ? classComponent : ''}>
        <div className="row no-gutters position-relative">
          <div className="col-md-6 mb-md-0 p-md-4">
            <img
              src={cardLeftUrlImage ? cardLeftUrlImage : ''}
              className="w-100"
              alt={cardLeftAltImage ? cardLeftAltImage : ''}
            />
          </div>
          <div className="col-md-6 position-static p-4 pl-md-0">
            <S.TitleCard className="mt-0">
              {cardLeftTitle ? cardLeftTitle : ''}
            </S.TitleCard>
            <p>{cardLeftText ? cardLeftText : ''}</p>
          </div>
        </div>
      </S.Wrapper>
    </div>
    <div className="col-md-6 mb-4">
      <S.Wrapper className={classComponent ? classComponent : ''}>
        <div className="row no-gutters position-relative">
          <div className="col-md-6 mb-md-0 p-md-4">
            <img
              src={cardRightUrlImage ? cardRightUrlImage : ''}
              className="w-100"
              alt={cardRightAltImage ? cardRightAltImage : ''}
            />
          </div>
          <div className="col-md-6 position-static p-4 pl-md-0">
            <S.TitleCard className="mt-0">
              {cardRightTitle ? cardRightTitle : ''}
            </S.TitleCard>
            <p>{cardRightText ? cardRightText : ''}</p>
          </div>
        </div>
      </S.Wrapper>
    </div>
  </>
)

export default CardRowSimple

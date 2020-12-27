import { Clock } from '@styled-icons/bootstrap/Clock'
import { TelephoneFill } from '@styled-icons/bootstrap/TelephoneFill'

import * as S from './styles'

type Props = {
  classComponent?: string
  cardLeftTitle?: string
  cardLeftText?: string
  cardRightTitle?: string
  cardRightText?: string
  colorIcon?: string
  sizeIcon?: number
}

const CardIcon = ({
  classComponent,
  cardLeftTitle,
  cardLeftText,
  cardRightTitle,
  cardRightText,
  colorIcon,
  sizeIcon = 40
}: Props) => (
  <>
    <div className="mb-4">
      <S.Wrapper className={classComponent ? classComponent : ''}>
        <div className="row no-gutters position-relative">
          <div
            className={`col-icon p-md-4 d-flex align-items-center ${
              colorIcon ? `text-${colorIcon}` : ''
            }`}
          >
            <Clock width={sizeIcon} />
          </div>
          <div className="col-text position-static p-4 pl-md-0 d-flex align-items-center">
            <div>
              <S.TitleCard className="mt-0">
                {cardLeftTitle ? cardLeftTitle : ''}
              </S.TitleCard>
              <S.TextCard>{cardLeftText ? cardLeftText : ''}</S.TextCard>
            </div>
          </div>
        </div>
      </S.Wrapper>
    </div>
    <div className="mb-4">
      <S.Wrapper className={classComponent ? classComponent : ''}>
        <div className="row no-gutters position-relative">
          <div
            className={`col-icon p-md-4 d-flex align-items-center ${
              colorIcon ? `text-${colorIcon}` : ''
            }`}
          >
            <TelephoneFill width={sizeIcon} color={colorIcon} />
          </div>
          <div className="col-text position-static p-4 pl-md-0 d-flex align-items-center">
            <div>
              <S.TitleCard className="mt-0">
                {cardRightTitle ? cardRightTitle : ''}
              </S.TitleCard>
              <S.TextCard>{cardRightText ? cardRightText : ''}</S.TextCard>
            </div>
          </div>
        </div>
      </S.Wrapper>
    </div>
  </>
)

export default CardIcon

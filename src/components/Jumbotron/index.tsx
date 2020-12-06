import * as S from './styles'

type Props = {
  title?: string
  text?: string
  alignText?: string
  bgColor?: string
  textColor?: string
  classContainer?: string
  contentIsFluid?: boolean
}

const Jumbotron = ({
  title,
  text,
  alignText,
  bgColor,
  textColor,
  classContainer,
  contentIsFluid
}: Props) => (
  <S.JumbotronWrapper
    className={`jumbotron jumbotron-fluid
      ${bgColor ? `bg-${bgColor}` : ''}
      ${textColor ? `text-${textColor}` : ''}
    `}
  >
    <div
      className={`container${contentIsFluid ? '-fluid' : ''}
      ${alignText ? `text-${alignText}` : ''}
      ${classContainer ? classContainer : ''}
      `}
    >
      <h1 className="display-4">{title ? title : ''}</h1>
      <p className="lead">{text ? text : text}</p>
    </div>
  </S.JumbotronWrapper>
)

export default Jumbotron

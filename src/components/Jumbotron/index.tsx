import * as S from './styles'

type Props = {
  alignText?: string
  bgColor?: string
  classContainer?: string
  contentIsFluid?: boolean
  text?: string
  textColor?: string
  title?: string
}

const Jumbotron = ({
  alignText,
  bgColor,
  classContainer,
  contentIsFluid,
  text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lobortis tempor vestibulum. Integer rutrum in lectus nec accumsan. Nulla ultricies convallis justo non tempor. Maecenas posuere imperdiet dictum. Donec luctus ex eu imperdiet finibus. Quisque placerat, nunc luctus pellentesque placerat, est est fringilla ante, id facilisis nunc enim at tellus.',
  textColor,
  title = 'Title'
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
      <h1 className="display-4">{title}</h1>
      <p className="lead">{text}</p>
    </div>
  </S.JumbotronWrapper>
)

export default Jumbotron

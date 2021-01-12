import * as S from './styles'

type CopyrightProps = {
  classComponent?: string
  textAlign?: string
  text?: string
  textColor?: string
  bgColor?: string
  borderColor?: string
}

const Copyright = ({
  classComponent,
  textAlign,
  textColor,
  bgColor,
  borderColor,
  text
}: CopyrightProps) => (
  <S.Wrapper
    className={`copyright ${bgColor ? `bg-${bgColor}` : 'bg-super-dark'} py-3 ${
      borderColor ? `border-${borderColor}` : 'border-primary'
    } border-top w-100 ${classComponent ? classComponent : ''}`}
  >
    <p
      className={`px-4 ${textAlign ? `text-${textAlign}` : 'text-center'} ${
        textColor ? `text-${textColor}` : 'text-white'
      } mb-0`}
    >
      {text && text}
    </p>
  </S.Wrapper>
)

export default Copyright

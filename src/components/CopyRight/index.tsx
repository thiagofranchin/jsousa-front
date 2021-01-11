import * as S from './styles'

type Props = {
  classComponent?: string
}

const CopyRight = ({ classComponent }: Props) => (
  <S.Wrapper className={`copy-right ${classComponent ? classComponent : ''}`}>
    <h1>CopyRight</h1>
  </S.Wrapper>
)

export default CopyRight

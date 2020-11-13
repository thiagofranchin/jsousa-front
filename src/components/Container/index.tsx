import { ReactNode } from 'react'
import * as S from './styles'

type Props = {
  children: ReactNode
  isFluid?: boolean
  classContainer?: string
}

const Container = ({ children, isFluid = false, classContainer }: Props) => (
  <S.ContainerSection>
    <div className={`container${isFluid ? '-fluid' : ''} ${classContainer}`}>
      <div className="row">{children}</div>
    </div>
  </S.ContainerSection>
)

export default Container

import * as S from './styles'
import Logo from '../Logo'

import mainMenu from './content'

type Props = {
  classComponent?: string
  bgColorMenu?: string
  colorTextMenu?: string
}

const MainMenu = ({ classComponent, bgColorMenu, colorTextMenu }: Props) => {
  return (
    <S.Wrapper className={classComponent ? classComponent : ''}>
      <nav
        className={`navbar navbar-expand-md ${
          bgColorMenu ? `bg-${bgColorMenu}` : 'bg-light'
        }`}
      >
        <a className="navbar-brand d-md-none" href="/">
          <Logo widthLogo="200" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {mainMenu.map(({ label, url }, index) => (
              <S.MenuButton
                className={`nav-item ${index == 0 ? 'active' : ''}`}
                key={index}
              >
                <a
                  className={`nav-link ${
                    colorTextMenu ? `text-${colorTextMenu}` : ''
                  }`}
                  href={url}
                >
                  {label}
                </a>
              </S.MenuButton>
            ))}
          </ul>
        </div>
      </nav>
    </S.Wrapper>
  )
}

export default MainMenu

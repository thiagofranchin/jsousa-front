import Link from 'next/link'
import { useRouter } from 'next/router'
import { Menu } from '@styled-icons/boxicons-regular/Menu'
import Logo from '../Logo'

import mainMenu from './content'

import * as S from './styles'

type MainProps = {
  classComponent?: string
  bgColorMenu?: string
  colorTextMenu?: string
  bgLinkActiveColor?: string
}

const MainMenu = ({
  classComponent,
  bgColorMenu,
  colorTextMenu,
  bgLinkActiveColor
}: MainProps) => {
  const router = useRouter()
  const currentPage = router.pathname

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
          <span className="navbar-toggler-icon">
            <Menu width="30" />
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {mainMenu.map(({ label, url }, index) => (
              <S.MenuButton
                bgColorLink={bgLinkActiveColor}
                className={`nav-item ${url == currentPage ? 'active' : ''} ${
                  colorTextMenu ? `text-${colorTextMenu}` : 'text-primary'
                }`}
                key={index}
              >
                <Link href={url} prefetch={false}>
                  <a
                    className={`nav-link ${
                      colorTextMenu ? `text-${colorTextMenu}` : ''
                    } `}
                  >
                    {label}
                  </a>
                </Link>
              </S.MenuButton>
            ))}
          </ul>
        </div>
      </nav>
    </S.Wrapper>
  )
}

export default MainMenu

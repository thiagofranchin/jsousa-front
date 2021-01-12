import Link from 'next/link'
import { useRouter } from 'next/router'

import Container from '../Container'
import Logo from '../Logo'
import SocialMedia from '../SocialMedia'
import Copyright from '../Copyright'

import * as S from './styles'

import mainMenu from './content'

type Props = {
  classComponent?: string
  colorTextMenu?: string
}

const Footer = ({ classComponent, colorTextMenu }: Props) => {
  const router = useRouter()
  const currentPage = router.pathname

  return (
    <>
      <S.Wrapper
        className={`footer py-5 bg-dark text-white ${
          classComponent ? classComponent : ''
        }`}
      >
        <Container>
          <div className="col-md-4 mb-4 mb-md-0 text-center text-md-left">
            <Logo
              classComponent="mb-3"
              urlImage="https://res.cloudinary.com/jsousacleaningservices/image/upload/v1609627797/images-default/jsousa-logo_white_j8tfvg.svg"
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
              cumque ab earum soluta nihil quam incidunt, necessitatibus
              nesciunt esse quo, fuga itaque? Dolore beatae doloremque
              distinctio excepturi ut unde delectus.
            </p>
          </div>
          <div className="col-md-2 mb-4 mb-md-0 text-center text-md-left">
            <S.TitleItem>Pages:</S.TitleItem>
            <ul className="navbar-nav">
              {mainMenu.map(({ label, url }, index) => (
                <S.MenuButton
                  className={`nav-item ${url == currentPage ? 'active' : ''} ${
                    colorTextMenu ? `text-${colorTextMenu}` : 'text-primary'
                  }`}
                  key={index}
                >
                  <Link href={url}>
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
          <div className="col-md-3 mb-4 mb-md-0 text-center text-md-left">
            <S.TitleItem>Contact Info</S.TitleItem>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
              cumque ab earum soluta nihil quam incidunt, necessitatibus
              nesciunt esse quo, fuga itaque? Dolore beatae doloremque
              distinctio excepturi ut unde delectus.
            </p>
          </div>
          <div className="col-md-3 mb-4 mb-md-0 text-center text-md-left">
            <S.TitleItem>Working Hours</S.TitleItem>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
              cumque ab earum soluta nihil quam incidunt, necessitatibus
              nesciunt esse quo, fuga itaque.
            </p>
            <SocialMedia widthIcon={30} />
          </div>
        </Container>
      </S.Wrapper>
      <Container isFluid={true}>
        <Copyright text="© J. Sousa Cleaning Services 2021 | All rights reserved." />
      </Container>
    </>
  )
}

export default Footer

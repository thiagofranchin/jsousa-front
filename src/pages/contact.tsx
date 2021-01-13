import Layout from '../components/Layout'
import HeroSmall from '../components/HeroSmall'

export default function Contact() {
  return (
    <>
      <Layout>
        <HeroSmall
          bgColor="primary"
          bgImageUrl="https://res.cloudinary.com/jsousacleaningservices/image/upload/v1607444937/images-default/hero-small_ejdysb.jpg"
          title="Contact Us"
          colorTitle="primary"
          subTitle="How can we help you?"
          colorSubTitle="dark"
        />
      </Layout>
    </>
  )
}

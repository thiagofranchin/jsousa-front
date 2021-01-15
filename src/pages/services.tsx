import Layout from '../components/Layout'
import HeroSmall from '../components/HeroSmall'

export default function Services() {
  return (
    <>
      <Layout>
        <HeroSmall
          bgColor="light"
          bgImageUrl="https://res.cloudinary.com/jsousacleaningservices/image/upload/v1607444937/images-default/hero-small_ejdysb.jpg"
          colorSubTitle="white"
          colorTitle="primary"
          subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          title="Services"
        />
      </Layout>
    </>
  )
}

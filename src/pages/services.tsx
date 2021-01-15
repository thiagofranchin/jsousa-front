import Layout from '../components/Layout'
import Carousel from '../components/Carousel'
import CardRow from '../components/CardRow'
import ContentCard from '../components/ContentCard'
import Jumbotron from '../components/Jumbotron'

export default function Services() {
  return (
    <>
      <Layout>
        <Carousel />

        <CardRow
          bgColor=""
          contentIsFluid={false}
          classComponent="py-5"
          titleSection="Services We Offer"
          subTitleSection="Subjects to ecstatic children he could ye leave up as built match. Dejection agreeable attention set suspected led offending dmitting an performed supposing by garden agreed matter ."
          urlImageCard1="https://res.cloudinary.com/jsousacleaningservices/image/upload/v1606274340/images-default/icon-1_ekxwsg.png"
          urlImageCard2="https://res.cloudinary.com/jsousacleaningservices/image/upload/v1606274340/images-default/icon-3_mry7a4.png"
          urlImageCard3="https://res.cloudinary.com/jsousacleaningservices/image/upload/v1606274340/images-default/icon-2_n4lquf.png"
          sizeImageCard1="50"
          sizeImageCard2="50"
          sizeImageCard3="50"
          titleCard1="Office cleaning"
          titleCard2="Floor cleaning"
          titleCard3="Pool Cleaning"
          textCard1="Lorem ipsum dolor sit amet consectetur adipiscing elited hasellus. "
          textCard2="Lorem ipsum dolor sit amet consectetur adipiscing elited hasellus. "
          textCard3="Lorem ipsum dolor sit amet consectetur adipiscing elited hasellus."
        />

        <ContentCard
          alignText="left"
          altImage="Woman with some cleaning productss"
          altImgTopic1="Woman with some cleaning productss"
          altImgTopic2="Woman with some cleaning productss"
          bgColor="super-light"
          classContainer=""
          contentIsFluid={false}
          eyebrow=""
          eyebrowLinkColor="primary"
          linkText=""
          linkUrl=""
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lobortis tempor vestibulum. Integer rutrum in lectus nec accumsan. Nulla ultricies convallis justo non tempor. Maecenas posuere imperdiet dictum. Donec luctus ex eu imperdiet finibus. Quisque placerat, nunc luctus pellentesque placerat, est est fringilla ante, id facilisis nunc enim at tellus."
          textColor=""
          textTopic1="We offer a flat-rate pricing for our weekly biweekly or monthly residential cleaning service wWhether"
          textTopic2="We offer a flat-rate pricing for our weekly biweekly"
          title="Title"
          urlImage="https://res.cloudinary.com/jsousacleaningservices/image/upload/v1606274341/images-default/image-7_fpt3rl.jpg"
          urlImgTopic1="https://res.cloudinary.com/jsousacleaningservices/image/upload/v1610506244/images-default/iconHouse_hm1mli.svg"
          urlImgTopic2="https://res.cloudinary.com/jsousacleaningservices/image/upload/v1610506244/images-default/iconHeart_og4jub.svg"
        />
        <Jumbotron
          title="Title"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lobortis tempor vestibulum. Integer rutrum in lectus nec accumsan. Nulla ultricies convallis justo non tempor. Maecenas posuere imperdiet dictum. Donec luctus ex eu imperdiet finibus. Quisque placerat, nunc luctus pellentesque placerat, est est fringilla ante, id facilisis nunc enim at tellus."
          textAlign=""
          textColor="white"
          bgColor="primary"
          classContainer=""
          contentIsFluid={false}
        />
      </Layout>
    </>
  )
}

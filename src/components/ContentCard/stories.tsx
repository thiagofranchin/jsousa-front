import { Story, Meta } from '@storybook/react/types-6-0'
import Container from 'components/Container'
import ContentCard from '.'

export default {
  title: 'ContentCard',
  component: ContentCard,
  argTypes: {
    eyebrowLinkColor: {
      control: {
        type: 'select',
        options: [
          'white',
          'primary',
          'secondary',
          'success',
          'info',
          'warning',
          'danger',
          'light',
          'dark'
        ]
      }
    },
    alignText: {
      control: {
        type: 'select',
        options: ['left', 'right']
      }
    },
    bgColor: {
      control: {
        type: 'select',
        options: [
          'white',
          'primary',
          'secondary',
          'success',
          'info',
          'warning',
          'danger',
          'light',
          'dark'
        ]
      }
    },
    textColor: {
      control: {
        type: 'select',
        options: [
          'white',
          'primary',
          'secondary',
          'success',
          'info',
          'warning',
          'danger',
          'light',
          'dark'
        ]
      }
    }
  }
} as Meta

export const Default: Story = (args) => (
  <Container isFluid={args.contentIsFluid}>
    <ContentCard {...args} />
  </Container>
)

Default.args = {
  eyebrow: 'Eyebrow',
  eyebrowLinkColor: 'primary',
  title: 'Title',
  text:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lobortis tempor vestibulum. Integer rutrum in lectus nec accumsan. Nulla ultricies convallis justo non tempor. Maecenas posuere imperdiet dictum. Donec luctus ex eu imperdiet finibus. Quisque placerat, nunc luctus pellentesque placerat, est est fringilla ante, id facilisis nunc enim at tellus.',
  alignText: 'right',
  bgColor: 'white',
  textColor: '',
  classContainer: '',
  urlImgTopic1: `https://res.cloudinary.com/jsousacleaningservices/image/upload/v1607895219/images-default/iconHouse_vwnc0f.png`,
  altImgTopic1: 'Woman with some cleaning productss',
  textTopic1:
    'We offer a flat-rate pricing for our weekly biweekly or monthly residential cleaning service wWhether',
  urlImgTopic2: `https://res.cloudinary.com/jsousacleaningservices/image/upload/v1607895219/images-default/iconHouse2_pubhex.png`,
  altImgTopic2: 'Woman with some cleaning productss',
  textTopic2: 'We offer a flat-rate pricing for our weekly biweekly',
  urlImage: `https://res.cloudinary.com/jsousacleaningservices/image/upload/v1606274341/images-default/image-content-card-1_h7qi0w.jpg`,
  altImage: 'Woman with some cleaning productss',
  linkText: 'About Us',
  linkUrl: 'Url',
  contentIsFluid: false
}
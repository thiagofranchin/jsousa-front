import { Story, Meta } from '@storybook/react/types-6-0'
import Logo from '.'

export default {
  title: 'Logo',
  component: Logo
} as Meta

export const Default: Story = (args) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <Logo {...args} />
        </div>
      </div>
    </div>
  )
}

Default.args = {
  widthLogo: `250`,
  urlImage:
    'https://res.cloudinary.com/jsousacleaningservices/image/upload/v1608359292/images-default/jsousa-logo_iydyye.svg',
  urlImageMobile:
    'https://res.cloudinary.com/jsousacleaningservices/image/upload/v1609627797/images-default/jsousa-logo_white_j8tfvg.svg'
}

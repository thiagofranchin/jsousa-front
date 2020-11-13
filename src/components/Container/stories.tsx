import { Story, Meta } from '@storybook/react/types-6-0'
import Container from '.'

export default {
  title: 'Container',
  component: Container
} as Meta

export const Default: Story = () => {
  return (
    <Container isFluid={true} classContainer="p-5 bg-dark">
      <div className="col-sm-4 bg-primary">Primary</div>
      <div className="col-sm-4 bg-success">Success</div>
      <div className="col-sm-4 bg-danger">Danger</div>
    </Container>
  )
}

import { Story, Meta } from '@storybook/react/types-6-0'
import Container from '../Container'
import CardRow from '.'

export default {
  title: 'CardRow',
  component: CardRow
} as Meta

export const Default: Story = (args) => (
  <Container isFluid={false}>
    <CardRow {...args} />
  </Container>
)

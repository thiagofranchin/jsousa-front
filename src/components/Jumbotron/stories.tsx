import { Story, Meta } from '@storybook/react/types-6-0'
import Jumbotron from '.'

export default {
  title: 'Jumbotron',
  component: Jumbotron
} as Meta

export const Default: Story = (args) => <Jumbotron {...args} />

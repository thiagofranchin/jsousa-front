import { Story, Meta } from '@storybook/react/types-6-0'
import MainMenu from '.'

export default {
  title: 'MainMenu',
  component: MainMenu
} as Meta

export const Default: Story = (args) => <MainMenu {...args} />

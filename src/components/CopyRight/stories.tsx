import { Story, Meta } from '@storybook/react/types-6-0'
import CopyRight from '.'

export default {
  title: 'CopyRight',
  component: CopyRight
} as Meta

export const Default: Story = (args) => <CopyRight {...args} />

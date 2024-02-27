import type { Meta, StoryObj } from '@storybook/react'

import { Icon } from '../../components'
import { argTypes } from './argTypes'

const meta = {
	title: 'Components/Icon',
	component: Icon,
	parameters: {
		layout: 'centered'
	},
	tags: [ 'autodocs' ],
	argTypes
} satisfies Meta<typeof Icon>

export default meta
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		path: '../../assets/sprites/icons-sprite.svg',
		size: 'medium',
		name: 'icon-pen'
	}
}
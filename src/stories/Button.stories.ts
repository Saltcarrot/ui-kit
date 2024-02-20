import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '../ui'

const meta = {
	title: 'Button',
	component: Button,
	parameters: {
		layout: 'centered'
	},
	tags: [ 'autodocs' ]
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		label: 'Button'
	}
}

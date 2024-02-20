import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '../../components'

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

export const Default: Story = {
	args: {
		extraClasses: null,
		label: 'Button',
		title: '',
		theme: 'primary',
		size: 'medium',
		type: 'button',
		form: '',
		onClick: null,
		isDisabled: false
	}
}
import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '../../components'
import { argTypes } from './argTypes'

const meta = {
	title: 'Components/Button',
	component: Button,
	parameters: {
		layout: 'centered'
	},
	tags: [ 'autodocs' ],
	argTypes
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
	args: {
		extraClasses: undefined,
		label: 'Button',
		title: undefined,
		theme: 'primary',
		size: 'medium',
		type: 'button',
		form: undefined,
		onClick: undefined,
		isDisabled: false
	}
}
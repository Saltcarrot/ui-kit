import { IButtonComponent } from './interface'

export const defaultProps: IButtonComponent = {
	extraClasses: undefined,
	label: '',
	title: undefined,
	theme: 'primary',
	size: 'medium',
	type: 'button',
	form: undefined,
	icon: undefined,
	isDisabled: false,
	onClick: undefined
}
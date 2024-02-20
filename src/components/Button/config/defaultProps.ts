import { IButtonComponent } from './interface'

export const defaultProps: IButtonComponent = {
	extraClasses: null,
	label: '',
	title: '',
	theme: 'primary',
	size: 'medium',
	type: 'button',
	form: '',
	isDisabled: false,
	onClick: null
}
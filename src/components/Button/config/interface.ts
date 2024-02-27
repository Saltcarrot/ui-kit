import { IExtraClasses, TButtons, TColors, TSizes } from '../../../config'

export interface IButtonComponent {
	extraClasses?: IExtraClasses
	label?: string
	title?: string
	theme?: TColors
	size?: TSizes
	type?: TButtons
	form?: string
	icon?: string
	isDisabled?: boolean
	onClick?: () => void
}
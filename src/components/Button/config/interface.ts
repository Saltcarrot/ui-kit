import { IExtraClasses, TButtons, TColors, TSizes } from '../../../config'

export interface IButtonComponent {
	extraClasses?: IExtraClasses
	label?: string
	title?: string
	theme?: TColors
	size?: TSizes
	type?: TButtons
	form?: string
	isDisabled?: boolean
	onClick?: () => void
}
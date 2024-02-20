import { IExtraClasses, TColors, TSizes } from '../../../config'

export interface IButtonComponent {
	extraClasses?: IExtraClasses
	label?: string
	theme?: TColors
	size?: TSizes
	isDisabled?: boolean
}
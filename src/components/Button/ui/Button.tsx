import { FC } from 'react'
import { defaultProps, IButtonComponent } from '../config'
import { getStringWithUppercaseFirstChar, useCN } from '../../../lib'

import '../styles.pcss'

export const Button: FC<IButtonComponent> = ({
	extraClasses,
	label,
	theme,
	size,
	isDisabled
}) => {
	const { getCN } = useCN('button')
	
	return (
		<button
			className={ getCN('', {
				...extraClasses,
				[`isColor${getStringWithUppercaseFirstChar(theme)}`]: true,
				[`isSize${getStringWithUppercaseFirstChar(size)}`]: true
			}) }
			disabled={ isDisabled }
		>
			{ !!label && (
				<span className={ getCN('label') }>{ label }</span>
			) }
		</button>
	)
}

Button.defaultProps = defaultProps
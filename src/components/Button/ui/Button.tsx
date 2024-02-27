import { FC } from 'react'
import { defaultProps, IButtonComponent } from '../config'
import { getStringWithUppercaseFirstChar, useCN } from '../../../lib'
import { Icon } from '../../Icon'

import '../styles.pcss'

/**
 * Компонент кнопки
 * @param extraClasses{IExtraClasses} - классы для дополнительной кастомизации;
 * @param size{String} - размер;
 * @param title{String} - подсказка при наведении;
 * @param label{String} - текст;
 * @param theme{String} - цвет;
 * @param isDisabled{Boolean} - флаг блокировки;
 * @param type{String} - тип;
 * @param form{String} - `id` формы, к которой привязана кнопка;
 * @param icon{String} - имя иконки;
 * @param onClick{Function} - действие при клике.
 * @return {JSX.Element}
 * */
export const Button: FC<IButtonComponent> = ({
	extraClasses,
	label,
	title,
	theme,
	size,
	type,
	form,
	icon,
	isDisabled,
	onClick
}) => {
	const { getCN } = useCN('button')

	const handleClick = () => {
		if (typeof onClick === 'function') onClick()
	}
	
	return (
		<button
			className={ getCN('', {
				...extraClasses,
				[`isColor${getStringWithUppercaseFirstChar(theme)}`]: true,
				[`isSize${getStringWithUppercaseFirstChar(size)}`]: true,
				isOnlyIcon: !!icon && !label
			}) }
			title={ title }
			type={ type }
			form={ form }
			disabled={ isDisabled }
			onClick={ handleClick }
		>
			{ !!label && (
				<span className={ getCN('label', {
					[`isSize${getStringWithUppercaseFirstChar(size)}`]: true
				}) }>{ label }</span>
			) }
			{ !!icon && <Icon size={ size } name={ icon } /> }
		</button>
	)
}

Button.defaultProps = defaultProps
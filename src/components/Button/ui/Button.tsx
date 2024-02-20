import { FC } from 'react'
import { defaultProps, IButtonComponent } from '../config'
import { getStringWithUppercaseFirstChar, useCN } from '../../../lib'

import '../styles.pcss'

/**
 * Компонент кнопки
 * @param extraClasses{IExtraClasses} - классы для доп. кастомизации
 * @param size{String} - размер кнопки
 * @param title{String} - подсказка при наведении
 * @param label{String} - текст кнопки
 * @param theme{String} - цвет кнопки
 * @param isDisabled{Boolean} - флаг блокировки кнопки
 * @param type{String} - тип кнопки
 * @param form{String} - идентификатор формы, к которой привязана кнопка
 * @param onClick{Function} - действие при клике
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
				[`isSize${getStringWithUppercaseFirstChar(size)}`]: true
			}) }
			title={ title }
			type={ type }
			form={ form }
			disabled={ isDisabled }
			onClick={ handleClick }
		>
			{ !!label && (
				<span className={ getCN('label') }>{ label }</span>
			) }
		</button>
	)
}

Button.defaultProps = defaultProps
import { ArgTypes } from '@storybook/react'
import { IButtonComponent } from '../../components/Button/config'

export const argTypes: Partial<ArgTypes<IButtonComponent>> = {
	extraClasses: {
		description: 'Классы для дополнительной кастомизации в формате `{ key: true }`'
	},
	label: {
		description: 'Текст кнопки'
	},
	type: {
		description: 'Тип кнопки'
	},
	size: {
		description: 'Размер кнопки'
	},
	title: {
		description: 'Текст при наведении'
	},
	form: {
		description: '`id` формы, к которой привязана кнопка'
	},
	icon: {
		description: 'Иконка'
	},
	theme: {
		description: 'Цветовая тема кнопки'
	},
	isDisabled: {
		description: 'Флаг блокировки'
	},
	onClick: {
		description: 'Обработчик нажания на кнопку'
	}
}
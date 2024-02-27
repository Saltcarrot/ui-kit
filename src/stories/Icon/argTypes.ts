import { ArgTypes } from '@storybook/react'
import { IIconComponent } from '../../components/Icon/config'

export const argTypes: Partial<ArgTypes<IIconComponent>> = {
	name: {
		description: 'Наименование иконки'
	},
	path: {
		description: 'Путь до спрайта с иконками'
	},
	size: {
		description: 'Размер иконки'
	}
}
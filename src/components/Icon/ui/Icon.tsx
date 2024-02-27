import { FC } from 'react'
import { getStringWithUppercaseFirstChar, useCN } from '../../../lib'
import { defaultProps, IIconComponent } from '../config'

import '../styles.pcss'

/**
 * Компонент иконки
 * @param path{String} - путь до спрайта с иконками;
 * @param name{String} - имя;
 * @param size{String} - размер.
 * @return {JSX.Element}
 */
export const Icon: FC<IIconComponent> = ({
	path,
	name,
	size
}) => {
	const { getCN } = useCN('icon')
	
	return !!name && (
		<svg className={ getCN('', {
			[ `isSize${getStringWithUppercaseFirstChar(size)}` ]: true
		}) }>
			<use href={ `${path}#${name}` } />
		</svg>
	)
}

Icon.defaultProps = defaultProps
import { IExtraClasses } from '../../config'

export const useCN = (baseClass: string) => {
	if (!baseClass) throw Error('Component must have a class')

	const getCN = (initClass = '', extraClasses: IExtraClasses = {}) => {
		const bc = initClass
			? `${baseClass}__${initClass}`
			: baseClass

		let result = bc

		if (!!extraClasses && !!Object.keys(extraClasses).length) {
			Object.keys(extraClasses).forEach(key => {
				if (extraClasses[key]) result += ` ${bc}--${key}`
			})
		}

		return result
	}

	return { getCN }
}
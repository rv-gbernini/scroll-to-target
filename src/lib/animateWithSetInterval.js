import getNextPosition from './getNextPosition'

/*
	* animates window scroll with setInterval (requestAnimationFrame fallback)
	* @param {number} position
	* @param {number} stepSize
*/

const animateWithSetInterval = (position, stepSize) => {
	window.scrollInterval = setInterval(() => {
		const nextPosition = getNextPosition(position, stepSize)
		const maxPosition = document.body.scrollHeight - window.innerHeight
		window.scrollTo(0, nextPosition)
		if (window.scrollTarget !== position || nextPosition > maxPosition || nextPosition === position) {
			delete window.scrollTarget
			clearInterval(window.scrollInterval)
		}
	}, 16)
}

export default animateWithSetInterval

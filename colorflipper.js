const curColor = document.getElementById('current-color')
	const newColor = document.getElementById('new-color')

	const hexValue = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']


	function getRandomhex (){
		const randomIndexposition = Math.floor(Math.random() * hexValue.length
		)

		const randomHexvalue = hexValue[randomIndexposition]
		return randomHexvalue
}
	function getRandomhexString (stringLength) {
		let hexString = ''

		for (let i=0 ; i < stringLength; i++) {
			hexString += getRandomhex() 
		}
		return hexString
}

	newColor.addEventListener('click', function(){
		const randomHexString = `#${getRandomhexString(6)}`

		document.body.style.setProperty('background-color', randomHexString)

		curColor.innerText = randomHexString
	})

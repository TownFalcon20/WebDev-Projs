const randomColor = function(){
		const hex = '0123456789ABCDEF'
		let color = '#'
		for (let i = 0; i < 6; i++) {
			color += hex[Math.floor(Math.random()*16)]
		}
		return color
	}
let stoppedColors;
	const startColor = function () {

		if (!stoppedColors) {
			stoppedColors = setInterval(changeBGcolor, 1000)
		}

		function changeBGcolor() {
					document.body.style.backgroundColor = randomColor()
				}
		
	}
	const stopColor = function () {
		clearInterval(stoppedColors)
		stoppedColors = null
	}

	document.querySelector('#start').addEventListener('click', startColor)

	document.querySelector('#stop').addEventListener('click', stopColor)





const navBar = document.querySelector('nav')
const navLinks = document.querySelectorAll('a')
const sections = document.querySelectorAll('section')

const removeActivelinks = () => {
	navLinks.forEach( link => 
		link.parentElement.classList.remove('active'));
}

const hideSections = () => {
	sections.forEach(sections => 
		sections.classList.add('hidden'))
}

navLinks.forEach( link => {
	link.addEventListener('click', () => {
		removeActivelinks();
		hideSections();

		link.parentElement.classList.add('active')
		const section = document.querySelector(link.hash);
		section.classList.remove('hidden')
	})
})

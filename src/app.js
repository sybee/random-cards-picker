document.addEventListener('DOMContentLoaded', () => {
	const categories = [
		{
			id: 1,
			name: 'Категория 1',
			images: [
				'./img/cards/category1/image1.jpg',
				'./img/cards/category1/image2.jpg',
				'./img/cards/category1/image3.jpg',
				'./img/cards/category1/image4.jpg',
				'./img/cards/category1/image5.jpg',
			],
		},
		{
			id: 2,
			name: 'Категория 2',
			images: [
				'./img/cards/category2/image1.jpg',
				'./img/cards/category2/image2.jpg',
				'./img/cards/category2/image3.jpg',
				'./img/cards/category2/image4.jpg',
				'./img/cards/category2/image5.jpg',
			],
		},
	]

	const categoriesSelect = document.querySelector('#categories-select')
	const randomCardButton = document.querySelector('#random-card-button')
	const cardImage = document.querySelector('#card-image')

	const cardImageAnimationClass = 'opacity-0'
	const cardImageAnimationDelayMs = 300

	categories.forEach((category) => {
		const option = document.createElement('option')
		option.value = category.id
		option.textContent = category.name
		categoriesSelect.appendChild(option)
	})

	randomCardButton.addEventListener('click', (e) => {
		const selectedCategory = categories.find((category) => category.id == categoriesSelect.value)
		const randomImage = selectedCategory.images[Math.floor(Math.random() * selectedCategory.images.length)]
		const delay = cardImage.currentSrc ? cardImageAnimationDelayMs : 0

		cardImage.classList.add(cardImageAnimationClass)

		setTimeout(() => {
			cardImage.src = randomImage
			cardImage.classList.remove(cardImageAnimationClass)
		}, delay)
	})
})

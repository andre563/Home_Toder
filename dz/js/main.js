/*-------------------------------------Задача 1-----------------------------------------------------------------------*/
class CheckMul {
	constructor(firstNumber) {
		this.number = firstNumber
		this.numberCorrect = 0
		this.numberIncorrect = 0
	}
	render(containerId) {
		const container = document.getElementById(containerId)
		container.textContent = ''
		// Создаєм і вставляєм пустий div для запису прикладів. Також зберігаєм його адресу в "this.divId"
		let div = document.createElement('div')
		this.divId = div
		container.appendChild(div)
		//----------------------------------------------------

		//Создаєм кнопку для генерування прикладів і виводу їх на екран
		div = document.createElement('div')
		let btn = document.createElement('button')
		btn.innerText = "Згенерувати приклад"
		btn.onclick = this.getRandomExample.bind(this)
		div.appendChild(btn)
		container.appendChild(div)
		//----------------------------------------------------

		//Создаєм інпут для запису відповідей користувача
		div = document.createElement('div')
		let label = document.createElement('label')
		label.innerText = 'Ваша відповідь'
		const input = document.createElement('input')
		input.setAttribute('type', 'number')
		label.appendChild(input)
		this.numberInput = input //зберегли інпут як ід
		div.appendChild(label)
		container.appendChild(div)
		//----------------------------------------------------

		//Создаєм кнопку для перевірки відповіді
		div = document.createElement('div')
		btn = document.createElement('button')
		btn.innerText = "Перевірити"
		btn.onclick = this.checkValue.bind(this)
		div.appendChild(btn)
		container.appendChild(div)
		//----------------------------------------------------

		//Создаєм кнопку для перевірки кількості правильних іне правильних відповідей
		div = document.createElement('div')
		btn = document.createElement('button')
		btn.innerText = "Вивести результат"
		btn.onclick = this.printResult.bind(this)
		div.appendChild(btn)
		//----------------------------------------------------

		// Создаєм і вставляєм пустий div для виводу речення "Ви правинильно відповіли ${this.numberCorrect} р. і неправильно ${this.numberIncorrect} р." . Також зберігаєм його адресу в "this.messageDiv"
		container.appendChild(div)
		this.messageDiv = document.createElement('div')
		container.appendChild(this.messageDiv)
		//----------------------------------------------------
	}
	getRandomExample() { //Функція для створення приклада
		this.secondNumber = Math.floor(Math.random() * 10)
		this.divId.innerText = `${this.number}*${this.secondNumber}`
	}
	checkValue() { //Функція для перевірки розвязка
		let value = parseInt(this.numberInput.value)
		if (value === this.secondNumber * this.number) {
			this.numberCorrect++
				alert('Correct')
		} else {
			this.numberIncorrect++
				alert('Incorrect')
		}
		this.numberInput.value = ''

	}
	printResult() { //Функція для виводу речення
		this.messageDiv.innerText = `Ви правинильно відповіли ${this.numberCorrect} р. і неправильно ${this.numberIncorrect} р.`
	}
}
/*--------------------------------------------------------------------------------------------------------------------*/

/*-------------------------------------Задача 2-----------------------------------------------------------------------*/
class OrderPrice {
	constructor(price) {
		this.price = price
		this.sizeDiscounts = 5
	}
	render(containerId) {
		const container = document.getElementById(containerId)
		container.textContent = ''
		//Создаєм інпут для запису кількості днів
		let div = document.createElement('div')
		let label = document.createElement('label')
		label.innerText = 'Введіть кількість днів'
		const input = document.createElement('input')
		input.setAttribute('type', 'number')
		label.appendChild(input)
		this.numberInput = input //зберегли інпут як ід
		div.appendChild(label)
		container.appendChild(div)
		//----------------------------------------------------

		//Создаєм кнопку для розрахунку суми
		div = document.createElement('div')
		let btn = document.createElement('button')
		btn.innerText = "Розрахувати суму"
		btn.onclick = this.printSum.bind(this)
		div.appendChild(btn)
		container.appendChild(div)
		//----------------------------------------------------

		// Создаєм і вставляєм пустий div для виводу речення "Ви правинильно відповіли ${this.numberCorrect} р. і неправильно ${this.numberIncorrect} р." . Також зберігаєм його адресу в "this.messageDiv"
		container.appendChild(div)
		this.messageDiv = document.createElement('div')
		container.appendChild(this.messageDiv)
		//----------------------------------------------------
	}
	printSum() { //Функція для виводу сими результату
		let numberDays = parseInt(this.numberInput.value)
		let totalSum
		alert(`${numberDays}-${this.price}`)
		if (numberDays <= 10)
			totalSum = this.price * numberDays
		else
			totalSum = (numberDays - 10) * (this.price - (this.price / 100 * 5)) + 10 * this.price

		this.messageDiv.innerText = `До оплати ${totalSum}грн`
	}
}
/*--------------------------------------------------------------------------------------------------------------------*/

/*-------------------------------------Задача 3-----------------------------------------------------------------------*/
class RandomBaner {
	constructor() {
		this.objectArray = []
	}
	render(containerId) {
		const container = document.getElementById(containerId)
		container.textContent = ''
		//Создаєм інпут для запису кількості днів
		let div = document.createElement('div')
		let label = document.createElement('label')
		label.innerText = 'Введіть URL сайта'
		let input = document.createElement('input')
		label.appendChild(input)
		this.numberInput = input //зберегли інпут як ід
		div.appendChild(label)
		container.appendChild(div)
		//----------------------------------------------------

		//Создаєм інпут для запису кількості днів
		div = document.createElement('div')
		label = document.createElement('label')
		label.innerText = 'Введіть URL картинки'
		input = document.createElement('input')
		label.appendChild(input)
		this.numberInput2 = input //зберегли інпут як ід
		div.appendChild(label)
		container.appendChild(div)
		//----------------------------------------------------

		//Создаєм кнопку для розрахунку суми
		div = document.createElement('div')
		let btn = document.createElement('button')
		btn.innerText = "Зберегти Банер"
		btn.onclick = this.pushObject.bind(this)
		div.appendChild(btn)
		container.appendChild(div)
		//----------------------------------------------------
		//Создаєм кнопку для розрахунку суми
		div = document.createElement('div')
		btn = document.createElement('button')
		btn.innerText = "Вивести банер"
		btn.onclick = this.printRandomBaner.bind(this)
		div.appendChild(btn)
		container.appendChild(div)
		//----------------------------------------------------

		// Создаєм і вставляєм пустий div для виводу речення "Ви правинильно відповіли ${this.numberCorrect} р. і неправильно ${this.numberIncorrect} р." . Також зберігаєм його адресу в "this.messageDiv"
		this.messageDiv = document.createElement('div')
		container.appendChild(this.messageDiv)
		//----------------------------------------------------
	}
	pushObject() { //Функція для виводу сими результату
		this.objectArray.push({
			urlImg: this.numberInput2.value,
			urlSite: this.numberInput.value
		})
		this.numberInput.value = ''
		this.numberInput2.value = ''
		this.messageDiv.innerText = 'Банер збережено'
	}
	printRandomBaner() {
		let randomIndex = Math.floor(Math.random() * this.objectArray.length)
		this.messageDiv.innerHTML = `<a href="${this.objectArray[randomIndex].urlSite}" target="_blank">
					<img src="${this.objectArray[randomIndex].urlImg}"></a>`
	}

}
/*--------------------------------------------------------------------------------------------------------------------*/


window.onload = function() {
	//Задача 1
	let btn = document.getElementById('start')
	btn.onclick = function start() { //Вводем перше число з інпута при нажатії на кнопку. 
		let inp = document.getElementById('firstNumber')
		let firstNumber = parseInt(inp.value)

		let check = new CheckMul(firstNumber)
		check.render('container')
	}
	//-------------------------------------------------------------------------------------

	//Задача 2
	let order = new OrderPrice(1000)
	order.render('container2')
	//------------------------------------------------------------------------------------

	//Задача 3
	let baner = new RandomBaner()
	baner.render('container3')
	//-------------------------------------------------------------------------------------

}
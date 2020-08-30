/*-------------------------------------Задача 1-----------------------------------------------------------------------*/
class CheckMul {
	constructor(firstNumber) {//Функція конструктор
		this.number = firstNumber//Створюєм властивість "this.number" і записуєм занчення firstNumber
		this.numberCorrect = 0	//Створюєм властивість "this.numberCorrect" і записуєм занчення занчення 0
		this.numberIncorrect = 0 //Створюєм властивість "this.numberIncorrect" і записуєм занчення занчення 0
	}
	
//Prototype--------------------------------------------------------------------------------------------------------------------
	render(containerId) { //Функція створення розмітки на сторінці
		const container = document.getElementById(containerId) //Зберігаємо адрес контейнера в констані "const"
		container.textContent = '' // Чистимо контейнер
		// Створюєм і вставляєм пустий div для запису прикладів. Також зберігаєм його адресу в "this.divId"
		let div = document.createElement('div') // Створюєм елемен "div"
		this.divId = div //Записуєм адерес "div" в "this.divId"
		container.appendChild(div) //Вставляєм елемент "div" в "container"
		//---------------------------------------------------

		//Створюєм кнопку для генерування прикладів і виводу їх на екран
		div = document.createElement('div')//Перезаписуєм змінну "div" адресом нового елемента "div"
		let btn = document.createElement('button') // Створюєм елемент "button" і записуєм його адрес в змінну "btn"
		btn.innerText = "Згенерувати приклад" // Вставляєм текст в "button"
		btn.onclick = this.printRandomExample.bind(this) // Підключаєм функцію на подію "onclick"
		div.appendChild(btn) //Вставляєм елемент "button" в "div"
		container.appendChild(div)//Вставляєм елемент "div" в "container"
		//----------------------------------------------------

		//Створюєм інпут для запису відповідей користувача
		div = document.createElement('div') //Перезаписуєм змінну "div" адресом нового елемента "div"
		let label = document.createElement('label')// Створюєм елемент "label" і записуєм його адрес в змінну "label"
		label.innerText = 'Ваша відповідь'// Вставляєм текст в "label"
		const input = document.createElement('input')// Створюєм елемент "input" і записуєм його адрес в змінну "input"
		input.setAttribute('type', 'number')// Міняєм значення атрибуту "type" на "number"
		label.appendChild(input)//Вставляєм елемент "input" в "label"
		this.numberInput = input //Зберегли адрес елемента "input" в змінній "this.numberInput"
		div.appendChild(label) //Вставляєм елемент "label" в "div"
		container.appendChild(div)//Вставляєм елемент "div" в "container"
		//----------------------------------------------------

		//Створюєм кнопку для перевірки відповіді
		div = document.createElement('div')
		btn = document.createElement('button')
		btn.innerText = "Перевірити"
		btn.onclick = this.checkValue.bind(this)
		div.appendChild(btn)
		container.appendChild(div)
		//----------------------------------------------------

		//Створюєм кнопку для перевірки кількості правильних іне правильних відповідей
		div = document.createElement('div')
		btn = document.createElement('button')
		btn.innerText = "Вивести результат"
		btn.onclick = this.printResult.bind(this)
		div.appendChild(btn)
		//----------------------------------------------------

		// Створюєм і вставляєм пустий div. Також зберігаєм його адресу в "this.messageDiv"
		container.appendChild(div)
		this.messageDiv = document.createElement('div')
		container.appendChild(this.messageDiv)
		//----------------------------------------------------
	}
	printRandomExample() { //Функція для створення приклада
		this.secondNumber = Math.floor(Math.random() * 10) //Зберігаєм друге число в змінній "this.secondNumber". 
		this.divId.innerText = `${this.number}*${this.secondNumber}` // Виводим приклад на екран
	}
	checkValue() { //Функція для перевірки розвязка
		let value = parseInt(this.numberInput.value) // Отримуємо відповідь користувача і записуєм її в "value"
		if (value === this.secondNumber * this.number) { //Перевіряєм  чи відповідь правильна чи ні
			this.numberCorrect++ // Збільшуєм кількість правильних відповідей на 1
				alert('Correct') //Вивобим повідомлення про правильну відповідь
		} else {
			this.numberIncorrect++ //Збільшуєм кількість не правильних відповідей на 1
				alert('Incorrect') //Вивобим повідомлення про не правильну відповідь
		}
		this.numberInput.value = '' //Чистимо Input для відповідей
		this.printRandomExample()	//Виводим наступний приклад
	}
	printResult() { //Функція для виводу речення
		this.messageDiv.innerText = `Ви правинильно відповіли ${this.numberCorrect} р. і неправильно ${this.numberIncorrect} р.` //Виводим кількість правильних та неправильних відповідей
//----------------------------------------------------------------------------------------------------------------------	
}
/*--------------------------------------------------------------------------------------------------------------------*/

/*-------------------------------------Задача 2-----------------------------------------------------------------------*/
class OrderPrice {
	constructor(price) {
		this.price = price
		this.sizeDiscounts = 5
	}
//Prototype--------------------------------------------------------------------------------------------------------------------
	render(containerId) {
		const container = document.getElementById(containerId)
		container.textContent = ''
		//Створюєм інпут для запису кількості днів
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

		//Створюєм кнопку для розрахунку суми
		div = document.createElement('div')
		let btn = document.createElement('button')
		btn.innerText = "Розрахувати суму"
		btn.onclick = this.printSum.bind(this)
		div.appendChild(btn)
		container.appendChild(div)
		//----------------------------------------------------

		// Створюєм і вставляєм пустий div. Також зберігаєм його адресу в "this.messageDiv"
		container.appendChild(div)
		this.messageDiv = document.createElement('div')
		container.appendChild(this.messageDiv)
		//----------------------------------------------------
	}
	printSum() { //Функція для виводу сими результату
		let numberDays = parseInt(this.numberInput.value) //Отримуєм кількість днів 
		let totalSum
		if (numberDays <= 10)//Перевіряєм чи кількість днів менша рівна за 10
			totalSum = this.price * numberDays //Вираховуєм суму
		else
			totalSum = (numberDays - 10) * (this.price - (this.price / 100 * this.sizeDiscounts)) + 10 * this.price //Вираховуєм суму

		this.messageDiv.innerText = `До оплати ${totalSum}грн` //Виводим суму в "div" з адресою що збережена в "this.messageDiv"
	}
//----------------------------------------------------------------------------------------------------------------------	
}
/*--------------------------------------------------------------------------------------------------------------------*/

/*-------------------------------------Задача 3-----------------------------------------------------------------------*/
class RandomBaner {
	constructor() {
		this.objectArray = [] // Сворюємо пустий масив "this.objectArray"
	}
//Prototype--------------------------------------------------------------------------------------------------------------------
	render(containerId) {
		const container = document.getElementById(containerId)
		container.textContent = ''
		//Створюєм інпут для запису кількості днів
		let div = document.createElement('div')
		let label = document.createElement('label')
		label.innerText = 'Введіть URL сайта'
		let input = document.createElement('input')
		label.appendChild(input)
		this.numberInput = input 
		div.appendChild(label)
		container.appendChild(div)
		//----------------------------------------------------

		//Створюєм інпут для запису кількості днів
		div = document.createElement('div')
		label = document.createElement('label')
		label.innerText = 'Введіть URL картинки'
		input = document.createElement('input')
		label.appendChild(input)
		this.numberInput2 = input 
		div.appendChild(label)
		container.appendChild(div)
		//----------------------------------------------------

		//Створюєм кнопку для розрахунку суми
		div = document.createElement('div')
		let btn = document.createElement('button')
		btn.innerText = "Зберегти Банер"
		btn.onclick = this.pushObject.bind(this)
		div.appendChild(btn)
		container.appendChild(div)
		//----------------------------------------------------
		//Створюєм кнопку для розрахунку суми
		div = document.createElement('div')
		btn = document.createElement('button')
		btn.innerText = "Вивести банер"
		btn.onclick = this.printRandomBaner.bind(this)
		div.appendChild(btn)
		container.appendChild(div)
		//----------------------------------------------------

		// Створюєм і вставляєм пустий "div". Також зберігаєм його адресу в "this.messageDiv"
		this.messageDiv = document.createElement('div')
		container.appendChild(this.messageDiv)
		//----------------------------------------------------
	}
	pushObject() { //Функція для запису обєкта "Банер" в масив
		this.objectArray.push({
			urlImg: this.numberInput2.value,//Зберізаєм url картинки в urlImg
			urlSite: this.numberInput.value //Зберізаєм url сайта в urlSite
		})
		this.numberInput.value = '' //Чистимо Input
		this.numberInput2.value = ''//Чистимо Input
		this.messageDiv.innerText = 'Банер збережено' //Виводим службове повідомлення про збереження Банера
	}
	printRandomBaner() { //Функція виводу випадкового банеру 
		let randomIndex = Math.floor(Math.random() * this.objectArray.length) // Отримуємо випадковий індех
		this.messageDiv.innerHTML = `<a href="${this.objectArray[randomIndex].urlSite}" target="_blank"> 
					<img src="${this.objectArray[randomIndex].urlImg}"></a>`//Виводимо сформований банер
	}
//----------------------------------------------------------------------------------------------------------------------	
}
/*--------------------------------------------------------------------------------------------------------------------*/


window.onload = function() {
	//Задача 1
	let btn = document.getElementById('start')
	btn.onclick = function () { //Вводим перше число з інпута при нажатії на кнопку. 
		let inp = document.getElementById('firstNumber')
		let firstNumber = parseInt(inp.value)
		let check = new CheckMul(firstNumber) //Створюєм обєкт "check" за допомогою конструктора "CheckMul"

		check.render('container')//Запускаєм функцію "render"
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
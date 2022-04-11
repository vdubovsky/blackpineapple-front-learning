// 1. Variable

// var name = 'Vova'
// const myLastname = 'Dub'
// let age = 26 

// Don't use var
// Semicolon up to you
// Use camelCase!
// const can't be changed?

// let _ = 'asd'
// let $ = 77
// let withNum5 = '5'
// let 5num = '5' - error

// console.log('My name is ' + name + ' ' + lastname + '. I am ' + age + ' old.')
// console.log(age)
// console.log(age.toString())

// let eyeColor = prompt('What is your eyes color?')

// alert(eyeColor)


// 2. Operators

// let c = 10
// let a = 2

// c = c + a
// c += a

// c = c - a
// c -= a

// c = c * a
// c *= a

// c = c / a
// c /= a

// 3. Types

// let a = 'Hello!'
// let b = 26
// let c = true

// console.log(typeof a) // string
// console.log(typeof b) // number
// console.log(typeof c) // boolean
// console.log(typeof undefined) // indefined
// console.log(typeof null) // object

// 4. Condition

// let courseStatus = 'Ready' 

// if (courseStatus === 'Ready'){
//     console.log('The course is ready')
// } else if (courseStatus === 'Pending'){
//     console.log('The course is pending')
// } else {
//    console.log('The course is neither ready nor pending')
// }

// let num1 = 7
// let num2 = '7'

//  console.log(num1 == num2)  // true 
//  console.log(num1 === num2) // false

// let bool1 = true
// let bool2 = 'true' 

// console.log(bool1 == bool2)  // false
// console.log(bool1 === bool2) // false

// let isReady = true

// isReady ? console.log('Ready') : console.log('Not Ready')

// 5. Boolean logic

// console.log("true && 'true'")
// console.log(true && 'true')

// console.log("'dog' && 'cat'")
// console.log('dog' && 'cat')

// console.log("'cat' && 'dog'")
// console.log('cat' && 'dog')

// console.log("false || 'true'")
// console.log(false || 'true')

// console.log("'dog' || 'cat'")
// console.log('dog' || 'cat')

// console.log("'cat' || 'dog'")
// console.log('cat' || 'dog')

// 6. if = 

// let a = 7
// if (a = 5){
//    console.log(a)
// }
// console.log(a)

// console.log(a = 9)

// 7. Arrays

// let operationSystems = ['Mac', 'Windows', 'Ubuntu']
// console.log(typeof operationSystems)
// console.log(operationSystems)
// console.log(operationSystems.length)
// console.log(operationSystems[2])
// operationSystems[operationSystems.length] = 'RedHat'
// console.log(operationSystems)

// 8. Iteration

// for(let i = 1; i < 10; i++){
//     console.log(i*i)
// }

// let operationSystems = ['Mac', 'Windows', 'Ubuntu']

// for(let system of operationSystems){
//	  console.log(system)
// }

// 9. Objects

// const person = new Object({})

// console.log(person)

// const vova = {
//	name: 'Vova',
//	age: 32,
//	languages: ['Ru', 'By', 'Eng', 'Esp'],
//	hasWife: true,
//	hello: function() {
//		console.log('Hello')
//	}
//}

// console.log(typeof vova)
// console.log(vova)
// console.log(vova.name)
// console.log(vova['age'])
// const langs = 'languages'
// console.log(vova[langs])

// vova.hello()

// vova.isProgrammer = true

// console.log(vova)

// 10. Numbers

// const num = 42 // integer
// const float = 42.42 // float
// const pow = 10e3
//
// console.log('MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER)
// console.log('Math.pow 53', Math.pow(2, 53) - 1)
// console.log('MIN_SAFE_INTEGER', Number.MIN_SAFE_INTEGER)
// console.log('MAX_VALUE', Number.MAX_VALUE)
// console.log('MIN_VALUE', Number.MIN_VALUE)
// console.log('POSITIVE_INFINITY', Number.POSITIVE_INFINITY)
// console.log('NEGATIVE_INFINITY', Number.NEGATIVE_INFINITY)
// console.log('2 / 0', 2 / 0)
// console.log(Number.NaN) // Not A Number
// console.log(typeof NaN)
// const weird = 2 / undefined
// console.log(Number.isNaN(weird))
// console.log(Number.isNaN(42))
// console.log(Number.isFinite(Infinity))
// console.log(Number.isFinite(42))
//
// const stringInt = '40'
// const stringFloat = '40.42'
// console.log(Number.parseInt(stringInt) + 2)
// console.log(parseInt(stringInt) + 2)
// console.log(Number(stringInt) + 2)
// console.log(+stringInt + 2)
// console.log(parseFloat(stringFloat) + 2)
// console.log(+stringFloat + 2)

// console.log(0.4 + 0.2) // 0.6
// console.log(+(0.4 + 0.2).toFixed(1))
// console.log(parseFloat((0.4 + 0.2).toFixed(1)))

// 11. BigInt

// console.log(9007199254740991)
// console.log(9007199254740991999)
// console.log(typeof 9007199254740991999)
// console.log(typeof 9007199254740991999n)
// console.log(typeof 33.4)


// console.log(9007199254740991999n - 12312312312n)
// console.log(10n-4) Error

// console.log(parseInt(5n) + 1)
// console.log(5n + BigInt(1))

// 12. Math

// console.log(Math.E)
// console.log(Math.PI)
// console.log(Math.sqrt(25))
// console.log(Math.abs(-42))
// console.log(Math.pow(25,0.5))

// console.log(Math.max(1,2,3,77,-2))
// console.log(Math.floor(3.9))
// console.log(Math.ceil(3.2))
// console.log(Math.round(3.7))

// 13. String

// const name = 'Vova'
// const age = 32

// function getAge(){
//    return age
// }

// const output = 'Hello, my name is ' + name + ', my age is ' + age
// const coolOutput = `Hello, my name is ${name}, my age is ${getAge()}`
// const superCoolOutput = `Hello, my name is ${name}, ${getAge() > 30 ? 'I am older than 30' : 'I am younger than 30'}`

// console.log(output)
// console.log(coolOutput)
// console.log(superCoolOutput)

// const stringName = new String('Vova')
// console.log(stringName)
// console.log(name.length)

// console.log(name.toUpperCase())
// console.log(name.toLowerCase())
// console.log(name.charAt(2))
// console.log(name.indexOf('ov'))
// console.log(name.startsWith('V'))
// console.log(name.endsWith('!'))
// console.log(name.repeat(6))

// const stringWithSpaces = '      password       '
// console.log(stringWithSpaces.trim())
// console.log(stringWithSpaces.trimLeft())
// console.log(stringWithSpaces.trimRight())

// 14. New sintaxis

// function newSintax(s, name, age){
//	console.log(s)
//	console.log(name)
//	console.log(age)
// }

// const name = 'Vova'
// const age = 32

// newSintax`Hello, my name is ${name}, I am ${age} years old`

// 15.Function

// Function declaration
// greet('Vova')
// function greet(name){
//	console.log('Hello, I am - ', name)
// }

// Function declaration
// greet2() - error
// const greet2 = function(){
//	console.log('Hello')
// }
// greet2()

// greet3() - error 
// const greet3 = function greet3(){
//	console.log('Hello')
// }
// greet3()

// let counter = 0
// const interval = setInterval(function() {
// 	if (counter === 5) {
//		clearInterval(interval)
//	} else {
//		console.log(++counter)
//	}
// }, 1000)

// 16. Arrow functions

// function greet(name) {
//	console.log('Hello - ', name)
//}

//const arrow = (name) => {
//	console.log(`Hello - ${name}`)
//}

//const arrow2 = name => console.log(`Hello - ${name}`)

//arrow('Vova')
//arrow2('Vova2')

//const pow2 = num => num * num

//console.log(pow2(5))

// 17. Default values in functions

// const sum = (a, b = 1) => a + b

// console.log(sum(41,1))
// console.log(sum(41))

//function sumAll(...all) {
//	console.log(all)
//	console.log(typeof all)
//	let result = 0
//	for (let num of all) {
//		result += num
//	}
//	return result
//}

// const res = sumAll(1, 2, 3, 4, 5, 6, 7)

//console.log(res)

// 18. Zamikania

// function createMember(name){
// 	return function(lastName){
//		console.log(name + lastName)
//	}
//}

// const logWithLastName = createMember('Vova')
// console.log(logWithLastName)

//logWithLastName('Dub')

// 19. Arrays

// const cars = ['Mazda', 'Ford', 'BMV', 'Mercedes']
// const fib = [1, 1, 2, 3, 5, true, 'hello']

// console.log(cars)

// const array = new Array(5, 2)
// console.log(array)

// cars.push('Tesla')
// cars.unshift('Volga')

// console.log(cars)
// const firstItem = cars.shift()
// console.log(cars)
// console.log(firstItem)

// const lastItem = cars.pop()
// console.log(cars)
// console.log(lastItem)

// console.log(cars.reverse())
// console.log(cars)

// const text = 'Hello, we are learning javascript'
// const reverseText = text.split('').reverse().join('')
// console.log(reverseText)

//const mazdaIndex = cars.indexOf('Mazda')
//cars[mazdaIndex] = 'NeMazda'
//console.log(cars)

//const people = [{ name: 'Vova', money: 4200 }, { name: 'Ivan', money: 3500 }, { name: 'Alexandra', money: 1800 }]
//const vovaIndex = people.findIndex(person => person.name === 'Vova')
//const vova = people.find(person => person.name === 'Vova')

//console.log(vovaIndex)

//console.log(cars.includes('Ford'))

//const vovaIndex2 = people.findIndex(person => person.name === '2Vova') // return -1
//const vova2 = people.find(person => person.name === 'V2ova') // return undefined

//console.log(vovaIndex2)
//console.log(vova2)

//const operationSystems = ['Ubuntu', 'Windows', 'Mac']
//const upperCaseOperationSystems = operationSystems.map(os => os.toUpperCase())
//console.log(upperCaseOperationSystems)

//fib.pop()
//fib.pop()

//console.log(fib)

//const quadFib = fib.map(num => num ** 2)

//console.log(quadFib)

//let seq = [1, 2, 3, 4, 5, 6, 7, 8, 9]
//seq.map(num => num ** 2) // doesn't change original'
//console.log(seq)

//const sqrtSeq = seq.map(Math.sqrt)

//console.log(sqrtSeq)

//const powSeq = seq.map(num => Math.pow(num, 2))
//console.log(powSeq)

//const filterPowSeq = powSeq.filter(function(num) {
//	return num > 20
//})

//console.log(filterPowSeq)

//const babki = people.reduce(function(acc, person) {
//	if (person.money > 2000) {
//		acc += person.money
//	}
//	return acc
//}, 0)



//console.log(babki)


// 20. Objects

//const person = {
//	name: 'Vova',
//	age: 33,
//	isProgrammer: true,
//	languages: ['Ru', 'By', 'En', 'Esp'],
//	greet: function() {
//		console.log('Hello!')
//	},
//	newSintaxGreet() {
//		console.log('Hello!')
//	},
//	'complex key': 'complex value',
//	[1 + 3]: 'Computed key'
//}

// const ageKey = 'age'
// console.log(person[ageKey])
// console.log['complex key']

//person.age++
//person.languages.push('Fr')
//console.log(person)

//delete person['complex key']

//console.log(person)

//const { age, name: personName, isProgrammer = false } = person

//console.log(age, personName, isProgrammer)

//for (let key in person) {
//	if (person.hasOwnProperty(key)) {
//		console.log(key)
//		console.log(person[key])
//	}

//}

//const keys = Object.keys(person)
//console.log(keys)
//keys.forEach(key => console.log(key))
//keys.forEach(console.log)

// 21. Context

//const person = {
//	name: 'Vova',
//	age: 33,
//	lang: ['Ru', 'Eng', 'By', 'Esp'],
//	greet() {
//		console.log('Hello')
//	},
//	info() {
//		console.log('Information about person: ', person.name)
//	},
//	infoThis() {
//		console.log(this)
//		console.log('Information about person: ', this.name)
//	}
//}

// person.info()
// person.infoThis()

//const logger = {
//	keys(obj) {
//		console.log('Object keys: ', Object.keys(obj))
//	}
//}

//logger.keys(person)



//const logger2 = {
//	keys() {
//		console.log('Object keys: ', Object.keys(this))
//	}
//}

//logger2.keys(person)

//const bound = logger2.keys.bind(person)

//bound()

//logger2.keys.call(person) // execute method


//const logger3 = {
//	keysAndValues() {
//		Object.keys(this).forEach(k => {
//			console.log(`"${k}": ${this[k]}`)
//		})
//	}
//}

//logger3.keysAndValues()

//logger3.keysAndValues.call(person)

//logger3.keysAndValues.call({ a: 1, c: [], d: true })

//const logger4 = {
//	contextSurprise() {
//		Object.keys(this).forEach(function(key) {
//			console.log(`${key} : ${this[key]}`)
//		}.bind(this))
//	}
//}

//const logger5 = {
//	contextSurprise() {
//		const self = this
//		Object.keys(this).forEach(function(key) {
//			console.log(`${key} : ${self[key]}`)
//		}.bind(this))
//	}
//}

//logger4.contextSurprise.call(person)
//logger5.contextSurprise.call(person)


//const logger6 = {
//	withParams(param1 = true, param2 = 'hello') {
//		console.log(param1)
//		console.log(param2)
//		console.log(this)
//	}

// }

// logger6.withParams.call(person, false)
// logger6.withParams.apply(person, [false, false])

// 22. Async

//const timeout = setTimeout(() => {
//	console.log('After timeout')
//}, 1000)

//clearTimeout(timeout)

//const interval = setInterval(() => {
//	console.log('Interval')
//}, 1000)

//clearInterval(interval)

//const delay = (callback, wait = 1000) => {
//	setTimeout(callback, wait)
//}

//delay(() => console.log('Hello'))

//const promiseDelay = (wait = 1000) => {
//	return new Promise((resolve, reject) => {
//		setTimeout(() => {
//			resolve()
//			//reject('Error has happend')
//		}, wait)
//	})
//}

//promiseDelay(2500)
//	.then(() => {
//		console.log('After 2 sec')
//	})
//	.catch(err => console.error(err))
//	.finally(() => console.log('finally!'))


//const getData = () => new Promise(resolve => resolve([1, 2, 3, 4, 5, 6, 7, 8, 9]))
//getData().then(data => console.log(data))

//async function asyncExample() {
//	try {
//		await promiseDelay(3000)
//		const data = await getData()
//		console.log(data)
//	} catch (e) {
//		console.log(e)
//	} finally {
//		console.log('finally')
//	}
//}

// 23. DOM

//console.log(document)
//console.log(window)
//const res = window.confirm('Accept the action!')
//console.log(res)
//window.console.log('Window')

const heading = document.getElementById('hello')
//console.log(heading)
//console.dir(heading)
//console.log(heading.textContent)

let i = 0
setTimeout(() => {
	addStylesTo(heading)
}, 3000)

function addStylesTo(node) {
	node.textContent = 'Hello'
	node.style.color = 'red'
	node.style.textAlign = 'center'
	node.style.backgroundColor = 'black'
	node.style.padding = '2rem'
}

const heading2ByTag = document.getElementsByTagName('h2')[0] // it is better not to use
const heading2ByClass = document.getElementsByClassName('h2-class')[0]

//console.log(heading2ByClass) 

const goodWay1 = document.querySelector('h2')
const goodWay2 = document.querySelector('.h2-class')
const goodWay3 = document.querySelector('#h2-id')

//console.log(goodWay1) 
//console.log(goodWay2) 
//console.log(goodWay3) 

goodWay1.nextElementSibling.textContent = 'ChangedByNextSiblingMethod'

//const h2List = document.querySelectorAll('h2')

// console.log(h2List)

function addSmartStylesTo(node, text, color = 'red', fontSize) {
	node.textContent = text
	node.style.color = color
	node.style.textAlign = 'center'
	node.style.backgroundColor = 'black'

	// falsy: '', undefined, null, 0, fasle
	if (fontSize) {
		node.style.fontsize = fontSize
	}
}

heading.onclick = () => {
	console.log('Hello')
}

goodWay1.addEventListener('dblclick', () => {
	console.log("Good")
})

const h3h3 = document.querySelector('h3')

addStylesTo(h3h3.querySelector('a'))

h3h3.addEventListener('click', (event)=>{
	event.preventDefault()
	console.log(event.target.getAttribute('href'))
	const url = 'http://dev.by'
	location = url
})










































































































































































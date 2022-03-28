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

// console.log(typeof a)
// console.log(typeof b)
// console.log(typeof c)
// console.log(typeof undefined)
// console.log(typeof null)

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

// console.log(num1 == num2)
// console.log(num1 === num2)

// let bool1 = true
// let bool2 = 'true' 

// console.log(bool1 == bool2)
// console.log(bool1 === bool2)

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
//	hello: function(){
//		console.log('Hello')
//	}
//}

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

function newSintax(s, name, age){
	console.log(s)
	console.log(name)
	console.log(age)
}

const name = 'Vova'
const age = 32

newSintax`Hello, my name is ${name}, I am ${age} years old`
















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

const vova = {
	name: 'Vova', 
	age: 32, 
	languages: ['Ru', 'By', 'Eng', 'Esp'], 
	hasWife: true, 
	hello: function(){
		console.log('Hello')
	}
}

console.log(vova)
console.log(vova.name)
console.log(vova['age'])
const langs = 'languages'
console.log(vova[langs])

vova.hello()

vova.isProgrammer = true

console.log(vova)








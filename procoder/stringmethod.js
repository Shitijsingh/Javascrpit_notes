/*
String Methods and Properties

Before Starting  String methods and properties we need to know that string are indexed. so basically we can access any single character of a string by  doing something like this.

Expression : 'hello world'[1]

Result 'e'

There is only one property that exists


Property
.Length 

Methods (Without Argument)
.toUpperCase()
.toLowerCase()
.trim()
.trimStart()
.trimEnd


Methods (With Argument)
.includes()
.indexof()
.replace()
.replaceAll()
.concat()
.padStart()
.padEnd()
.charAt()
.charCodeAt()
.split()
*/

const userIcon = 'Mohit Singh';

const newMessage = '  I have new bike   ';

const finalMessage = '    sdfsf    ';

const replacedMessage = 'Hi My name is Vijay';

const lastFourDigit = "75897";

const templateString = `last four digit of my account number is`;

const newAccount = "My new Account number is";

const bankBalance = 878787;

const templateString2 = 'I have my account';

// console.log(userIcon[4])
// console.log(userIcon.length)

// console.log(userIcon.toUpperCase())
// console.log(userIcon.toLowerCase())
// console.log(newMessage.trim())
// console.log(finalMessage.toUpperCase().trim())
// console.log(finalMessage.trimStart())
// console.log(finalMessage.trimEnd())
console.log(newMessage.includes("new"))
console.log(newMessage.indexOf("e"))
// console.log(newMessage.indexOf("z"))
// console.log(replacedMessage.replace('Hi', 'Hello'))
// console.log(replacedMessage.replaceAll('a', 'A'))
// console.log(replacedMessage.concat(replacedMessage, finalMessage, userIcon))
// console.log(lastFourDigit.padStart(16, '*'))

// console.log(lastFourDigit.padEnd(18, '*'))

console.log(newMessage.charAt(10))

console.log(newMessage.charCodeAt(7))

console.log(replacedMessage.split(' '))

// console.log(templateString.concat(' ', lastFourDigit))

console.log(`newAccount ${lastFourDigit.padStart('16', '*')}`)

console.log(`I have $ ${bankBalance} in my account`)




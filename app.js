// 1 Переменные
//const lastName='Shcherbina'
//let age=19
//const age=19
//console.log(name)
//const firstName='Kostya'


// 2 Мутирование
//console.log('Имя человека: ' + firstName)
//alert()
//const lastName=prompt('Введте фамилию')

//alert(firstName+' '+lastName)


// 3 Операторы
/*const currentYear=2021
const birthYear=2001

const age=currentYear-birthYear
console.log(age)*/


// 4 Тип данных
//console.log(typeof firstName)


// 5 Приоритет операторов
/*const fullAge=19
const birthYear=2001
const currentYear=2021

const isFullAge=currentYear-birthYear>fullAge

console.log(isFullAge)*/


// 6 Условные операторы
/*const curseStatus='pending'

curseStatus?console.log('good'):console.log('not good')
if(curseStatus==='pending')console.log('бабай')*/


// 7 Булевая логика


// 8 Функции 

/*function calculate(year){
    return 2021 - year
}

const myAge=(calculate(2001))

console.log(myAge)*/


// 9 Массивы

//const cars=['Mazda','Mercedec','Ford']
//console.log(cars.length)


// 10 Циклы

/*for(let i=0; i<cars.length; i++){
    const car=cars[i]
    console.log(car)
}*/

/*for(let car of cars){
    console.log(car)
}*/


// 11 Объекты

const person={
    firstName:'Kostya',
    lastName:'Shcherbina',
    year:2001,
    languages:['Ua','Ru','En'],
    hasWife:false,
    qreet: function(){
        console.log('qreet')
    }
}

console.log(person.firstName)
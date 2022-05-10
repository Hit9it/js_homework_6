// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let number = 'hello world';
// console.log(number.length);
//  number = 'lorem ipsum';
// console.log(number.length);
//  number = 'javascript is cool';
// console.log(number.length);

//_________________________________________________________________________________________
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let upper= 'hello world';
// console.log(upper.toUpperCase());
// upper = 'lorem ipsum';
// console.log(upper.toUpperCase());
// upper = 'javascript is cool';
// console.log(upper.toUpperCase());

//_________________________________________________________________________________________
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let lower = 'HELLO WORLD';
// console.log(lower.toLowerCase());
// lower = 'LOREM IPSUM';
// console.log(lower.toLowerCase());
// lower = 'JAVASCRIPT IS COOL';
// console.log(lower.toLowerCase());

//_________________________________________________________________________________________
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   ';
// console.log(str.replaceAll(' ','')
//                 .replace('ys','y s'));
// //або
// console.log(str.trim());

//_________________________________________________________________________________________
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

//     let str = 'Ревуть воли як ясла повні';
// function split(str) {
//     console.log(str.split(' '));
// }
// split(str);

//_________________________________________________________________________________________
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// let arr = [10,8,-7,55,987,-1011,0,1050,0];
// console.log(arr.map(value => value.toString()));

//_________________________________________________________________________________________
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

//     let nums = [11,21,3];
// function sortNums (nums, version) {
//     if (version === 'ascending'){
//         nums.sort((a,b)=>a-b);
//     }else if (version === 'descending'){
//         nums.sort((a,b)=>b-a);
//     }
//     return nums;
// }
// console.log(sortNums(nums,'ascending')); // [3,11,21]
// console.log(sortNums(nums,'descending')); // [21,11,3]

//_________________________________________________________________________________________
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// let sortArr = (array) => array.sort((a,b)=>b.monthDuration-a.monthDuration);
// console.log(sortArr(coursesAndDurationArray));

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// let sortArr = (array) => array.filter(value => value.monthDuration>5);
// console.log(sortArr(coursesAndDurationArray));

//_________________________________________________________________________________________
// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

let deck = [
    {
        cardSuit: null,
        value: 'Joker',
        color: 'black'
    },
    {
        cardSuit: null,
        value: 'Joker',
        color: 'red'
    },
    {
        cardSuit: 'clubs',
        value: 'Ace',
        color: 'black'
    },
    {
        cardSuit: 'spade',
        value: 'Ace',
        color: 'black'
    },
    {
        cardSuit: 'heart',
        value: 'Ace',
        color: 'red'
    },
    {
        cardSuit: 'diamond',
        value: 'Ace',
        color: 'red'
    },
    {
        cardSuit: 'clubs',
        value: 'King',
        color: 'black'
    },
    {
        cardSuit: 'spade',
        value: 'King',
        color: 'black'
    },
    {
        cardSuit: 'heart',
        value: 'King',
        color: 'red'
    },
    {
        cardSuit: 'diamond',
        value: 'King',
        color: 'red'
    },
    {
        cardSuit: 'clubs',
        value: 'Queen',
        color: 'black'
    },
    {
        cardSuit: 'spade',
        value: 'Queen',
        color: 'black'
    },
    {
        cardSuit: 'heart',
        value: 'Queen',
        color: 'red'
    },
    {
        cardSuit: 'diamond',
        value: 'Queen',
        color: 'red'
    },
    {
        cardSuit: 'clubs',
        value: 'Jack',
        color: 'black'
    },
    {
        cardSuit: 'spade',
        value: 'Jack',
        color: 'black'
    },
    {
        cardSuit: 'heart',
        value: 'Jack',
        color: 'red'
    },
    {
        cardSuit: 'diamond',
        value: 'Jack',
        color: 'red'
    },
    {
        cardSuit: 'clubs',
        value: '10',
        color: 'black'
    },
    {
        cardSuit: 'spade',
        value: '10',
        color: 'black'
    },
    {
        cardSuit: 'heart',
        value: '10',
        color: 'red'
    },
    {
        cardSuit: 'diamond',
        value: '10',
        color: 'red'
    },
    {
        cardSuit: 'clubs',
        value: '9',
        color: 'black'
    },
    {
        cardSuit: 'spade',
        value: '9',
        color: 'black'
    },
    {
        cardSuit: 'heart',
        value: '9',
        color: 'red'
    },
    {
        cardSuit: 'diamond',
        value: '9',
        color: 'red'
    },
    {
        cardSuit: 'clubs',
        value: '8',
        color: 'black'
    },
    {
        cardSuit: 'spade',
        value: '8',
        color: 'black'
    },
    {
        cardSuit: 'heart',
        value: '8',
        color: 'red'
    },
    {
        cardSuit: 'diamond',
        value: '8',
        color: 'red'
    },
    {
        cardSuit: 'clubs',
        value: '7',
        color: 'black'
    },
    {
        cardSuit: 'spade',
        value: '7',
        color: 'black'
    },
    {
        cardSuit: 'heart',
        value: '7',
        color: 'red'
    },
    {
        cardSuit: 'diamond',
        value: '7',
        color: 'red'
    },
    {
        cardSuit: 'clubs',
        value: '6',
        color: 'black'
    },
    {
        cardSuit: 'spade',
        value: '6',
        color: 'black'
    },
    {
        cardSuit: 'heart',
        value: '6',
        color: 'red'
    },
    {
        cardSuit: 'diamond',
        value: '6',
        color: 'red'
    },
];
// // - знайти піковий туз
// console.log(deck.find(value => value.cardSuit === 'spade' && value.value === 'Ace'));
// // - всі шістки
// console.log(deck.filter(value => value.value === '6'));
// // - всі червоні карти
// console.log(deck.filter(value => value.color === 'red'));
// // - всі буби
// console.log(deck.filter(value => value.cardSuit === 'diamond'));
// // - всі трефи від 9 та більше
// console.log(deck.filter(value => value.cardSuit === 'clubs' && value.value >= '9' || value.cardSuit === 'clubs' && value.value === '10'));

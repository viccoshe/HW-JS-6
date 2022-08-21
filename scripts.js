//task 1
console.log('\n' + '#1');

console.log('aaa@bbb@ccc'.replace(/@/g, '!'));

//task 2
console.log('\n' + '#2');

let date = '2025-12-31';
console.log(date.replace(/-/g, '/'));

//task 3
console.log('\n' + '#3');

str = 'Я учу javascript';
console.log(str.substr(2, 14));
console.log(str.substring(2,16));
console.log(str.slice(2, 16));

//task 4
console.log('\n' + '#4');

let arr = [4, 2, 5, 19, 13, 0, 10],
    sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum += Math.pow(arr[i], 3);
    }
  console.log(Math.sqrt(sum));  
  
//task 5
console.log('\n' + '#5');

let a = 3,
    b = 5,
    c = a - b;
console.log(Math.abs(c)); 

//task 6
console.log('\n' + '#6');


let curDate = new Date;

/*
let opt = {
    hour: 'numeric',
    minute:'numeric',
    second: 'numeric'
}
console.log(curDate.toLocaleDateString('ru', opt));
*/

console.log(curDate.getHours()+ ':' + curDate.getMinutes() + ':'  + curDate.getSeconds());

function addZero () {
let m = curDate.getMonth(),
    d = curDate.getDate(),
    date;
    if (curDate.getMonth() < 10) {  
        m = '0' + curDate.getMonth();
    }if (curDate.getDate() < 10) {
        d = '0' + curDate.getDate();
    }
    date  = d + '.' + m + '.' +  curDate.getFullYear();
    console.log(date);
    return date;
}

addZero();

//task 7

console.log('\n' + '#7');

let str7 = 'aa aba abba abbba abca abea';
console.log(str7.match(/\bab+a\b/g));


//task 8
console.log('\n' + '#8');

let phone = '+375292563435',
    re = /^[*\+][\d\(\) -]{0,13}\d$/;

let valid = re.test(phone);
if (valid) console.log('Номер телефона введен правильно!');
else console.log('Номер телефона введен неправильно!');


//task 9
console.log('\n' + '#9');

let email = 'vicc3o2she@gmail.com';
function checkEmail(email) {
    let regexp = /^[a-z]{1}[\w-]{2,}@[\w]+\.[a-z]{2,11}$/i;
    if (regexp.test(email)) return true;
    else return false;
}
console.log(checkEmail(email));

//task 10
console.log('\n' + '#10');


let str10 = `https://tech.onliner.by
/2018/04/26/smart-do-200/?utm_source=main_tile&utm_medium=smartdo200#zag3`;

function showAddress(str10) {

console.log(str10.match(/[\w]+\.[\w]+\.[a-z]{2,}/gim));
console.log(str10.match(/\/[\d]{4}\/[\d]{1,2}\/[\d]{1,2}\/[\w-]{1,}\//gim));
console.log(str10.match(/[\w]+\=[\w]+\&[\w]+\=[\w]+/gim));
console.log(str10.match(/[\#]{1}[\w]+/gim));
}
showAddress(str10);





    



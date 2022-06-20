// Exercise1
function tellTime() {
    
let dayDisplay = document.getElementById('dayDisplay');
let timeDisplay = document.getElementById('timeDisplay');
let date = new Date();

let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
let dayNo = date.getDay();

dayDisplay.innerHTML = days[dayNo];

let apm = 'AM'
let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();

if(hour >= 13) {
  hour = hour - 12;
} else if (hour >= 12) {
  apm = 'PM';
}


timeDisplay.innerHTML = `${hour} : ${minute} : ${second} ${apm}`;

}

setInterval(tellTime, 1000);

console.log('-----------------------');

//Exercise2

const printBtn = document.querySelector('#printMe');

printBtn.addEventListener('click', printMe);

function printMe() {
    window.print();
}

console.log('-----------------------');

//Exercise 3

function tellDate() {
    let dateDisplay = document.getElementById('dateDisplay');
    let date = new Date();
    let dayDate = date.getDate()
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
 
    if(month < 10) {
        month = '0' + month;
    }

    if(dayDate < 10) {
        dayDate = '0' + dayDate;
    }

    dateDisplay.innerHTML = `${dayDate}/${month}/${year}`;
}

setInterval(tellDate, 1000);

console.log('-----------------------');

//Exercise 4
const No1 = document.getElementById('n1');
const No2 = document.getElementById('n2');
const No3 = document.getElementById('n3');
const Ans = document.getElementById('Ans');
const solveTri = document.getElementById('solveTri');

solveTri.addEventListener('click', solveTrig = () => {
    let s =`${No1.value + No2.value + No3.value}`;
    alert(s);
});

console.log('-----------------------');

//Exercise 5
function animateStr(id) {
    const element = document.getElementById(id);
    let textNode = element.childNodes[0];
    let text = textNode.data;
    
    setInterval( () => {
        text = text[text.length-1] + text.substring( 0, text.length - 1);
        textNode.data = text;   
    }, 100);
}

console.log('-----------------------');

//Exercise 6

function isLeapYear(year) {
    
    if(year % 4 == 0 && year % 100 != 0 || year % 4 == 0 && year % 100 == 0 && year % 400 == 0) {
        console.log('Is Leap Year')
    } else {
        console.log('Is not Leap Year')
    }
}

isLeapYear(2016);
isLeapYear(1902);

console.log('-----------------------');

//Exercise 7
function findSunday1st () {
   for (var year = 2014; year <= 2050; year++) {
     const d = new Date(year, 0, 1);
     if (d.getDay() === 0) {
         console.log(`1st January is being a Sunday ${year}`);
     }
   }
}
console.log('-----------------------');
findSunday1st();
console.log('-----------------------');

//Exercise 
const letsGo = document.getElementById('letsGo');

letsGo.addEventListener('click', playRandom)

function playRandom() {
    let noInput = document.getElementById('noInput');
    const randomNo = Math.round(Math.random()*11);
    
    if (noInput.value === randomNo) {
        console.log('Good Luck');
    } else if (noInput.value != randomNo) {
        console.log('Better Luck Next Time!');
    }

    noInput.value = null;

   }

   console.log(document.URL);

   console.log('-----------------------');

   //Exercise 17

   function absolutedif(no) {
       if(no <= 19) {
           return(19 - no);
       } else {
           return((no - 19) * 3);
       }
   }

   absolutedif(7);
   absolutedif(29);

   console.log('-----------------------');

   //Exercise 21
   function string_check(str1) {
  if (str1 === null || str1 === undefined || str1.substring(0, 2) === 'Py') 
  {
    return str1;
  }
  return "Py"+str1;
}

console.log(string_check("Python"));
console.log(string_check("thon"));

console.log('-----------------------');

//Exercise 22
function changePos(str1) {
    if (str1.length <= 1) {
        return str1;
    }
    midStr = str1.substring(1, str1.length - 1);
    return (str1.charAt(str1.length-1) + midStr + str1.charAt(0));
}

console.log(changePos("thisworks"));

console.log('-----------------------');

//Exercise 23
function newStr(str1) {
    return (str1.charAt(0) + str1 + str1.charAt(0));
}

console.log(newStr("work"));

console.log('-----------------------');

//Exercise 30 
function delScript(str) {
    if(str.length < 6) {
        return str;
    }

    let result_str = str;

    if(str.substring(4, 10) === 'Script') {
        result_str = str.substring(0,4) + str.substring(10, str.length);
    }

    return(result_str);
}

console.log(delScript("JavaScript"));
console.log(delScript("CookieScript"));

console.log('-----------------------');

//Exercise 31 
function largest(int1, int2, int3) {
    let champ;

    if(int1 < int2) {
        champ = int2;
    } else {
        champ = int1;
    }

    if(champ < int3) {
        champ = int3;
    } 

    return(champ);
    
}

console.log(largest(1,2,3));
console.log(largest(50,77,20));

console.log('-----------------------');

//Exercsie 32
function closeTo100(int1, int2) {
    let dif1 = Math.abs(100 - int1);
    let dif2 = Math.abs(100 - int2);

    if(dif2 > dif1) {
        return(int1);
    } else if (dif2 < dif1) {
        return(int2);
    } else {
        return(0);
    }
}

console.log(closeTo100(50, 70));
console.log(closeTo100(69, 150));
console.log(closeTo100(69, 69));

console.log('-----------------------');

//Exercise 33 

const inBetween = (int1, int2) => {

// function inBetween(int1, int2) {
 if(40 <= int1 && int1 <= 60 && 40 <= int2 && int2 <= 60 
    ||
    70 <= int1 && int1 <= 100 && 70 <= int2 && int2 <= 100) {
     return(true);
 } else {
     return(false);
 }
}

console.log(inBetween(45, 50));

console.log('-----------------------');

//Exercise 34

const check_char = (str, char) => {
    let ctr = 0; 

    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == char) {
            ctr++;
        }
    }

    if (ctr > 1 && ctr < 5) {
        return(true);
    } else {
        return(false);
    }
}

console.log(check_char("Python", "y"));
console.log(check_char("JavaScript", "a"));
console.log(check_char("Console", "o"));
console.log(check_char("Console", "C"));
console.log(check_char("Console", "e"));
console.log(check_char("JavaScript", "S"));
console.log(check_char("Hippopotamuspp", "p"));

console.log('-----------------------');


console.log('Flames_Application');

function start_flames(str1, str2) {
    let s1 = str1.split('');
    let s2 = str2.split('');
    let flames = ['Friends', 'Lovers', 'Admirers', 'Married', 'Enemies', 'Siblings'];
    let count = 0;

    for(let i = 0; i < s1.length; i++) {
        
        for(let o = 0; o < s2.length; o++) {
            if( s2[o] == s1[i] ) {
                count++;
            }
        }
    }

    let flameNo = count % 6;
    return(flames[flameNo-1]);
}

console.log(start_flames('Sandra', 'Emmanuel'));




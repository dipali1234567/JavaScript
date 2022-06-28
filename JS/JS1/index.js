
    let js="Amazing"
    // if(js=="Amazing")
    // alert("Javascript is fun")
    console.log(56+56-87*67)
//    Here data types and variables
// let country="IndiA"
let javaScriptISFun=true
console.log(javaScriptISFun)
console.log(typeof javaScriptISFun)
console.log(typeof 23)
console.log(typeof "Dipali")
// dynamicity
javaScriptISFun=67
console.log(javaScriptISFun);
console.log(typeof javaScriptISFun);

// undefined value defined by varible is not defined yet
let dipali;
console.log(typeof dipali);
console.log(dipali);

dipali="Dipali"
console.log(dipali);
dipali=4567;
console.log(typeof dipali);
console.log(typeof null);  //returns object but it's not true should return null but still continued wrong in js

// Assignment 1 varibles
let country="India";
let continent="Asia";
let population=130;
console.log(country);
console.log(continent);
console.log(population);

// Assignment 2 Data types
let isIsland=false;
let language;
console.log(typeof isIsland);
console.log(typeof language);
console.log(typeof country);
console.log(typeof continent);
console.log(typeof population);


// end second assignment

let firstName="Dipali"; // box scope
const BIRTH=2000;
var lastName="Gangawane"  //var is funstion scope
console.log(firstName);
console.log(lastName);
console.log(BIRTH);
// Only varible name declarartion is also allowed with 'let' and 'var' and 'const'
middleName="Dnyaneshwar";
console.log(middleName);

//basic operator
const now=2037;
const previous=now-2017;
const ageAfter=now+2017;
console.log(now,previous,ageAfter);
console.log('Dipali'+'Dnyaneshwar'+'Gangawane');
console.log(previous/2,previous*2,previous**3);
//Assignment operator
let x=10+5;
x+=10;
//x++;
x--;
console.log(x);

//Comparison operator
console.log(45>56,56>45,45>=45,45<56,45<=56)
console.log(now-2017>now-2018);

//Assignment 3
language="Marathi";
console.log(language);
//make above as const it will give error const var should assign at time of declaration

//Assignment 4
console.log('Half country population : ',population/2, 'milions');
console.log(population+1);
let finlandPopulation=6;
console.log(population>finlandPopulation);
let avgPopulation=33;
console.log(population<avgPopulation);
let description= 'Portugal is in Europe, and its 11 million people speak portuguese';
console.log(description);
let y,z;

z=y=25-10-5;
console.log(x,y);
console.log(3+4/2);
console.log((3+4)/2);

//Coding challenege 1
// const markMass=78;
// const markHeight=1.69;
// const johnMass=92;
// const johnHeight=1.95;
// const markBMI=markMass/markHeight**2;
// const johnBMI=johnMass/johnHeight**2;
// console.log(markBMI,johnBMI);
// const markHigherJohn = markBMI>johnBMI;
// console.log(markHigherJohn);


const markMass=95;
const markHeight=1.88;
const johnMass=85;
const johnHeight=1.76;
const markBMI=markMass/markHeight**2;
const johnBMI=johnMass/johnHeight**2;
console.log(markBMI,johnBMI);
const markHigherJohn = markBMI>johnBMI;
console.log(markHigherJohn);


//String and Template literals
const fName="Dipali"
const job="Programmer";
const  birthYear=2000;
const year=2022;

const info="I'm "+fName+", a "+(year-birthYear)+" year old "+job;
console.log(info);

// Another option no need to manage spaces

const information= `I'am ${fName} ,a ${year-birthYear} year old ${job}`;
console.log(information); 
console.log(`Hello World`);
console.log(`Hello World \n\ I am dipali \n\ I live in pune`);
console.log('add emoji');

//coding challenge 2
if(markBMI>johnBMI)
{
    console.log(`Mark BMI ${markBMI}is Greater than John BMI ${johnBMI}`);
}
else
{
    let s=`Mark BMI ${markBMI}is lesser than John BMI ${johnBMI}`;
    console.log(s);
}


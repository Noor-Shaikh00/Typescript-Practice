//My Self Noor Shaikh From Karachi Age 15 
//StarTinG CoDinG 

//
/// let weather = "cloudy";
// if (weather == "raining"){
//   console.log("wear a raincoat");
// }

// function noorfrnd(){
//     let aadil = noorfrnd
//     console.log(noorfrnd)
// }
// noorfrnd();

// let isRaining = false;
// if( isRaining){
// console.log("hello world");
// }


// let chtkoo = "noor";
// if (chtkoo == "noor"){
//   console.log("chtkoo and noor are best friends");
// }


// let noor = "chtkoo";
// if(noor === "chtkoo"){
//     console.log("noor loves chtkoo")
// } else if(noor === "noor"){
//     console.log("noor loves chtkoo")
// }
    


// Code 

//  let sum = 0;
// for(let i = 1; i <=5;

//  i++){
//     sum +=i;
//  }
//  console.log(sum);

// for(let i = 0; i<3; i++){
//     for (let j = 0; j < 2; j++){
//         console.log(i + ","+j);
//     }
// }
 

// 16 july 2024  
// NooR's CoDinG 
//Code Errors SOlution 

// function noor(){
//     let noor = 0;
//     console.log(noor)
// }
// noor();

// function  maxDifference(arr: number[]){
//     let minElement = arr[0]
    
//     let maxDifference =0;

//     for (let i = 1; i< arr.length; i++){
//         if(arr[i] > minElement && arr[i] - minElement > maxDifference)
//             {maxDifference = arr[i]- minElement;}
//         }
//         if (arr[maxDifference] < minElement){
//             minElement = arr[maxDifference];
//         }
//         return maxDifference;
//     }
  
// const arr = [7, 1,5,3,4,6]
// const result = maxDifference(arr);
// console.log(result);
// maxDifference(arr);


// 17 July 2024 
//NooR's CoDinG 
//Using IF ELSE We Can Write A Function Code//
// function noorKaGola(a:number,b:string,c:boolean){
//     let noorKaGola = 200;
//     console.log("Noor Ko Gola Bhut Passand Ha")
//     if(noorKaGola === 300){
//         console.log("Noor Ko Gola Nhi Passand")
//     }else{
//         console.log("Noor Ko Gola Bhut Pasand Hai")
//     }
// }

// noorKaGola(56,"noor",true);

// REST PARAMETERS 

// function displayNames(first:string, ...otherNames:string[]){
//     console.log("first name: " +first);
//     console.log("other names: ");
//     for(let name of otherNames){
//         console.log(name);
//     }
// }
// displayNames("ali","ahmed","sara","fatima");

// CALLBACKS TYPE 

// function greet(name: string, callback: () => void){
//      console.log("Hello," + name + "!"); callback()
//  }

// function sayGoodbye(){ 
//     console.log("Goodbye!");
// }

// greet("Ali", sayGoodbye);

// CALLBACKS TYPE 

// function greet(name: string, callback: (message: string) => void){ 
//     const message = "Hello, " + name + "!"; callback(message);
// }
// function displayMessage(message: string){
//  console.log(message); 
// }

// greet("Ali", displayMessage);

// 22 july 24
// CoDinG

//TOPIC: [ARRAY];
//let myArr = ["apple","banana","mango"];
// let arr : string[] =  ["banana","mango","strawberry","pineapple","orange","apple"]
// console.log(arr)

// let girlsnames: string[] = ["noor","aqsa","dua","mehak","hira","haniya","sana","farwa"];
// console.log(girlsnames);

// var boysNames: string[] = ["hamzah","bilal","hassan","maaz","raza","quddus","rehman","arham","amir","faiz","aryan","ubaid","aadil"];
// console.log(boysNames);

//TOPIC: [TUPLES];
// let coloursNames:[string,string,string,string,string,string] = ["black","white","orange","purple","yellow","purple"];
// console.log(coloursNames);

// var drinksName: [string,string,string,string,string,string] = ["sting","coke","pepsi,","miranda","fanta","dew"];
// console.log(drinksName);

// const names:  [string,string,string,string,string,string] = ["noor","chtkoo","gurya","raza","quddus","tom boy"];
// console.log(names);


//TOPIC: FUNCTIONS;
// function myfunc(a:number,b:string,c:boolean):void {

// }

// 23 july 24 

// CallBack FunCTioN 
// CoDinG

// function greet(name:string , callback:(message:string)=> void){
//     const message = `Hello,${name}!`;
//     callback(message);
// }

// function displayMessage(message:string){
//     console.log(message);
// }
// greet("Ali", displayMessage);

//EXPLANATION

// is example mai greet function name or callback function ko parameters ke roop main leti jab greet function call hoti hai.woh name ke sath ek message banati hai or phr us message ko callback function ke through display krti hai

// 2 code 
// function calculate(num1:number,num2:number,callback:(result:number)=>void){
//     const result = num1 + num2;
//     callback(result);
// }

// function displayResult(result:number){
//     console.log("Result:"+ result);
//     console.log("result: ${result}");
// }

// calculate(5,3, displayResult)
//EXPLANATION 
//is example mai calculate function 2 numbers ko add krki result calculate krty hai or phr us result ko callback function k through display krty hai. jab calculate function ko call kra jata hai tav us mai 2 numbers or displayResult function k pass k jaty hai jo result ko displat krta hai 
//Jab ham calculate (5,3, displayResult) ko call krengi tou output 8 ayenga.kyyki calculate function ko 5 or 3 ko add krki result 8 dega phr displayResult ka function us result ko display kreyega.

// Topic Asynchronous

// asynchronous ka simple tareeky se mtlb hai jab kse kaam ya communication mai time ta sequence ka koi specific order ya requirement nahi. iska matlb hai k events ya tasks ek dusry k sath real time mai sync nhi hoty

// console.log("start");
// setTimeout(() => {
//     console.log("end");
// }, 2000);

// EXPLANATION
//  is code mai setTimeout function ka use kiya gya hai jo 2 second ke baad "end" print karega. yeh ek simple way hai jis mai asynchronous behaviour dekhaya ja rha hai. 

//  han 'setTimeout asynchronous behavior ko demonstrate karta hai. Jab 'setTimeout call hota hai, woh ek timer set karta hai jo specified time ke baad ek function ko run karta hai, aur code execution meanwhile continue hoti hai. Isi wajah se "End" message 2 seconds ke baad print hota hai, jo asynchronous behavior ko show karta hai.
// "demonstrate" ka matlab hai ke 'setTimeout function ke through code ke execution mein ek delay laga kar asynchronous behavior dikhaya jata hai. Jab 'setTimeout call hota hai, woh ek timer set karta hai jo specified time ke baad ek function ko run karta hai, aur meanwhile code execution continue hoti hai. Isi wajah se "End" message print hone mein thoda waqt lagta hai, jo asynchronous behavior ko illustrate karta hai.

// function waitAndPrint():Promise<void>{
//     return new Promise((resolve)=> {
//         setTimeout(() => {
//             console.log("thofri der ruk...2 seconds k liye!");
//             resolve();
//         }, 2000);
//     });
// };

// async function displayMessage(){
// console.log("shuru krty hain");
// await waitAndPrint();
// console.log("ho gaya khatam");
// }
//  displayMessage();
//EXPLANATION
// Is code mein 'waitAndPrint function 2-second ka delay set karke message print karta hai. 'displayMessage function async' keyword ka use karke 'waitAndPrint function ka wait karta hai, phir message print karta hai. Yeh code asynchrony ko samajhne mein madadgar ho sakta hai.

// TOPIC PROMISE 
// Promise TypeScript mein ek built-in type hai jo asynchronous operations ko handle karne ke liye use hota hai. Promise ek object hai jo kisi future value ya operation ka result represent karta hai. Jab koi asynchronous operation complete hoti hai, toh Promise resolve hota hai aur jab koi error aata hai, toh Promise reject hota hai.

// Promise ke use se hum asynchronous code ko manage kar sakte hain, jaise ki network requests, file operations, ya timers jaise kaam. Promise ka use karke hum multiple asynchronous operations ko chain kar sakte hain aur unke results ko handle kar sakte hain.

// Is tarah se, Promise TypeScript mein asynchronous programming ko simplify karta hai aur code ko clean aur readable banata hai.

// const meriPromise = new Promise<string>((resolve,reject)=>{
//     const success = true;
//     if(success){
//        resolve("Operation successfull!");
//     }else{
//         reject("operation failed!");
//     }
// });

// meriPromise.then((result)=>{
//     console.log(result);
// }).catch((error)=>{
//     console.log(error);
    
// });

//EXPLANATION 
//Is code mein hum ek Promise bana rahe hain jo 'success' variable ki value ke basis par resolve ya reject hota hai. Fir, hum 'then aur 'catch methods se Promise ke result ko handle kar rahe hain. Yeh ek basic example hai Promise ka TypeScript mein.

//TOPIC REJECT 
// reject ka matlab hai kisi cheez ko manzoor nahi karna ya accept nahi karna. TypeScript mein, jab ek Promise reject hota hai, yani usmein koi error ya problem aati hai, tab reject function call hota hai jo Promise ko failure state mein le jata hai. Isse hum error ko handle kar sakte hain aur appropriate action le sakte hain. Jaise ke maine code mein dikhaya hai, agar operation successful nahi hota toh hum reject function se "Operation failed!" message ko pass kar rahe hain.

//24 july 24 

// promise ky defination 
// Typescript mein 'promise' ka definition simple hai. Promise ek object hai jo future mein koi value provide karega. Yeh value ya toh successfully mil jati hai ya phir error generate hota hai. Is tarah se, promise asani se asynchronous operations handle karne mein madadgar hota hai. 

// resolve ky defination
// Typescript mein 'resolve' ka matlab hota hai jab ek promise successfully complete ho jata hai aur uski value resolve ho jati hai. Iska matlab hai ke promise ke andar di gayi value successfully mil gayi hai. Yeh ek important concept hai jab hum asynchronous programming karte hain.

// reject ky defination
// Typescript mein 'reject' ka matlab hota hai jab ek promise kisi reason ya error ki wajah se unsuccessful ho jata hai. Iska matlab hai ke promise ke andar di gayi value nahi milti, aur ek error generate hota hai. Jab promise reject hota hai, toh uska catch block chal jata hai jahan error handling ki jaati hai.

//asychronous ki defination 
// Asynchronous programming Typescript mein ek tarah ka programming hai jahan ek task start hota hai magar uska result turant available nahi hota. Ismein, program agle task ko start kar deta hai bina pehle ke task ka result mil jaye. Yeh tarika tasks ko concurrently run karne mein madad deta hai, jisse program efficient aur responsive ban sakta hai. 
//Efficient ka matlab hota hai jab koi system ya process kam resources use karke zyada kaam kar sakta hai. Asynchronous programming ki madad se, program tasks ko concurrently run karke time aur resources ka behtar istemal kar sakta hai, jisse overall performance improve hoti hai. Is tarah se, program fast aur effective ho jata hai. 

//callback ki defination 
//Typescript mein 'callback' ek function hai jo dusre function ko as an argument pass kiya jata hai. Jab pehli function complete hoti hai, toh woh dusri function ko call karti hai. Callbacks asynchronous programming mein commonly istemal hote hain jahan ek function ko execute karne ke baad kisi aur task ka result handle karna hota hai.

// typescript mai callback functions kam kse krty hai?????
// Typescript mein callbacks kaam karte hain by passing a function as an argument to another function. Jab pehli function complete hoti hai, toh woh callback function ko call karti hai. Is tarah se, asynchronous tasks ke results handle kiye ja sakte hain. Callbacks ka istemal event handling, fetching data from a server, ya any asynchronous operations ke liye hota hai. 

//callback functions kia hoty hai?????
//  callback functions woh functions hote hain jo dusre functions mein argument ke roop mein pass kiye jaate hain aur jab pehli function complete hoti hai, toh woh callback function execute hota hai. Callback functions asynchronous programming mein kaafi useful hote hain jahan tasks ko sequentially execute karne ke liye istemal kiye jate hain. Callbacks ka istemal event handling, data fetching, aur other asynchronous operations mein hota hai. 

//callback esay way defination
//callback function basically ek aise function hai jo dusre function ko as an argument pass kiya jata hai. Jab pehli function complete hoti hai, toh woh dusri function ko call karti hai. Is tarah se, tasks ko sequence mein execute karne mein help milti hai. Callbacks ka use mainly asynchronous programming mein hota hai jahan tasks ko syncronize karna hota hai. 

// sychronous ky defination 
// synchronous ka matlab hota hai ke tasks ek dusre ke saath line by line execute hote hain, matlab ek task complete hone ke baad hi agla task shuru hota hai. Ismein ek task ka wait karna padta hai jab tak wo complete na ho jaye. Is tarah ke tasks ko execute karne mein sequence maintain hoti hai

//sychronous esay way defination 
// synchronous ka matlab hai ke tasks ek ke baad ek hota hain, matlab pehla task complete hone ke baad hi dusra task shuru hota hai. Ismein tasks line by line execute hote hain aur ek task ka wait karna padta hai jab tak wo complete na ho jaye. Is tarah ke tasks ko sequence mein execute karna kehte hain. 

// setTimeOut JavascripT FuncTioN 
// setTimeout ek JavaScript function hai jo ek delay ke baad specific code ko execute karta hai. Jaise ki agar tu kisi function ko thoda late run karna chahta hai, toh tu setTimeout ka istemal kar sakta hai

//Enums Ky DeFinaTioN 
// Enums ka matlab hota hai "enumerations". Ye ek data type hai jo ek set predefined values ko represent karta hai. Ye values specific hote hain aur ek list mein define kiye jate hain. Jaise ki agar hum days of the week ko represent karna chahte hain, to hum ek enum bana sakte hain jisme values hongi like "Sunday", "Monday", "Tuesday", and so on. Enums code ko readable aur maintainable banane mein madad karte hain. 

//ENUM KA CODE 
// enum Days{
//     monday,
//     tuesday,
//     wednesday,
//     thursday,
//     friday,
//     saturday,
//     sunday
// };
//enum varaible declaration 
// let today = Days.wednesday

//using the enum varaible 
// if(today ===  Days.wednesday){
//     console.log("Aaj WednesdaY Hai!");
// }else{
//     console.log("Another Day");
    
// }

// enum Colours{
//     red,
//     orange,
//     white,
//     black,
//     yellow,
//     purple,
//     green,
// };
// let IT = Colours.black
// if(IT === Colours.black){
//      console.log("My FavouriTe ColouR Is BlacK");
    
// }else{
//     console.log("My FavouriTe ColouR Is purple");
// }
// enum cars {
//     Audi,
//     Toyota,
//     Honda,
//     Vitz,
//     Corrola
// }
// let gari = cars.Audi
// if(gari === cars.Audi){

// }


// enum Colour{
//     red,
//     green,
//     black,
//     white,
//     orange
// };
// let IT = Colour.black
// if(IT === Colour.black){
//     console.log("my favourite colour is black");

// }else{
//     console.log("my fav colour is white");
// } 

// enum Colour{
//     green,
//     red,
//     blue,
//     white
// }

// let AI = Colour.green;
// if(AI !== Colour.green){
//     console.log('my favourite colour is black');
    
// }else{
//     console.log("my favourite colour is white");
    
// }

// enum Colour {
//     green,
//     red,
//     blue,
//     white
// }

// let IT = Colour.green;

// if (IT !== Colour.green) {
//     console.log('my favourite colour is black');
// } else {
//     console.log('my favourite colour is white');
// }

//Topic ObjecT Alais
// yeh ek reference type hota hai jahan ek varaible dusry varaible ko refer krta hai
// let x: number = 5;
// let y: number =x; //object aliasing 
// console.log('x:',y);
// console.log('y:',y);

// x = 10;
// console.log("after chnging x to 10:");
// console.log('x:',y);
// console.log('y:',y); Is code mein, y variable ko x se refer kiya gaya hai. Jab hum x ki value change karte hain, to y ki value bhi automatically change ho jati hai kyunki yeh dono ek hi object ko refer kar rahe hain.
//  object aliasing yahan par let y: number = x; line mein hua hai. Is line mein y ko x se refer kiya gaya hai, jis se dono variables ek hi object ko point kar rahe hain. Isi wajah se jab x ki value change hoti hai, y ki value bhi change ho jati hai.

// type Person = {
//     name:string;
//     age:number;
// };

//using object alias 
// let student:Person ={
//     name:"Ali",
//     age:20
// }; is code mein humne ek naya object type Person banaya hai jisme 2 properties hain: name jo ek string type hai aur age jo ek number type hai. 

// Phir humne student naam ka ek variable declare kiya hai jo Person type ka hai. Iska matlab hai ki student variable mein hum name aur age properties ko hi assign kar sakte hain, aur yeh properties string aur number type hi hongi.

// function print(value: number | string, p0: string) {
//     if (typeof value === "string") {
//       // yahan value ka type string hai
//       console.log(`String: ${value}`);
//     } else {
//       // yahan value ka type number hai
//       console.log(`Number: ${value}`);
//     }
//   }
// print(9,"noor")

// 30 july 24

// MCQS CODING 
// type Fruit = "apple"|"banana"|"cherry"
// function getFruitName(fruit: Fruit): string{
//   return "Fruit" + "" + fruit;
// }

// console.log(getFruitName("apple"));
// console.log(getFruitName("mango"));

// options
// 1,  Fruit:apple , Fruit:mango this is answer
// 2,   Fruit:apple ,  error at runtime
// 3,    Fruit:apple ,  Fruit:undefined
// 4,    error at compile time 


// let a = true;
// let b = !a;
// console.log(a);

// 31 july 24 

// MCQS CODING 
// function myCallBack(text:string){
//     console.log("inside myCallBack" +text);
// }
// function callingFunction(initialText:string,callback:(text:string)=>void){
//     callback(initialText)
// }
// callingFunction('myText',myCallBack);

// options 
// 1, there will be the compiler error 
// 2,it will  be print "inside myCallBack "myText" on the log 
// 3, it will  be print "myText inside my CallBack" on the log 
// 4, it will  be print "myText" on the log

// var buildNameFun: (...rest:string[], fname:string)=>string= function(...restOfname:string[],firstName:string){
// return firstName = + " "+ restOfname.join("");
// }
// console.log(buildNameFun("Khan","Zia","U")); // ERROR  

// options  
// 1,  there will be the compiler error 
// 2, it will be print "Zia U, Khan" on the log
// 3, it will be print "Khan Zia U" on the log 
// 4, it will be print "U,ZiaKhan" on the log 

// function pickCard(x:{suit:string,card:number;}[]):number;
// function pickCard(x:number):
// {Suit:string;card:number;};
// function pickCard(x:any):any {
//     if(typeof x == "object"){
//         var pickedCard = Math.floor(Math.random()*x.length);
//         return pickedCard 
//     }
//     else if(typeof x == "number"){
//         var pickedSuit = Math.floor(x/13);
//         return {suit:Suits[pickedSuit],card:x % 13};
//     }
// }
 
// options 
 // 1, The function has two overloads.

// 2, The function has three overloats

// 3, # will not compile because overloads have different return types.

// 4 , It will not compile because overloads have different parameter types

// 13 august 24 
// Once AGain CoDinG KO Dil Sy Salaam  
// So Ajj Ham Kuch Practice KrenGi OKH??  

// SabSy Phle Ham Let Ka Variable Banye Gy
// let sole = 56
// let car = 56 
// console.log(sole);

//KucH ObjecT Bana Leti Hai 
// Download inquirer 
// command : npm i inquirer
// new version commmand npm install inquirer@9.3.0
// then inquirer types download  
// command to download types of inquirer : npm i --save-dev @types/inquirer

// import inquirer from "inquirer";
// const song = await inquirer.prompt([
//     {
//         name: "phli dafa",
//         type: "atif aslam",
//         message: "pyaar ko pehchana ehsaas hai naya suna hai suna hai yeh ras-e-wafa hai jo dil pe nasha hai woh phle dafa"
//     }
// ]);
// console.log(song);

// TUPLES []
// let books:[string,string,string,string,string,string] = ["english","maths","science","pakistan studies","chemistry","biology"];
// console.log(books);

// ARRAY []
// let numbers:number[] = [1,2,3,4,5,6,7,8]
// console.log(numbers);







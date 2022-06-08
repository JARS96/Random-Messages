/*  test about running script
console.log('Hello, World!')
*/

//starting code
const firstPartGreet = ['Hi', 'Hello', 'Hallo', 'Hola', 'Salut', 'Ciao', 'Olá','Privet','Nǐ hǎo','Witam','Dia dhuit'];
let objects = [
    {
        name: 'King Carlo Magno',
        placeCome: 'USA'
    },
    {
        name: 'Maximo',
        placeCome:'Roma'
    },
    {
        name:'Pitagoras',
        placeCome:'Samos'
    },
    {
        name:'Heráclito',
        placeCome:'Éfeso'
    },
    {
        name:'Lucio',
        placeCome:'Rome'
    },
    {
        name: 'Darwin',
        placeCome: 'United kingdom',
    },
    {
        name: 'Platón',
        placeCome: 'Atenas',
    },
    {
        name: 'Einstein',
        placeCome: 'Germany',
    },
    {
        name: 'Newton',
        placeCome: 'Manor',
    },
    {
        name: 'Muhammad',
        placeCome: 'United States',
    },
    {
        name: 'Tesla',
        placeCome: 'Croatia',
    },
]
var num = Math. round(Math. random()*10);

//function
 
const randomMessage = () =>{
    let i = Math. round(Math. random()*10);
    let j = Math. round(Math. random()*10);
    let k = Math. round(Math. random()*100);
    let message = [];
    message.push(firstPartGreet[j])
    message.push(objects[i].name)
  return message.join(' ') +', ' + ' ' + `We have been waiting for you since ${k} years ago.`;
}

//Testing codes
//console.log(objects[1].name)
//console.log('primer separador');
//console.log(num);
//console.log('segundo separador');
console.log(randomMessage());
//console.log('tercer separador');
//console.log(objects[i].name);
//console.log('fin');
//randomMessage();



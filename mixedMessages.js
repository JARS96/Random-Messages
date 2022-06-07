/*  test about running script
console.log('Hello, World!')
*/

//starting code
const firstPartGreet = ['Hi', 'Hello', 'Hallo', 'Hola', 'Salut', 'Ciao'];
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
]
var num = Math. round(Math. random()*10);


//function

 
const randomMessage = () =>{
    let i = Math. round(Math. random()*10);
    let j = Math. round(Math. random()*10);
    switch(num){
        case 0:
            console.log(objects[i].name[j])
        case 1:
            console.log(num);
        case 2:
            console.log(num);
        case 3:
            console.log(num);
        case 4:
            console.log(num);
        case 5:
            console.log(num);
        case 6:
            console.log(num);
        case 7:
            console.log(num);
        case 8:
            console.log(num);
        case 9:
            console.log(num);
        case 10:
            console.log(num);
    }

}


//Testing codes
console.log(objects[1].name)
console.log(num);
console.log(randomMessage());
console.log(objects[i].name[j])



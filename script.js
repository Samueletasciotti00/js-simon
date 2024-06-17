//Visualizzare 5 numeri in pagina.
const numbers = [];
const userNumbers = []; 

while(numbers.length < 5){
    let x = Math.floor(Math.random() * 9);
    numbers.push(x);
}

console.log(numbers);//DEBUG

    //Dopo di che, parte un timer di 30s.

//L'utente deve inserie uno alla volta i numeri visti precedentemente nel Input.
while(userNumbers.length < 5){
    let x = parseInt(prompt('Inserisci i numeri uno alla volta!!'));
    userNumbers.push(x);
}

console.log(userNumbers);//DEBUG

//Come output il software individua i numeri corretti e quanti, riportandoli.







//Visualizzare 5 numeri in pagina.
const numbers = [];

while(numbers.length < 5){
    let x = Math.floor(Math.random() * 9);
    numbers.push(x);
}

console.log(numbers);
    //Dopo di che, parte un timer di 30s.

//L'utente deve inserie uno alla volta i numeri visti precedentemente nel Input.

//Come output il software individua i numeri corretti e quanti, riportandoli.
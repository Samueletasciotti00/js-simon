
//Definiamo i numeri generati ed i numeri inseriti dall'utente.
const numbers = [];
const userNumbers = [];

//Definiamo dove andranno stampati i numeri in pagina. + risultati.
let content = document.querySelector('.box');

//Definiamo il bottone di avvio
const button = document.getElementById('btn');

//Visualizzare 5 numeri in pagina.
while(numbers.length < 5){
    let x = Math.floor(Math.random() * 9);
    numbers.push(x);
}

//Funzione che stampi i numeri in pagina
button.addEventListener('click',
    function(){
        // Stampare in pagina
        content.innerHTML = `${numbers}`
        console.log(userNumbers);
    }
)


button.addEventListener('click', 
    setTimeout(function(){

        //Rimuovere i numeri inseriti
        content.innerHTML = '';

        setTimeout(
            function(){
                //L'utente deve inserie uno alla volta i numeri visti precedentemente nel Input.
                while(userNumbers.length < 5){
                    let x = parseInt(prompt('Inserisci i numeri uno alla volta!!'));
                    userNumbers.push(x);
                }

                //Controllare la corrispondenza dei numeri dei due array
                for (let i = 0; i < numbers.length; i++) {

                    //Stampare il risultato(N numeri corretti, Trascriverli)
                    if (numbers[i] !== userNumbers[i]) {
                        console.log(userNumbers[i] + '  Error');
                    } else {
                        console.log(numbers[i] + '  True');
                    }
                }

            }, 5000 //5 secondi di delay

            
        )

        //Come output il software individua i numeri corretti e quanti, riportandoli.
    }, 3000 //Timeout di 30s

    )
        
)

//DEBUG

    //Dopo di che, parte un timer di 30s.



console.log(userNumbers);//DEBUG


    






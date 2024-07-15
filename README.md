# template-base
Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro? Abbiamo visto qualcosa di particolare che possiamo usare?
Consigli del giorno:
Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
BONUS 1:
Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.
BONUS 2:
Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz. Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.


1) Scrivi un programma che stampi in console i numeri da 1 a 100 usando "console.log()"
2) ogni multiplo di 3 e 5 scrivi "fizz" e "buzz"
3) BONUS 
    A - Crea un container nel DOM , aggiungendo un elemento html con il numero o la stringa corretta da mostrare
    B - Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a       seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.


DOMANDA

Come faccio a sapere se un numero è divisibile per un altro? Abbiamo visto qualcosa di particolare che possiamo usare?

RISPOSTA

Se un elemento A dividendolo per un elemento B non da come risultato un numero con la virgola significa che sono divisibili altrimenti no.
Sapendo questo posso usare:

if (A % B == 0) { // A diviso B da resto 0
        console.log( B è divisibile); // se daresto 0 è divisibile
    } 
    else {
        console.log(B non è divisibile); //altriemnti non è divisibile
    }
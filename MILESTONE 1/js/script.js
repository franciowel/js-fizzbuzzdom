// MILESTONE 1
// Per i multipli di 3 stampi Fizz al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
// // Stampare in console

// START

// STAMPIAMO I NUMERI DA 1 A 100
   for(let i = 0; i <= 100; i++) {
    //    DIV 5 BUZZ
       let FizzBuzzGenesis;
       if(i % 5 === 0) {
           FizzBuzzGenesis = 'Buzz';
       }
    //    DIV 3 FIZZ
       if(i % 3 === 0) {
           FizzBuzzGenesis = 'Fizz';
       }
    //    FIZZBUZZ 
       if(i % 3 === 0 && i % 5 === 0) {
           FizzBuzzGenesis = 'FizzBuzz';
       }
       console.log(FizzBuzzGenesis)
   }
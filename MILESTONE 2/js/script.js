// MILESTONE 2
// Per ogni numero, data una ul nel DOM, aggiungete un elemento 
// html li con il numero o la stringa corretta (seguendo le regole della Milestone 1).

// START

const FizzBuzzContainer = document.querySelector('.fizzbuzz-contain')

// STAMPIAMO I NUMERI DA 1 A 100
   for(let i = 1; i <= 100; i++) {
    //    DIV 5 BUZZ
       let FizzBuzzGenesis = i;

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

       const BoxNumb = `<li class="num-box">${FizzBuzzGenesis}</li>`;

       console.log(FizzBuzzGenesis)
       FizzBuzzContainer.innerHTML += BoxNumb;
   }

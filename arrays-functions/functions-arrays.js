alert('This site is great')


// Skriv en funktion som returnerar 
// det största elementet i en lista.
 let min_first_list=['banana', 'orange', 'pineapple', 'strawberry', 'pear']

 function biggestInList (fruktlistan) {
     let biggest = fruktlistan[0]
     for (i=0;i<fruktlistan.length;i++){
             if (biggest<fruktlistan[i]){
             biggest = fruktlistan[i]
         }
     }
     console.log(biggest)
     console.log(fruktlistan.sort(function(ettan, tvaan){return tvaan.length-ettan.length}))
 }

 biggestInList(min_first_list)

// Skriv ett program som frågar användaren om sitt namn
//  och hälsar henne med sitt namn.

function greetMe() {
    let namn = document.getElementById('username').value

    if (namn=='Alice' || namn=="Bob") {
        document.getElementById('greeting').innerHTML = 'Hej ' + namn
    }
    else {
        document.getElementById('greeting').innerHTML = 'Hej '
    }   
}
// Ändra det tidigare programmet så att endast 
//  användarna Alice och Bob hälsas med sina namn.

// Skriv en funktion som kontrollerar om ett element
// förekommer i en lista (true / false)

let min_list=['Peter', 'Kalle']

function hittaPerson() {

    let namn = document.getElementById('username').value

    for (i=0;i<min_list.length;i++){

        if (namn==min_list[i]){
            document.getElementById('person').innerHTML = `Namnet ${namn} finns i listan`
            return
        }
    }
}

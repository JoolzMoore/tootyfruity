var fs = require('fs')

function getGroceries () {
  buyFruit(eatFruit)
}

// function getAnimals () {
//   showAnimals(whatAnimal)
// }

function eatFruit (err, json) {
  if(!err) {
    var pairs = JSON.parse(json)
    for (i = 0; i < pairs.length; i++)
    console.log('fruit ' + pairs[i].fruit + ' animal ' + pairs[i].animal)
  } else {
    console.log(err.message)
  }
}
//
// function whatAnimal (err, json) {
//   if(!err) {
//     var animal = JSON.parse(json)
//     console.log('fruit eaters ' + fruit.animal)
//   } else {
//     console.log(err.message)
//   }
// }

function buyFruit (deliver) {
  fs.readFile('fruit.json', deliver)
}
// function showAnimals (aminals) {
//   fs.readFile('fruit.json', aminals)
// }

getGroceries()
// getAnimals()

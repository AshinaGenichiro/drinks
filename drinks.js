let drink = {
  name : "Napój Orzeźwiający",
  volume :  "500 ml",
  price : 3.20
};

console.log(drink);

let drinks = [
    {
        name : "Woda",
        volume :  "500 ml",
        price : 1.20
    },
    {
        name : "Cola",
            volume :  "500 ml",
        price : 3.20
    },
    {
        name : "Woda gazowana",
        volume :  "500 ml",
        price : 1.30
    }
]

console.log(`Tablica ma długosc: ${drinks.length} elementow`);

function giveInfoDrink(oneDrink){
    console.log(oneDrink);
}

giveInfoDrink(drink);

drinks.push(drink);

//console.log(drinks);

let newDrinks = drinks.slice();

newDrinks.pop();
console.log(`Długość starej tablicy = ${drinks.length}  Długosc nowej tablicy = ${newDrinks.length}`);

function givePriceDrinks(onePrice) {
    let sum = 0;
    for (let i = 0; i < newDrinks.length; i++){
        sum += newDrinks[i].price;
    }
    console.log(sum);
}
givePriceDrinks(newDrinks);
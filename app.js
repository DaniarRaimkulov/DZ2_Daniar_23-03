var Starbucks = {
    drinks: {
        coffee: {
            latte: "A latte is made with espresso and steamed milk",
            americano: "An Americano is made with espresso and hot water",
            cappuccino: "A cappuccino is made with espresso, steamed milk, and milk foam"
        },
        tea: {
            green: "Green tea is made from the leaves of Camellia sinensis",
            black: "Black tea is made from the leaves of Camellia sinensis and is fully fermented",
            chai: "Chai tea is a spiced tea made with black tea, milk, and spices"
        }
    }
}

var zakaz= prompt("Выберите напиток coffee: latte, americano, cappuccino. tea: green, black, chai")

if (zakaz in Starbucks.drinks.coffee || zakaz in Starbucks.drinks.tea){
    console.log(" Ваш заказ принят")
} else {
    console.log("У нас нет такого напитка")
}
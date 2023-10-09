const toppingChoices = [' Pepperoni', ' Broccoli', ' Extra Cheese', ' Sand', ' Flintstones Vitamins', ' Sausage', ' Banana Peppers', ' Grapes', ' Black Olives', ' Onions', ' Green Bell Peppers', ' Mushrooms', ' Rhubarb', ' Canadian Bacon', ' Garlic', ' Yogurt', ' Oregano']

function getToppings() {
    let toppings = [];
    let i=0;
    do{
        toppings.push(toppingChoices[Math.floor(Math.random()*toppingChoices.length)]);
        i++;
    }while (i<5);
    return toppings;
};

let randoResults = document.getElementById('rando-results');

let button = document.getElementById('button');

/*function turnBlue(){
    button.style.backgroundColor='blue'
};*/


button.onclick = function() {
    randoResults.innerHTML = getToppings()
};

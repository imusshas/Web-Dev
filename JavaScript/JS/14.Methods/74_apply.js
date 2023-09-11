function foodMenu(rice, drink) {
    console.log(this.fruit, this.fish, rice, drink);
}

const food = {
    fruit: "Mango",
    fish: "Tuna",
    menu: foodMenu
};

food.menu.apply(food);
food.menu.apply(food, ["Biriyani", "Water"]);
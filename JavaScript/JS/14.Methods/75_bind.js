function foodMenu(rice, drink) {
    console.log(this.fruit, this.fish, rice, drink);
}

const food = {
    fruit: "Mango",
    fish: "Tuna",
    menu: foodMenu
};

let func = food.menu.bind(food);
func();

func = food.menu.bind(food, "Biriyani", "Water");
func();
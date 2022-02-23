// Replces price tag with price tag for selected item
function CalculatePrice() {
    let price = document.getElementById("price");
    let selector = document.getElementById("FoodSelector");
    var selected = selector.value;
    var text = "";
    switch (selected) {
        case "Pizza":
            text = "Price: € 7.95";
            break;
        case "Sandwich":
            text = "Price: € 3.95";
            break;
        case "Salad":
            text = "Price: € 5.95"
            break;
        default:
            break;
    }
    price.innerHTML = text;
    console.log("Test = Done");
}
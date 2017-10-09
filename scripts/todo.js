var cartList = [0];
// where all your product goes
//cartList[0] always stores the amount of product in the cart

// when the user click the plus or minus button to change quantity
function quantity_change(button_id){
    if (button_id == "couch_minus" || button_id == "couch_plus") {
        var number_field = document.getElementById("couch_quantity");
        var quantity = parseInt(number_field.value);
        if (button_id == "couch_minus") {
            number_field.value = (quantity>0) ? quantity-1 :0;
        }
        if (button_id == "couch_plus") {
            number_field.value = quantity+1;
        }
    }
}

// when user add an item to the cart
function addToCart(button_id) {
    var new_product;
    if (button_id == "couch_add") {
        var quantity = parseInt(document.getElementById("couch_quantity").value);
        new_product = new Product("couch", 25, "square", quantity);
    }
    else if (button_id == "bed_add") {
        var quantity = parseInt(document.getElementById("bed_quantity").value);
        new_product = new Product("bed", 18, "square", quantity);
    }
    else if (button_id == "round_add") {
        var quantity = parseInt(document.getElementById("round_quantity").value);
        new_product = new Product("round", 15, "square", quantity);
    }
    else if (button_id == "floor_add") {
        var quantity = parseInt(document.getElementById("floor_quantity").value);
        new_product = new Product("floor", 25, "square", quantity);
    }

    // add product into cart
    var inCart = false;
    if (cartList[0] >= 1){
        for (i = 1; i < cartList.length; i++){
            var name = cartList[i].product_name;
            if (new_product.product_name == name ){
                cartList[i].quantity += 1;
                inCart = true;
            }
        }
    }
    if (inCart == false) {
        cartList.push(new_product);
    }
    cartList[0] += 1;

    //change the cart number
    var customer_cart = document.getElementById("cart");
    customer_cart.innerHTML = "Cart (" + cartList[0] + ")";

    // print in console for debugging
    console.log(cartList.length);
    for (i = 1; i < cartList.length; i++){
        console.log(cartList[i].product_name + cartList[i].quantity);
    }
}



//////////// the product object /////////////

function Product(product_name, price, product_shape, quantity) {
    this.product_name = product_name;
    this.price = price;
    this.product_shape = product_shape;
    this.quantity = quantity;
}
//Create array products
var products = [];

//Create array purchase
var purchase = [];

//Create function loadDataGrid to get information for the product catalog table
function loadDataGrid() {
    
    let dataList = document.getElementById("dataList");
    let amountProducts = document.getElementById("sumQuantityAllProducts");
    let amountPrices = document.getElementById("sumPriceAllProducts");

    amountProducts.append("Total Amount of Products: 0");
    amountPrices.append("Final Price: $0.00");

    products.forEach(function (element,i) {
        
        var listItem = document.createElement("section");
        listItem.classList.add("row");
        
        var name = document.createElement("div");
        name.classList.add("col-sm");
        name.innerHTML =  products[i].name;

        var price = document.createElement("div");
        price.classList.add("col-sm");
        price.id = "price"+i;
        price.innerHTML =  products[i].price;
        
        var quantity = document.createElement("div");
        quantity.classList.add("col-sm");
        quantity.innerHTML = 0;
        quantity.id = "quantity"+i;

        var sumPerProduct = document.createElement("div");
        sumPerProduct.classList.add("col-sm");
        sumPerProduct.id = "sumPerProduct"+i;
        sumPerProduct.innerHTML = "$";
        sumPerProduct.innerHTML += parseInt(quantity.innerHTML)*parseInt(price.innerHTML);

        var btnPlus = document.createElement("button");
        var btnText = document.createTextNode("+");
        btnPlus.appendChild(btnText);
        btnPlus.addEventListener("click", function() { 
            plusOne("quantity"+i);
            refreshSumPerProduct("sumPerProduct"+i, "quantity"+i, "price"+i );
            //sumPriceAllProducts("price"+i);
            //sumQuantityAllProducts("quantity"+i);
        });

        var btnMinus = document.createElement("button");
        var btnText = document.createTextNode("-");
        btnMinus.appendChild(btnText);
        btnMinus.addEventListener("click", function() { 
            minusOne("quantity"+i);
            refreshSumPerProduct("sumPerProduct"+i, "quantity"+i, "price"+i);
            //sumPriceAllProducts("price"+i);
            //sumQuantityAllProducts("quantity"+i);   
        });

        dataList.append(listItem);

        listItem.append(name);
        listItem.append('$', price, btnPlus, btnMinus);
        listItem.append(quantity);
        listItem.append(sumPerProduct);
       
    });


}

var clicks = 0;
//var i = 0;

//Function to add one on quantity column when + button is click
function plusOne(quantity) {
    console.log(quantity);
    var value = document.getElementById(quantity);
    value.innerHTML = parseInt(value.innerHTML) + 1;
};

//Function to rest one on quantity column when - button is click
function minusOne(quantity) {
    console.log(quantity);
    var value = document.getElementById(quantity);
    //If to make sure we do not reach negative numbers
    if (parseInt(value.innerHTML) > 0) {
        value.innerHTML = parseInt(value.innerHTML) - 1;
    }    
};

//Function to refresh column Sum per product when + or - buttons are click
function refreshSumPerProduct(sumPerProduct, quantity, price){
    var value2 = document.getElementById(sumPerProduct);
    var value3 = document.getElementById(quantity);
    var value4 = document.getElementById(price);
    value2.innerHTML = "$";
    value2.innerHTML += (parseFloat(value3.innerHTML)*parseFloat(value4.innerHTML)).toFixed(2);
}

 function sumPriceAllProducts(price){
//     let amountPrices = document.getElementById("sumPriceAllProducts");
//     var value6 = document.getElementById(price);
//     sumPrices = 0;
//     products.forEach(function (element,i) {
//         sumPrices = (parseFloat(sumPrices) + parseFloat(element.price)).toFixed(2);
//     });
//     amountPrices.innerHTML = "Final Price: $";
//     amountPrices.innerHTML += parseFloat(sumPrices).toFixed(2);

 }

 function sumQuantityAllProducts(quantity){
//     let amountProducts = document.getElementById("sumQuantityAllProducts");
//     var value6 = document.getElementById(quantity);
//     sumQuantity = 0;
//     products.forEach(function (element,i) {
//         sumQuantity = parseInt(sumQuantity) + parseInt(element.quantity);
//     });
//     amountProducts.innerHTML = "Total Amount of Products: ";
//     amountProducts.innerHTML += parseInt(sumQuantity);
 }
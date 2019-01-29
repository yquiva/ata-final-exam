//Create array products
var products = [];

//Create array purchase
var purchase = [];

//Create function loadDataGrid to get information for the product catalog table
function loadDataGrid() {
    
    let dataList = document.getElementById("dataList");
    
    products.forEach(function (element,i) {
        
        var listItem = document.createElement("section");
        listItem.classList.add("row");
        
        var name = document.createElement("div");
        name.classList.add("col-sm");
        name.innerHTML =  products[i].name;

        var price = document.createElement("div");
        price.classList.add("col-sm");
        price.innerHTML =  products[i].price;
        
        var quantity = document.createElement("div");
        quantity.classList.add("col-sm");
        quantity.innerHTML = 0;
        quantity.id = "quantity"+i;

        var btnPlus = document.createElement("button");
        var btnText = document.createTextNode("+");
        btnPlus.appendChild(btnText);
        btnPlus.addEventListener("click", function() { 
            plusOne("quantity"+i);
        });

        var btnMinus = document.createElement("button");
        var btnText = document.createTextNode("-");
        btnMinus.appendChild(btnText);
        btnMinus.addEventListener("click", function() { 
            minusOne("quantity"+i);
        });

        

        dataList.append(listItem);

        listItem.append(name);
        listItem.append('$', price, btnPlus, btnMinus);
        listItem.append(quantity)
           
    });


}

var clicks = 0;
//var i = 0;

function plusOne(quantity) {
    console.log(quantity);
    var value = document.getElementById(quantity);
    value.innerHTML = parseInt(value.innerHTML) + 1;
};

function minusOne(quantity) {
    console.log(quantity);
    var value = document.getElementById(quantity);
    value.innerHTML = parseInt(value.innerHTML) - 1;    
};

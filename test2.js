// html elements
const briefcaseQ = document.getElementById("briefcaseQ");
const caneQ = document.getElementById("caneQ");
const cameraQ = document.getElementById("cameraQ");
const diceQ = document.getElementById("diceQ");
const capQ = document.getElementById("capQ");
const bulbQ = document.getElementById("bulbQ");
const price = document.getElementById("price");

const submitEl = document.getElementById("submit");
const boughtList = document.getElementById("bought");

const itemsObj = [
  {
    price: 5,
    howMany: function() {
      this.quantity = briefcaseQ.value;
    },
    name: "briefcase",
    quantity: 0,
    class: "fas fa-briefcase"
  },
  {
    price: 0.5,
    howMany: function() {
      this.quantity = caneQ.value;
    },
    name: "cane",
    quantity: 0,
    class: "fas fa-candy-cane"
  },
  {
    price: 10,
    howMany: function() {
      this.quantity = cameraQ.value;
    },
    name: "camera",
    quantity: 0,
    class: "fas fa-camera-retro"
  },
  {
    price: 1,
    howMany: function() {
      this.quantity = diceQ.value;
    },
    name: "dice",
    quantity: 0,
    class: "fas fa-dice"
  },
  {
    price: 3,
    howMany: function() {
      this.quantity = capQ.value;
    },
    name: "cap",
    quantity: 0,
    class: "fas fa-graduation-cap"
  },
  {
    price: 2,
    howMany: function() {
      this.quantity = bulbQ.value;
    },
    name: "bulb",
    quantity: 0,
    class: "fas fa-lightbulb"
  }
];
// console.log(itemsObj);

// item arrays
const itemsAr = itemsObj.map(function(product) {
  return product;
});

let displayAr = [];
// console.log(itemsAr);

// function to add to cart
function addToCart() {
  let cartAr = [];
  for (let i = 0; i < itemsAr.length; i++) {
    itemsAr[i].howMany();
    if (itemsAr[i].quantity > 0) {
      cartAr.push(itemsAr[i]);
      cartAr = Array.from(new Set(cartAr));
    }
  }
  return cartAr;
}

const determine = () => {
  boughtList.innerHTML = "";
  cartAr = Array.from(addToCart());

  cartAr.forEach(function(element) {
    const newImg = document.createElement("i");
    const newLi = document.createElement("li");
    const newDescription = document.createElement("p");

    const deleteElement = document.createElement("button");
    deleteElement.setAttribute("class", "cross");

    deleteElement.addEventListener("click", function() {
      deleteElement.parentNode.parentNode.removeChild(deleteElement.parentNode);
    });

    newImg.setAttribute("class", element.class);
    newLi.append(
      newImg,
      (newDescription.innerHTML = "Quantity: " + element.quantity),
      deleteElement
    );
    boughtList.append(newLi);
  });

  let toPay = 0;
  cartAr.forEach(el => {
    let mult = el.price * el.quantity;
    toPay += mult;
  });
  price.innerHTML = "£" + parseInt(toPay);
};

submitEl.addEventListener("click", determine);

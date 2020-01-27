// html elements
const briefcaseQ = document.getElementById("briefcaseQ");
const caneQ = document.getElementById("caneQ");
const cameraQ = document.getElementById("cameraQ");
const diceQ = document.getElementById("diceQ");
const capQ = document.getElementById("capQ");
const bulbQ = document.getElementById("bulbQ");
// const refresh = document.getElementById("refresh");
const price = document.getElementById("price");

const submitEl = document.getElementById("submit");
// const clear = document.getElementById("clear");

const itemsObj = [
  {
    price: 5,
    valueOf: function() {
      this.quantity = briefcaseQ.value;
    },
    name: "briefcase",
    quantity: 0
  },
  {
    price: 0.5,
    valueOf: function() {
      this.quantity = caneQ.value;
    },
    name: "cane",
    quantity: 0
  },
  {
    price: 10,
    valueOf: function() {
      this.quantity = cameraQ.value;
    },
    name: "camera",
    quantity: 0
  },
  {
    price: 1,
    valueOf: function() {
      this.quantity = diceQ.value;
    },
    name: "dice",
    quantity: 0
  },
  {
    price: 3,
    valueOf: function() {
      this.quantity = capQ.value;
    },
    name: "cap",
    quantity: 0
  },
  {
    price: 2,
    valueOf: function() {
      this.quantity = bulbQ.value;
    },
    name: "bulb",
    quantity: 0
  }
];
// console.log(itemsObj);

// item arrays
const itemsAr = itemsObj.map(function(product) {
  return product;
});
const cartAr = [];

// console.log(itemsAr);

// function to add to cart
submitEl.onclick = function addToCart() {
  for (let i = 0; i < itemsAr.length; i++) {
    itemsAr[i].valueOf();
    if (itemsAr[i].quantity > 0) {
      cartAr.push(itemsAr[i]);
      // console.log(unique);
    }
  }

  //   display in cart
  for (let i = 0; i < cartAr.length; i++) {
    const newLi = document.createElement("li");
    const description = document.createElement("p");
    // const deleteEl = document.createElement("button");
    // const unique = cartAr.filter(element => element === element);
    // console.log(unique);

    if (cartAr[i].name === "briefcase") {
      const addImg = document.createElement("i");
      addImg.classList.add("fas");
      addImg.classList.add("fa-briefcase");
      description.innerText = "Quantity: " + itemsObj[0].quantity;
      newLi.append(addImg);
      bought.append(newLi);
      bought.append(description);
      //   bought.append(deleteEl);
    }
    if (cartAr[i].name === "cane") {
      const addImg = document.createElement("i");
      addImg.classList.add("fas");
      addImg.classList.add("fa-candy-cane");
      description.innerText = "Quantity: " + itemsObj[1].quantity;

      newLi.append(addImg);
      bought.append(newLi);
      bought.append(description);
      //   bought.append(deleteEl);
    }
    if (cartAr[i].name === "camera") {
      const addImg = document.createElement("i");
      addImg.classList.add("fas");
      addImg.classList.add("fa-camera-retro");
      description.innerText = "Quantity: " + itemsObj[2].quantity;

      newLi.append(addImg);
      bought.append(newLi);
      bought.append(description);
      //   bought.append(deleteEl);
    }
    if (cartAr[i].name === "dice") {
      const addImg = document.createElement("i");
      addImg.classList.add("fas");
      addImg.classList.add("fa-dice");
      description.innerText = "Quantity: " + itemsObj[3].quantity;

      newLi.append(addImg);
      bought.append(newLi);
      bought.append(description);
      //   bought.append(deleteEl);
    }
    if (cartAr[i].name === "cap") {
      const addImg = document.createElement("i");
      addImg.classList.add("fas");
      addImg.classList.add("fa-graduation-cap");
      description.innerText = "Quantity: " + itemsObj[4].quantity;

      newLi.append(addImg);
      bought.append(newLi);
      bought.append(description);
      //   bought.append(deleteEl);
    }
    if (cartAr[i].name === "bulb") {
      const addImg = document.createElement("i");
      addImg.classList.add("fas");
      addImg.classList.add("fa-lightbulb");
      description.innerText = "Quantity: " + itemsObj[5].quantity;

      newLi.append(addImg);
      bought.append(newLi);
      bought.append(description);

      deleteEl.setAttribute("id", "deleteBulb");
      //   bought.append(deleteEl);
    }

    price.innerHTML = +price.innerHTML + cartAr[i].price * cartAr[i].quantity;
  }
};

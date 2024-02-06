// Step 1 - Welcome and introduction
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
);

const userName = prompt(`Please enter your name:`);
alert(`Nice to meet you, ${userName}!`);

// Step 2 - Food choice
// Ask the user to choose a type of food
const foodSelection = prompt(`
  What type of food would you like to order?
  Enter a number:
  1: Pizza 🍕
  2: Pasta 🍝
  3: Salad 🥗
 `);

// Initialize a variable to store the selected food
let foodSelected = "";

// Determine the type of food based on the user's choice
if (foodSelection === "1") {
  foodSelected = "Pizza";
} else if (foodSelection === "2") {
  foodSelected = "Pasta";
} else if (foodSelection === "3") {
  foodSelected = "Salad";
} else {
  alert(`Invalid choice. Please select a number between 1 and 3.`);
  exit(1);
}

// Display the selected food
alert(`You´ve chosen ${foodSelected}!`);

// Step 3 - Subtype choice
// Ask the user to select a subtype of food based on the chosen food.
let foodTypeSelection = "";
let foodTypeNames = [];

switch (foodSelected) {
  case "Pizza":
    foodTypeSelection = prompt(
      `What type of pizza would you like to order?
        Enter a number:
        1: Napolitana 🌿
        2: Hawaiian 🍍
        3: Pepperoni 🌶️`
    );
    foodTypeNames = ["Napolitana", "Hawaiian", "Pepperoni"];
    break;

  case "Pasta":
    foodTypeSelection = prompt(
      `What type of pasta would you like to order?
        Enter a number:
        1: Spaghetti Carbonara 🌿
        2: Fettuccine Alfredo 🇮🇹
        3: Cheesy Tortellini  🧀`
    );
    foodTypeNames = [
      "Spaghetti Carbonara",
      "Fettuccine Alfredo",
      "Cheesy Tortellini",
    ];
    break;

  case "Salad":
    foodTypeSelection = prompt(
      `What type of salad would you like to order?
      Enter a number:
      1: Ceaser Salad 🥬
      2: Carprese Salad 🍅
      3: Greek Salad 🇬🇷 `
    );
    foodTypeNames = ["Ceaser", "Carprese", "Greek"];
    break;

  default:
    alert(`Invalid ${foodSelected} type choice.`);
    exit(1);
}
// Save all user data in a variable
let userData = [];

// Determine the type of foodType based on the user's choice
if (foodSelected === "Pizza") {
  userData.push(foodTypeNames[0], foodSelected);
  alert(`You've chosen ${foodTypeNames[0]} pizza!`);
} else if (foodSelected === "Pasta") {
  userData.push(foodTypeNames[1], foodSelected);
  alert(`You've chosen ${foodTypeNames[1]} pasta!`);
} else if (foodSelected === "Salad") {
  userData.push(foodTypeNames[2], foodSelected);
  alert(`You've chosen ${foodTypeNames[2]} salad!`);
} else {
  alert(`Invalid choice. Please select a number between 1 and 3.`);
  exit(1);
}

// Step 4 - Age
// Check if the user is adult or child
let userAge = prompt("Is this food for a child or an adult? Type your age:");

if (userAge <= 16) {
  userData.push("child", 10);
} else if (userAge >= 16) {
  userData.push("adult", 15);
} else {
  alert(`Invalid age choice. Please type a number`);
  exit(1);
}

// Step 5 - Order confirmation
// Ask the user to confirm the order
const orderConfirmation = prompt(`
  One ${userData[2]} sized ${userData[0]} ${userData[1]} will be prepared for you. 
  That'll be €${userData[3]}. Are you sure you want to order this?
  Enter a number to confirm:
  1 - Yes
  2 - No
  `);

if (orderConfirmation === "1") {
  alert(
    `Thank you for your order! Your delicious meal will be prepared. See you soon! 👋🏼`
  );
} else if (orderConfirmation === "2") {
  alert(`No problem, come back and order anytime you want.`);
} else {
  alert(`Invalid choice. Please select 1 for Yes or 2 for No.`);
  exit(1);
}

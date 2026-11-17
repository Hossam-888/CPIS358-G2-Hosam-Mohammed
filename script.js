

var pictureNumber = 0;

// HOME PAGE: change both the image and text when a button is clicked.
function changeOffer() {
    pictureNumber = pictureNumber + 1;
    if (pictureNumber % 2 == 1) {
        document.getElementById("offerPicture").src = "images/fast-food.png";
        document.getElementById("offerPicture").alt = "Fast food icon";
        document.getElementById("offerText").innerHTML =
            "Try our menu and choose your favorite food!";
        document.getElementById("offerText").style.color = "#d62300";
    } else {
        document.getElementById("offerPicture").src = "images/Burger-King-Logo.png";
        document.getElementById("offerPicture").alt = "Burger King logo";
        document.getElementById("offerText").innerHTML =
            "Welcome to Burger King! Explore our special offers.";
        document.getElementById("offerText").style.color = "#502314";
    }
}

// COMMON FUNCTION: show a message and change its CSS color.
function showResult(id, message, success) {
    document.getElementById(id).innerHTML = message;
    if (success == true) {
        document.getElementById(id).style.color = "green";
    } else {
        document.getElementById(id).style.color = "red";
    }
}

// LOGIN: check required username and password.
function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == "" || password == "") {
        showResult("loginResult", "Enter your username and password.", false);
    } else {
        showResult("loginResult", "Valid input.", true);
    }
    return false; // No PHP server is included in this assignment.
}

// SIGNUP: check fields, password length and matching passwords.
function validateSignup() {
    var fullName = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if (fullName == "" || email == "" || password == "" || confirmPassword == "") {
        showResult("signupResult", "Please complete all fields.", false);
    } else if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
        showResult("signupResult", "Enter a valid email address.", false);
    } else if (password.length < 8) {
        showResult("signupResult", "Password must have at least 8 characters.", false);
    } else if (password != confirmPassword) {
        showResult("signupResult", "Passwords do not match.", false);
    } else {
        showResult("signupResult", "Valid input.", true);
    }
    return false;
}

// MENU: validate quantity and use a for loop to count the items.
function validateMenu() {
    var food = document.getElementById("item").value;
    var orderType = document.getElementById("orderType").value;
    var quantity = document.getElementById("quantity").value;
    var foodName = "Chicken Sandwich";
    var symbols = "";
    var i;

    if (quantity == "" || quantity < 1 || quantity > 10 || quantity % 1 != 0) {
        showResult("menuResult", "Enter a whole number from 1 to 10.", false);
        return false;
    }

    if (food == "fries") {
        foodName = "Fries";
    } else if (food == "soft_drink") {
        foodName = "Soft Drink";
    }

    for (i = 1; i <= quantity; i++) {
        symbols = symbols + "* ";
    }
    showResult("menuResult", "Your selection: " + quantity + " x " + foodName +
        " (" + orderType + "). Items: " + symbols, true);
    return false;
}

// CHECKOUT: validate information without processing a real payment.
function validateCheckout() {
    var customer = document.getElementById("name").value;
    var address = document.getElementById("address").value;
    var payment = document.getElementById("paymentMethod").value;

    if (customer == "" || address == "") {
        showResult("checkoutResult", "Please enter your name and address.", false);
    } else if (payment != "cash" && payment != "card") {
        showResult("checkoutResult", "Please select a payment method.", false);
    } else {
        showResult("checkoutResult", "Information checked.", true);
    }
    return false;
}

// ABOUT US: show/hide information using the display CSS property.
function toggleInformation() {
    var info = document.getElementById("moreInformation");
    var button = document.getElementById("informationButton");
    if (info.style.display == "none") {
        info.style.display = "block";
        button.innerHTML = "Hide Information";
    } else {
        info.style.display = "none";
        button.innerHTML = "Show More Information";
    }
}

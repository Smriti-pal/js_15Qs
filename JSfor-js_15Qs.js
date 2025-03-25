// 1️⃣ Check if a Number is Positive, Negative, or Zero
function checkNumber() {
    let num = parseFloat(prompt("Enter a number:"));
    if (num > 0) {
        alert(num + " is a positive number.");
    } else if (num < 0) {
        alert(num + " is a negative number.");
    } else {
        alert("The number is zero.");
    }
}

// 2️⃣ Check Age Category
function checkAgeCategory() {
    let age = parseInt(prompt("Enter your age:"));
    if (age < 18) {
        alert("You are a Minor.");
    } else if (age >= 18 && age <= 60) {
        alert("You are an Adult.");
    } else {
        alert("You are a Senior Citizen.");
    }
}

// 3️⃣ Check if Character is Vowel or Consonant
function checkCharacter() {
    let char = prompt("Enter a character:").toLowerCase();
    if (char.length === 1 && /[a-z]/.test(char)) {
        if ("aeiou".includes(char)) {
            alert(char + " is a vowel.");
        } else {
            alert(char + " is a consonant.");
        }
    } else {
        alert("Please enter a valid single alphabet character.");
    }
}

// 4️⃣ Check if Number is Even or Odd
function checkEvenOdd() {
    let num = parseInt(prompt("Enter a number:"));
    if (num % 2 === 0) {
        alert(num + " is Even.");
    } else {
        alert(num + " is Odd.");
    }
}

// 5️⃣ Check if Year is a Leap Year or Not
function checkLeapYear() {
    let year = parseInt(prompt("Enter a year:"));
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        alert(year + " is a leap year.");
    } else {
        alert(year + " is not a leap year.");
    }
}

// 6️⃣ Return Larger of Two Numbers
function getLarger() {
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));
    alert("Larger number: " + (num1 > num2 ? num1 : num2));
}

// 7️⃣ String Length Check
function checkStringLength() {
    let str = prompt("Enter a string:");
    let result = str.length > 10 ? "Long String" : "Short String";
    alert("Result: " + result);
}

// 8️⃣ Maximum of Three Numbers
function getMax() {
    let num1 = parseFloat(prompt("Enter first number:"));
    let num2 = parseFloat(prompt("Enter second number:"));
    let num3 = parseFloat(prompt("Enter third number:"));
    alert("Maximum number: " + Math.max(num1, num2, num3));
}

// 9️⃣ Check Prime Number
function isPrime() {
    let num = parseInt(prompt("Enter a number:"));
    if (num <= 1) {
        alert(num + " is not a prime number.");
        return;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            alert(num + " is not a prime number.");
            return;
        }
    }
    alert(num + " is a prime number.");
}

// 🔟 Perform Arithmetic Operations
function calculate() {
    let num1 = parseFloat(prompt("Enter first number:"));
    let num2 = parseFloat(prompt("Enter second number:"));
    let operation = prompt("Enter operation (add, subtract, multiply, divide):");
    let result;
    switch (operation) {
        case "add":
            result = num1 + num2;
            break;
        case "subtract":
            result = num1 - num2;
            break;
        case "multiply":
            result = num1 * num2;
            break;
        case "divide":
            result = num2 !== 0 ? num1 / num2 : "Division by zero error";
            break;
        default:
            result = "Invalid operation";
    }
    alert("Result: " + result);
}

// 1️⃣1️⃣ Multiply a Number by 5
function multiplyByFive() {
    let num = parseFloat(prompt("Enter a number:"));
    let result = num * 5;
    alert("Result: " + result);
}

// 1️⃣2️⃣ Convert String to Uppercase or Lowercase Based on First Character
function convertStringCase() {
    let str = prompt("Enter a string:");
    if ("aeiouAEIOU".includes(str.charAt(0))) {
        alert(str.toUpperCase());
    } else {
        alert(str.toLowerCase());
    }
}

// 1️⃣3️⃣ Sum of Even Numbers in an Array
function sumEvenNumbers() {
    let input = prompt("Enter numbers separated by commas:");
    let arr = input.split(",").map(Number);
    let sum = 0;
    for (let num of arr) {
        if (num % 2 === 0) {
            sum += num;
        }
    }
    alert("Sum of even numbers: " + sum);
}

// 1️⃣4️⃣ Return Opposite of Boolean Value
function getOppositeBoolean() {
    let value = prompt("Enter true or false:").toLowerCase();
    if (value === "true") {
        alert("Opposite: false");
    } else if (value === "false") {
        alert("Opposite: true");
    } else {
        alert("Invalid input! Please enter true or false.");
    }
}

// 1️⃣5️⃣ Return Greeting with Name and Age
function greetUser() {
    let name = prompt("Enter your name:");
    let age = parseInt(prompt("Enter your age:"));
    alert(`Hello, ${name}! You are ${age} years old.`);
}

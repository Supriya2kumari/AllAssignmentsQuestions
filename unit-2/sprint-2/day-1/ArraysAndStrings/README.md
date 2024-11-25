# JavaScript Arrays

This repository contains examples and explanations of various array operations in JavaScript.

## Table of Contents
1. [Creating Arrays](#creating-arrays)
2. [Accessing Array Elements](#accessing-array-elements)
3. [Adding Elements](#adding-elements)
4. [Removing Elements](#removing-elements)
5. [Array Length](#array-length)
6. [Updating Array Values](#updating-array-values)
7. [Iterating over Arrays](#iterating-over-arrays)

---

## Creating Arrays

In JavaScript, you can create arrays using two common methods:

### 1. Using Array Literal

```javascript
let fruits = ["apple", "banana", "orange"];

### 1. Using Array Constructor Function

```javascript
let fruits = new Array("apple", "banana", "orange");

## Accessing Array Elements

Array elements are accessed using their index, with the first element at index 0.

```javascript
let fruits = ["apple", "banana", "orange"];
console.log(fruits[0]); 
console.log(fruits[1]); 
console.log(fruits[3]); 

## Adding Elements
You can add elements to an array using the following methods:

### 1. push(): Adds an element to the end of the array.

```javascript
let fruits = ["apple", "banana"];
fruits.push("orange");
console.log(fruits); 

### 2. unshift(): Adds an element to the beginning of the array.

```javascript
let fruits = ["banana", "orange"];
fruits.unshift("apple");
console.log(fruits); 

## Removing Elements
You can remove elements from an array using the following methods:

### 1. pop(): Removes the last element from the array.
```javascript
let fruits = ["apple", "banana", "orange"];
fruits.pop();
console.log(fruits); 

### 2. shift(): Removes the first element from the array.
javascript
Copy code

```javascript
let fruits = ["apple", "banana", "orange"];
fruits.shift();
console.log(fruits); 

## Array Length
You can get the length of an array using the length property.

```javascript
let fruits = ["apple", "banana", "orange"];
console.log(fruits.length); 

## Updating Array Values
You can update array elements by accessing them using their index.

```javascript
let fruits = ["apple", "banana", "orange"];
fruits[1] = "kiwi";
console.log(fruits); 

##  Iterating over Arrays
You can iterate through arrays using a for loop or a for...of loop.

### 1. Using for Loop
```javascript

let fruits = ["apple", "banana", "orange"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

### 2. Using for...of Loop
```javascript
let fruits = ["apple", "banana", "orange"];
for (let fruit of fruits) {
  console.log(fruit);
}

---

## Conclusion

Arrays are a powerful data structure in JavaScript that allows you to store and manipulate ordered collections of values. With various methods to add, remove, access, update, and iterate through elements, arrays are essential for working with data in JavaScript.

Happy coding! 🎉

let firstName = "David";
let lastName = 'Tucker';

let title = `VP Engineering`;
title = `CTO`;

let fullName = firstName + " " + lastName;

// String concatenation with template literals
fullName = `${firstName} ${lastName}`;
console.log(fullName);

// changing case
let uppecaseName = fullName.toUpperCase();
console.log(uppecaseName);
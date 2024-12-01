let isEligibleForDiscount = (age) => {
    (age <= 0) ? console.log("Invalid Age") 
    : (age >= 60) ? console.log(`Eligible for Sinior Discount`) 
    : console.log(`Not Eligible for Sinior Discount`);
}
isEligibleForDiscount(65);
isEligibleForDiscount(-1);
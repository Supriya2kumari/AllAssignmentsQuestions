function seniorCitizenDiscountEligibility(age){
    return (age <= 0) ? "Invalid Age" : (age >= 60) ? "Eligible for Senior Discount" : "Not Eligible for Senior Discount";
   
}

console.log(seniorCitizenDiscountEligibility(65));
console.log(seniorCitizenDiscountEligibility(-1));
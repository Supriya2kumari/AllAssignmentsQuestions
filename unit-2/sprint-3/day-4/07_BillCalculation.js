function totalBill(N) {
    let bill = 80; 
    if(N > 150){
      bill += 50*3 + 100*5 + (N-150)*10;
    } else if(N > 50){
      bill += 50*3 + (N-50)*5
    } else{
      bill += N*3;
    }
    console.log(bill);
}
totalBill(0);
totalBill(5);
totalBill(68);
totalBill(178);
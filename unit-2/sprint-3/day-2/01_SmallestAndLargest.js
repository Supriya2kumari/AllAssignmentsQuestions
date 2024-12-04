// Given array A and number of elements N, Find smallest and largest element from the array

function SmallestandLargest(N, A) {
    let smallest = A[0];
    let largest = A[0];
    
    for(let i = 1; i < N; i++){
      if(A[i] > largest){
        largest = A[i];
      }
      if(A[i] < smallest){
        smallest = A[i];
      }
    }
    console.log(smallest);
    console.log(largest);
}
SmallestandLargest(4, [5, 20, 7, 15]);
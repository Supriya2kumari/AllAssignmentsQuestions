/* 
    n = 1       n = 2           n = 3
    \/\/        \  /\  /        \    /\    /
                 \/  \/          \  /  \  /
                                  \/    \/
*/

function patternW(n){
    //loop for rows
    for(let i = 1; i <= n; i++){
        let temp = "";
        // logic for initial spaces
        for(let j = 1; j <= i-1; j++){
            temp += " ";
        }
        // printing or adding \
        temp += "\\";

        // first middle spaces (space in first v shape) logic
        for(let k = 1; k <= 2*(n-i); k++){
            temp += " ";
        }

        // Adding /
        temp += "/";

        // logic for second middle spaces (after first and before second v spaces) 
        for(let k = 1; k <= 2*(i-1); k++){
            temp += " ";
        }

        // Adding \
        temp += "\\";

        // logic for third middle spaces (inside 2nd v spaces)
        for(let k = 1; k <= 2*(n-i); k++){
            temp += " ";
        }

        // Adding /
        temp += "/";

        //Finally printing the result
        console.log(temp);
    }
}

patternW(3);
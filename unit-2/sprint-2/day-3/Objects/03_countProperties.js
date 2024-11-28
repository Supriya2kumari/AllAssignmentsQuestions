//Count number of keys in object

let ipl = {
    rcb : "Kohli",
    csk : "Msd",
    mi : "Rohit",
    lsg : "Pant",
    shr: "Cummins"
};
let count = 0;
for(let key in ipl){
    count++;
}
console.log(count);
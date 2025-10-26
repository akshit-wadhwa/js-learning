const mydate = new Date();

console.log(mydate);
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());
console.log(mydate.getMonth());
console.log(mydate.toLocaleString("default", {
    weekday: "long",
    day: "numeric"
}));

const myCreatedDate = new Date(2024, 5, 16);
console.log(myCreatedDate.toDateString());

const myDate2 = new Date(2024, 7, 15, 5, 18);
console.log(myDate2.toLocaleString());

const myDate3 = new Date("01-01-2024");
console.log(myDate3.toDateString());
console.log(myDate3.getTime());

const myTimestamp = Date.now();
console.log(myTimestamp);

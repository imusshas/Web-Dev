console.log("Script start");

setInterval(() => {
    let total = 0;
    for(let i = 0; i < 100_000_000; i++) {
        total += i;
    }
    console.log("Interval 500ms");
    console.log(total);
}, 500);

// for(let i = 0; i < 100; i++) {
//     console.log("...");
// }
console.log("Script end");
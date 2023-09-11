// const URL = "https://jsonplaceholder.typicode.com/postss";
const URL = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();

// console.log(xhr.readyState);
xhr.open("GET", URL);
// console.log(xhr.readyState);
// xhr.onreadystatechange = function() {
//     // console.log(xhr.readyState);
//     if(xhr.readyState === 4) {
//         // console.log(typeof xhr.response);
//         const response = xhr.response;
//         const data = JSON.parse(response);  // coverts JSON string to JS object
//         console.log(data);
//     }
// }

xhr.onload = function() {       // onload runs only when readystate is 4
    console.log(xhr.readyState);
    const response = xhr.response;
    const data = JSON.parse(response);  // coverts JSON string to JS object
    console.log(data);
}
xhr.send();

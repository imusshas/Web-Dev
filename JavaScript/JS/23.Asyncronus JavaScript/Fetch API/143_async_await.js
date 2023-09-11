// const URL = "https://jsonplaceholder.typicode.com/postss";
const URL = "https://jsonplaceholder.typicode.com/posts";

// fetch(URL)
//     .then( response => {
//         if(response.ok) {
//             return response.json();
//         } else {
//             throw new Error ("Something went wrong");
//         }
//     })
//     .then( data => {
//         console.log(data);
//     })
//     .catch( error => {
//         console.log("Inside catch");
//         console.log("Something went wrong");
//     });



// this function will always return a promise
async function getPosts() {     // getPosts = async() => {}
   const response = await fetch(URL);
   if(!response.ok) {
    throw new Error ("Something went wrong");
   }
//    console.log(response);
   const data = await response.json();
//    console.log(data);

   return data;
}

getPosts()
    .then( myData => {
        console.log(myData);
    })
    .catch( error => {
        console.log("Inside error");
        console.log(error);
    })

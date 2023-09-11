// const URL = "https://jsonplaceholder.typicode.com/postss";
const URL = "https://jsonplaceholder.typicode.com/posts";

// *** GET == reading resource
// fetch(URL)
    // .then( response => {
    //     if(response.ok) {
    //         return response.json();
    //     } else {
    //         throw new Error("Something went wrong");
    //     }
    // })
    // .then( data => {
    //     console.log(data);
    // })
    // .catch(error => {   // in fetch .catch works on only with network issue
    //     console.log("Inside catch");
    //     console.log(error);
    // });




// *** POST == creating resource
fetch(URL, {
    method: 'POST',
  body: JSON.stringify({    // converts JS object to JSON string
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
    .then( response => {
        if(response.ok) {
            return response.json();
        } else {
            throw new Error("Something went wrong");
        }
    })
    .then( data => {
        console.log(data);
    })
    .catch(error => {   // in fetch .catch works on only with network issue
        console.log("Inside catch");
        console.log(error);
    });


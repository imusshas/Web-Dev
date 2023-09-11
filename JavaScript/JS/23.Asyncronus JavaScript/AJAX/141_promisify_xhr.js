const URL = "https://jsonplaceholder.typicode.com/posts";

function sendRequest (method, url) {
    return new Promise( (resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);

        xhr.onload = () => {
            if(xhr.status >= 200 && xhr.status <=299) {
                resolve(xhr.response);
            } else {
                reject(new Error("Something went wrong!"));
            }
        };

        xhr.onerror = () => {
            console.log("Something went wrong!");
        }

        xhr.send();
    });
}

sendRequest("GET", URL)
    .then( response => {
        const data = JSON.parse(response);
        return data;
    })
    .then( data => {
        // console.log(data);
        const id = data[3].id;
        // console.log(id);
        return id;
    })
    .then( id => {
        const url = `${URL}/${id}`;
        // console.log(url);
        return sendRequest("GET", url);
    })
    .then( newResponse => {
        const newData = JSON.parse(newResponse);
        console.log(newData);
    })
    .catch( error => {
        console.log("Something went wrong");
    });
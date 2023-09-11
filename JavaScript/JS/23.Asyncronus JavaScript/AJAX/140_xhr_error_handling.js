const URL = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();
xhr.open("GET", URL);

xhr.onload = function() {
    if(xhr.status >= 200 && xhr.status <= 299) {
        const data = JSON.parse(xhr.response);
        // console.log(data);
        const id = data[3].id;

        const URL2 = `${URL}/${id}`;
        const xhr2 = new XMLHttpRequest();
        xhr2.open("GET", URL2);

        xhr2.onload = () => {
            const data2 = JSON.parse(xhr2.response);
            // console.log(data2);
        }

        xhr2.send();
    } else {
        console.log("Something went wrong!");
    }
}

xhr.send();

xhr.onerror = () => {   // onerror only runs on network issue
    console.log("Network issue");
}
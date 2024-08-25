function getpost(userId) {
    let request = new XMLHttpRequest();
    request.open("GET", "https://jsonplaceholder.typicode.com/posts?userId=" + userId, true);
    request.responseType = "json";
    request.send();
    
    request.onload = function() {
        if (request.status >= 200 && request.status < 300) {
            let posts = request.response;

            document.getElementById("massege").innerHTML = "";
            for (let post of posts) {
                let content = `
                  <h3 id="post" style="font-size: 22px;">${post.title} <br><span style="font-size: 18px;">${post.body}</span></h3>
                `;
                document.getElementById("massege").innerHTML += content;
            }
        } else {
            alert("Error: " + request.status + " " + request.statusText);
        }
    };
    
    request.onerror = function() {
        alert("Network Error");
    };
}

function getuser() {
    let request = new XMLHttpRequest();
    request.open("GET", "https://jsonplaceholder.typicode.com/users", true);
    request.responseType = "json";
    request.send();
    
    request.onload = function() {
        if (request.status >= 200 && request.status < 300) {
            let users = request.response;

            document.getElementById("users").innerHTML = "";
            for (let user of users) {
                let content = `<h3 id="huss" onclick="userClicked(${user.id}, this)" style="font-size: 22px;">${user.name} <br><span style="font-size: 18px;">${user.email}</span></h3>`;
                document.getElementById("users").innerHTML += content;
            }
        } else {
            alert("Error: " + request.status + " " + request.statusText);
        }
    };
    
    request.onerror = function() {
        alert("Network Error");
    };
}

function userClicked(id, ele) {
    getpost(id);
    
    let selectedElements = document.getElementsByClassName("select");
    for (let element of selectedElements) {
        element.classList.remove("select");
    }
    
    ele.classList.add("select");
}

// Initialize by fetching the users and posts of the first user
getuser();

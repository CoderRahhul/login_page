function login(){
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();


    if(username === "Rahul08" && password === "Rahul620#"){
            alert("login successful");}
    else {
        alert("Invalid username and password");
    }    
}
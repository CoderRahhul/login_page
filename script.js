function login(){
    const username = document.getElementById("username").value.trim();
    const passsword = document.getElementById("password").value.trim();


    if(username === "Rahul08" && passsword === "Rahul620#"){
            alert("login successful");}
    else {
        alert("Invaild username and password");
    }    
}
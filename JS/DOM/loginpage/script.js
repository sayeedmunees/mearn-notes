function login(){
    // get values
    const username=usernameInput.value
    const password=passwordInput.value

    // console.log(username);
    //store in local storage
    localStorage.setItem("username",username)

    //redirect to dashboard page
    window.location="dashboard.html"
}
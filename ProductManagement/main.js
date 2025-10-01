

function loadhomePage(){
    var root = document.getElementById("root")
    root.innerHTML = homeComponent()
}




function handleLogin(event){
    event.preventDefault()
    const formdata = new FormData(event.target)
    fetch("https://dummyjson.com/user/login",{
        headers : { 'Content-Type': 'application/json' },
        method:"POST",
        body:JSON.stringify({
            username : formdata.get("username"),
            password : formdata.get("password")
        })
    })
    .then(res=>(res.json()))
    .then((user)=>{
        if(user.accessToken){
            loadhomePage()
        }
    })
}



function homeComponent(){
    return ` 
    <div class="container">
        <div class="row" style="height: 100vh;">
            <div class="col">
                <nav class="navbar navbar-expand-lg">
                    <h4 class="nav-brand">Myshop</h4>
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link">Categories</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link">Cart</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link">My Account</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>`
}
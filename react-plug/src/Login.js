function Login(){
    return (
        <form className="LoginContainer" noValidate >

            <div>UserName</div>
            <div><input type="text" #loginname placeholder="Enter username"  /> </div>
            
            <div>Password</div>
            <div><input type="password" #loginpwd placeholder="Enter Password"  /> </div>
            
            <div>
                <input type="Submit" value="Login"></input>
            </div>
        </form>
    );
}

export default Login;
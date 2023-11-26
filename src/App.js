import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="loginContainer">
        <h1>Login</h1>

        <div className="input-container">
          <label>Username </label>
          <input type="text" placeholder="Username " required />
        </div>

        <div className="input-container">
          <label>Password </label>
          <input type="password" placeholder="Password" required />
        </div>

        <center><a href="#">Forgot password?</a></center>
        <button className="loginBut">
          <p>Login</p>
        </button>
        <center><a>Don't have an account?</a><a href="#">Signup</a></center>
        <center><a>____________or_____________</a></center>

        <button className="google">
          <img
            src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
            alt="Trees"
            height="30"
          />
          <p>Login with Google</p>
        </button>

        <button className="fbk">
          <img
          src=" https://sguru.org/wp-content/uploads/2018/02/facebook-clipart-png-12.png"
          alt= "Platform"
          height="30"
          /> 

          <p>Login with Facebook</p>
          </button>
        
      </div>
    </div>
  );
}

export default App;
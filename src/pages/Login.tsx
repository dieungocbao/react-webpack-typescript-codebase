import '@Styles/LoginPage.css'
import ClickCounter from '@Components/ClickCounter'

const Login = () => {
  return (
    <div className="login-page fadeInDown">
      <ClickCounter />
      <div className="formContent">
        {/* Tabs Titles */}
        <h2 className="active"> Sign In </h2>
        <h2 className="inactive underlineHover">Sign Up </h2>
        {/* Icon */}
        <div className="fadeIn first">
          <img src="http://danielzawadzki.com/codepen/01/icon.svg" id="icon" alt="User Icon" />
        </div>
        {/* Login Form */}
        <form>
          <input type="text" id="login" className="fadeIn second" name="login" placeholder="login" />
          <input type="text" id="password" className="fadeIn third" name="login" placeholder="password" />
          <input type="submit" className="fadeIn fourth" defaultValue="Log In" />
        </form>
        {/* Remind Passowrd */}
        <div className="formFooter">
          <a className="underlineHover" href="/">
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  )
}

export default Login

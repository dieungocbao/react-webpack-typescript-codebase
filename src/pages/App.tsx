import LOGO from '../asset/resource/images/reactjs-logo.jpg'
import STICKER from '../asset//resource/images/happy-new-year.svg'
import ClickCounter from '../components/ClickCounter'

import '../styles/styles.css'

const App = () => {
  return (
    <div>
      <h1>
        React Typescript Webpack Starter Templale - {process.env.NODE_ENV}{' '}
        {process.env.name}
      </h1>
      <img src={LOGO} alt="react-logo" width="300" height="200" />
      <img src={STICKER} alt="sticker" width="300" height="200" />
      <ClickCounter />
    </div>
  )
}

export default App

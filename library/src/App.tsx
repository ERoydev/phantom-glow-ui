import {  YellowButton} from "./components/Button"

function App() {

  const handleClick = () => {
    console.log('clicked')
  }

  return (
    <div className="py-10 px-10">
      <YellowButton label='Get Started' onClick={handleClick} />

    </div>
  )
}

export default App

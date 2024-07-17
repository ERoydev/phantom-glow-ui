import { MidnightButton, SuccessButton } from "./components/Button"

function App() {

  const handleClick = () => {
    console.log('clicked')
  }

  return (
    <div className="py-10 px-10">
      <MidnightButton label="Get Started" onClick={handleClick} variant="solid" rounded />
      <SuccessButton label="Get Started" onClick={handleClick} variant="solid" rounded />

    </div>
  )
}

export default App

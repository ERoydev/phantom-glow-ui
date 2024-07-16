import { DangerButton, LightButton, PrimaryButton } from "./components/Button"

function App() {

  const handleClick = () => {
    console.log('clicked')
  }

  return (
    <>
      <PrimaryButton label='Emil' onClick={handleClick}/>
    </>
  )
}

export default App

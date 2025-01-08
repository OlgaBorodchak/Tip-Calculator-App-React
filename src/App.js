import { useState } from 'react'
import Logo from './components/Logo/Logo'
import InputSection from './components/InputSection/InputSection'
import OutputSection from './components/OutputSection/OutputSection'
import './App.css'

function App() {
  const [bill, setBill] = useState('')
  const [tipPercentage, setTipPercentage] = useState('')
  const [customTip, setCustomTip] = useState('')
  const [numberOfPeople, setNumberOfPeople] = useState('')

  const reset = () => {
    setBill('')
    setTipPercentage('')
    setCustomTip('')
    setNumberOfPeople('')
  }

  const isResetDisabled =
    !bill && !tipPercentage && !customTip && !numberOfPeople

  return (
    <>
      <Logo />
      <div className="App">
        <InputSection
          bill={bill}
          setBill={setBill}
          tipPercentage={tipPercentage}
          setTipPercentage={setTipPercentage}
          customTip={customTip}
          setCustomTip={setCustomTip}
          numberOfPeople={numberOfPeople}
          setNumberOfPeople={setNumberOfPeople}
        />
        <OutputSection
          bill={bill}
          tipPercentage={tipPercentage}
          customTip={customTip}
          numberOfPeople={numberOfPeople}
          onReset={reset}
          isResetDisabled={isResetDisabled}
        />
      </div>
    </>
  )
}

export default App

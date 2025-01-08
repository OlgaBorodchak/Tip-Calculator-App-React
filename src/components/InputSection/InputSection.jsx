import BillInput from '../BillInput/BillInput'
import TipSelector from '../TipSelector/TipSelector'
import PeopleInput from '../PeopleInput/PeopleInput'
import styles from './InputSection.module.css'

function InputSection({
  bill,
  setBill,
  tipPercentage,
  setTipPercentage,
  customTip,
  setCustomTip,
  numberOfPeople,
  setNumberOfPeople,
}) {
  return (
    <div className={styles.inputSection}>
      <BillInput value={bill} setValue={setBill} />
      <TipSelector
        tipPercentage={tipPercentage}
        setTipPercentage={setTipPercentage}
        customTip={customTip}
        setCustomTip={setCustomTip}
      />
      <PeopleInput value={numberOfPeople} setValue={setNumberOfPeople} />
    </div>
  )
}

export default InputSection

import Results from '../Result/Results'
import ResetBtn from '../ResetBtn/ResetBtn'
import styles from './OutputSection.module.css'

function OutputSection({
  bill,
  tipPercentage,
  customTip,
  numberOfPeople,
  onReset,
  isResetDisabled,
}) {
  return (
    <div className={styles.outputSection}>
      <Results
        bill={bill}
        tipPercentage={tipPercentage}
        customTip={customTip}
        numberOfPeople={numberOfPeople}
      />
      <ResetBtn onReset={onReset} disabled={isResetDisabled} />
    </div>
  )
}

export default OutputSection

import calculateTip from '../../utils/calculateTip'
import styles from '../Result/Results.module.css'

function Results({ bill, tipPercentage, customTip, numberOfPeople }) {
  const { tipPerPerson, totalPerPerson } = calculateTip(
    Number(bill),
    Number(tipPercentage),
    Number(customTip),
    Number(numberOfPeople)
  )

  return (
    <>
      <div className={styles.outputContainer}>
        <div className={styles.titleContainer}>
          <p className={styles.outputTitle}>Tip Amount</p>
          <span className={styles.outputSubtitle}> / person</span>
        </div>
        <span className={styles.outputAmount}>${tipPerPerson.toFixed(2)}</span>
      </div>
      <div className={styles.outputContainer}>
        <div className={styles.titleContainer}>
          <p className={styles.outputTitle}>Total</p>
          <span className={styles.outputSubtitle}>/ person</span>
        </div>
        <span className={styles.outputAmount}>${totalPerPerson.toFixed(2)}</span>
      </div>
    </>
  )
}

export default Results

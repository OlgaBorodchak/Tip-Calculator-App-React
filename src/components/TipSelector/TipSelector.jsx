import styles from '../TipSelector/TipSelector.module.css'
import sharedStyles from '../../shared/shared.module.css'

function TipSelector({
  tipPercentage,
  setTipPercentage,
  customTip,
  setCustomTip,
}) {
  const tipOptions = [0, 10, 15, 25, 50]

  const handleCustomTipChange = (e) => {
    const input = e.target.value
    setCustomTip(input === '' ? '' : Number(input))
    setTipPercentage('')
  }
  
  return (
    <>
      <label className={sharedStyles.label} htmlFor="tip-input">
        Select Tip %
      </label>
      <div className={styles.tipButtonsContainer}>
        {tipOptions.map((tip) => (
          <button
            className={`${styles.tipButton} ${tipPercentage === tip ? 'active' : ''}`}
            key={tip}
            type="button"
            onClick={() => {
              setTipPercentage(tip)
              setCustomTip('')
            }}
          >
            {tip === 0 ? 'No Tip' : `${tip}%`}
          </button>
        ))}
        <input
          className={`${sharedStyles.customInputField} ${sharedStyles.customCaret}`}
          id="tip-input"
          type="number"
          placeholder="Custom"
          value={customTip}
          onChange={handleCustomTipChange}
          min="0"
          max="100"
        />
      </div>
    </>
  )
}

export default TipSelector

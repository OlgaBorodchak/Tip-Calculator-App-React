import styles from '../BillInput/BillInput.module.css'
import sharedStyles from '../../shared/shared.module.css'

function BillInput({ value, setValue }) {
  return (
    <>
      <label className={sharedStyles.label} htmlFor="billAmount">
        Bill
      </label>
      <input
        className={`${sharedStyles.inputField} ${sharedStyles.customCaret} ${styles.inputFieldIcon}`}
        id="billAmount"
        type="number"
        placeholder="0"
        value={value}
        onChange={(e) => {
          const input = e.target.value
          setValue(input === '' ? '' : Number(input) || '')
        }}
      />
    </>
  )
}

export default BillInput

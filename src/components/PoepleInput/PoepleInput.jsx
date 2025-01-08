import styles from './PeopleInput.module.css'
import sharedStyles from '../../shared/shared.module.css'

function PeopleInput({ value, setValue }) {
  const hasError = value === 0

  return (
    <div className={styles.peopleInputContainer}>
      <label className={sharedStyles.label} htmlFor="numberOfPeople">
        Number of People
      </label>
      <input
        className={`${sharedStyles.inputField} ${sharedStyles.customCaret} ${styles.inputFieldIcon} 
                  ${hasError ? 'input-field-error' : ''}`}
        id="numberOfPeople"
        type="number"
        placeholder="0"
        value={value}
        onChange={(e) => {
          const input = e.target.value
          setValue(input === '' ? '' : Number(input))
        }}
      />
      {hasError && <span className="error-message">{`Can't be zero`}</span>}
    </div>
  )
}

export default PeopleInput

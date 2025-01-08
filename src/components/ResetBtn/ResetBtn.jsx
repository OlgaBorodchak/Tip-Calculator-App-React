import styles from './ResetBtn.module.css'

function ResetBtn({ onReset, disabled }) {
  return (
    <button
      className={styles.resetButton}
      onClick={onReset}
      disabled={disabled}
      aria-label="Reset all inputs"
    >
      RESET
    </button>
  )
}

export default ResetBtn

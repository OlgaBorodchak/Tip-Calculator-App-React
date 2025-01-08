import LogoImg from '../../assets/logo.svg'
import style from '../Logo/Logo.module.css'

function Logo() {
  return (
    <div className={style.logoContainer}>
      <img src={LogoImg} alt="Splitter Logo" className={style.logoImg} />
    </div>
  )
}

export default Logo

import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

import styles from './styles.module.scss';

export function SignInButton() {
  const isUserLoggedIn = false;

  return isUserLoggedIn ? (
    <button className={styles.signInButton} type="button">
      <FaGithub color='#04d361'/>
      Emanuele Correa
      <FiX  color='#737380' className={styles.coloseIcon}/>
    </button>
  ) : (
    <button className={styles.signInButton} type="button">
      <FaGithub color='#eba417' />
      Sign in with Github
    </button>
  )
}
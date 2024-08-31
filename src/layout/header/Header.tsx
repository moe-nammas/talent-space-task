import styles from './styles.module.scss';
import Navigations from './Navigations';
import { ReactComponent as Logo } from '../../icons/header/Logo.svg';
import UserCard from './UserCard';

const Header = () => {
  return (
    <div className={styles['header-container']}>
      <div className={styles['left-side']}>
        <Logo />
        <Navigations />
      </div>
      <UserCard />
    </div>
  );
};

export default Header;

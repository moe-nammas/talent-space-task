import { ReactComponent as Avatar } from '../../assets/Avatar.svg';
import { ReactComponent as Lightning } from '../../icons/header/lightning.svg';
import { ReactComponent as CaretDown } from '../../icons/header/caretDown.svg';
import styles from './styles.module.scss';

const UserCard = () => {
  return (
    <div className={styles['user-card-container']}>
      <Avatar />
      <div className={styles['user-info-container']}>
        <span>Mohannad Alsouqi</span>
        <div className={styles['score-container']}>
          <Lightning />
          <span>5000</span>
        </div>
      </div>
      <CaretDown />
    </div>
  );
};

export default UserCard;

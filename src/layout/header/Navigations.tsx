import { INavigationItem } from '@interfaces/types';
import { ReactComponent as BriefCaseIcon } from '../../icons/header/briefcase.svg';
import { ReactComponent as User } from '../../icons/header/user-square.svg';
import { NavLink } from 'react-router-dom';
import styles from './styles.module.scss';

const Navigations = () => {
  const _navigations: INavigationItem[] = [
    {
      name: 'Jobs',
      icon: <BriefCaseIcon />,
      url: '/',
    },
    {
      name: 'Talent Pool',
      icon: <User />,
      url: '/talent-pool',
    },
  ];

  return (
    <div className={styles['nav-container']}>
      {_navigations.map((nav) => (
        <NavLink
          key={nav.name}
          to={nav.url}
          className={styles['nav-item']}
          style={({ isActive }) => {
            return {
              filter: isActive ? 'brightness(100%)' : '',
            };
          }}
        >
          {nav.icon}
          <span> {nav.name}</span>
        </NavLink>
      ))}
    </div>
  );
};

export default Navigations;

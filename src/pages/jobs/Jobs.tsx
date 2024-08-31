import { ITableProps } from '@interfaces/types';
import Table from '../../components/shared/table/Table';
import Badge from '../../components/shared/badge/Badge';
import styles from './styles.module.scss';
import { COUNTRIES } from '../../icons/flags';
import { ReactComponent as User } from '../../icons/shared/user.svg';
import { ReactComponent as Edit } from '../../icons/shared/edit.svg';
import { ReactComponent as Trash } from '../../icons/shared/trash.svg';

export interface IJobsListing {
  job: string;
  countries: string[];
  candidates: number;
  status: string;
  type: string;
  experienceLevel: string;
  location: string;
}

const Jobs = () => {
  const tableData: IJobsListing[] = [
    {
      job: 'UI/UX Designer',
      countries: ['jordan'],
      candidates: 6,
      status: 'active',
      type: 'full-time',
      experienceLevel: '1 - 2 years',
      location: 'hybrid',
    },
    {
      job: 'Computer Engineering',
      countries: ['jordan', 'saudi arabia'],
      candidates: 7,
      status: 'active',
      type: 'part-time',
      experienceLevel: '1 - 2 years',
      location: 'hybrid',
    },
    {
      job: 'Software Engineering',
      countries: ['jordan'],
      candidates: 6,
      status: 'active',
      type: 'part-time',
      experienceLevel: '2 - 3 years',
      location: 'hybrid',
    },
  ];

  const tableProps: ITableProps<IJobsListing> = {
    title: 'All jobs',
    addButtonText: 'Add job',
    onAddButtonClick: () => {},
    data: tableData,
    onRowClick(cell, index) {
      console.log(cell, index);
    },
    rows: [
      {
        dataKey: 'job',
        render(item) {
          return (
            <div className={styles['job-cell']}>
              <div>
                <span>{item.job}</span>
              </div>
              <div>
                <span>{item.type}</span>&nbsp;&nbsp;
                <span>{item.location}</span>&nbsp;&nbsp;
                <span>{item.experienceLevel}</span>
              </div>
            </div>
          );
        },
      },
      {
        dataKey: 'countries',
        render(row) {
          return (
            <div className={styles['countries-cell']}>
              {row.countries.map((country) => (
                <Badge key={country}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                    }}
                  >
                    {COUNTRIES[country]}
                    {country}
                  </div>
                </Badge>
              ))}
            </div>
          );
        },
      },
      {
        dataKey: 'candidates',
        render(row) {
          return (
            <div className='align-center'>
              <User />
              <span>{row.candidates}</span>
            </div>
          );
        },
      },
      {
        dataKey: 'status',
        render(item) {
          return <Badge text={item.status} variant='success' />;
        },
      },
    ],
    actionButtons: [
      {
        label: 'Edit',
        icon: <Edit />,
        disabled: () => {
          return true;
        },
        onClick(row, index) {
          console.log('row => ', row);
          console.log('index => ', index);
        },
      },
      {
        label: 'Delete',
        icon: <Trash />,
        variant: 'danger',
        disabled: () => {
          return true;
        },
        onClick(row, index) {
          console.log('row => ', row);
          console.log('index => ', index);
        },
      },
    ],
  };

  return (
    <div className='full-page-wrapper'>
      <Table {...tableProps} />
    </div>
  );
};

export default Jobs;

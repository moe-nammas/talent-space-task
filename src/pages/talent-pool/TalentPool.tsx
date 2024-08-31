import { ReactElement } from 'react';
import Table from '../../components/shared/table/Table';
import { ITableProps } from '@interfaces/types';
import { ReactComponent as Avatar } from '../../icons/talent-pool/Avatar.svg';
import { ReactComponent as Avatar2 } from '../../icons/talent-pool/Avatar2.svg';
import Badge from '../../components/shared/badge/Badge';

export interface ITalentPoolListing {
  name: string;
  job: string;
  image: ReactElement;
  experience: string;
  skills: string[];
}

const TalentPool = () => {
  const data = [
    {
      name: 'Sadeeq Mofeed',
      job: 'UI/UX Designer',
      image: <Avatar />,
      skills: ['Figma', 'Wireframing', 'Prototyping', 'user research'],
      experience: '1 - 2 years',
    },
    {
      name: 'Omar Farooq',
      job: 'Computer Engineer',
      image: <Avatar2 />,
      skills: ['architecture', 'CPU', 'Repairing', 'Autocad'],
      experience: 'fresh',
    },
  ];

  const tableProps: ITableProps<ITalentPoolListing> = {
    title: "Orange's Talent Pool",
    addButtonText: 'Add candidates',
    onAddButtonClick: () => {},
    data,
    rows: [
      {
        dataKey: 'name',
        label: 'profile',
        render(row) {
          return (
            <div className='align-center'>
              {row.image}
              <div className='align-col'>
                <span>{row.name}</span>
                <span className='text-secondary'>{row.job}</span>
              </div>
            </div>
          );
        },
      },
      {
        dataKey: 'experience',
      },
      {
        dataKey: 'skills',
        render(row) {
          return (
            <div className='align-center'>
              {row.skills.map((skill) => (
                <Badge key={skill}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                    }}
                  >
                    {skill}
                  </div>
                </Badge>
              ))}
            </div>
          );
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

export default TalentPool;

import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/Layout';
import Jobs from 'pages/jobs/Jobs';
import TalentPool from 'pages/talent-pool/TalentPool';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Jobs />,
      },
      {
        path: '/talent-pool',
        element: <TalentPool />,
      },
    ],
  },
]);

import { lazy } from 'react';
import { AppLayout } from 'layouts';
import { useSelector } from 'react-redux';
import { hasRequiredRole } from 'helpers';
import { Loadable, Page, PrivateRoute } from 'components';
import { Navigate, Routes, Route } from 'react-router-dom';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import {
  ContractTypeModel,
  MaterialTypeModel,
  OperationTypeModel,
  ShiftTypeModel,
  SiteTypeModel,
  TaskStatusModel,
  TasksTypeModel,
  WorkshopStatusModel,
  VehicleTypeModel,
  SiteModel,
  ContractModel,
  VehicleModel,
  UsersModel,
  UserStatusModel,
  WorkshopModel,
  TariffModel,
  TaskModel,
} from 'models';
import { FormattedMessage } from 'react-intl';

const NotFound = Loadable(lazy(() => import('screens/Authentication/Page404')));

const Management = Loadable(lazy(() => import('screens/SuperAdminRole/Management')));
const SuperAdminDashboard = Loadable(lazy(() => import('screens/SuperAdminRole/Dashboard')));

function Dashboard() {
  const { userInfo } = useSelector((state) => state.auth);
  // if (hasRequiredRole(['superadmin', 'operator'], userInfo?.roles)) {
  //   return <UnitAdminDashboard />;
  // }
  // if (hasRequiredRole(['superadmin', 'operator'], userInfo?.roles)) {
  //   return <SuperAdminDashboard />;
  // }
  return <SuperAdminDashboard />;
}

export const navConfig = [
  {
    path: '/',
    element: <Navigate to="/dashboard/managment" replace />,
  },
  {
    path: '/setting/app',
    url: '/setting/app',
    title: <FormattedMessage id="app" />,
    element: <Dashboard />,
    inSidebar: true,
    roles: ['superadmin'],
  },
  {
    path: '/dashboard',
    url: '/dashboard',
    title: 'dashboard',
    inSidebar: true,
    element: <AppLayout />,
    icon: <DashboardRoundedIcon fontSize="small" />,
    children: [
      {
        path: '/dashboard/managment',
        url: '/dashboard/managment',
        title: 'managment',
        element: (
          <Page title="Managment">
            <Management />
          </Page>
        ),
        inSidebar: true,
      },
      {
        path: '/dashboard/contracts',
        url: '/dashboard/contracts',
        title: 'contracts',
        element: (
          <Page title="Contracts">
            <ContractModel />
          </Page>
        ),
        inSidebar: true,
        roles: ['superadmin', 'companyAdmin'],
      },
      {
        path: '/dashboard/task',
        url: '/dashboard/task',
        title: 'tasks',
        element: (
          <Page title="Tasks">
            <TaskModel />
          </Page>
        ),
        inSidebar: true,
      },
      {
        path: '/dashboard/tarrif',
        url: '/dashboard/tarrif',
        title: 'tariffs',
        element: (
          <Page title="Tariffs">
            <TariffModel />
          </Page>
        ),
        inSidebar: true,
        roles: ['superadmin', 'companyAdmin'],
      },
      {
        path: '/dashboard/users',
        url: '/dashboard/users',
        title: 'users',
        element: (
          <Page title="Users">
            <UsersModel />
          </Page>
        ),
        inSidebar: true,
      },
      {
        path: '/dashboard/sites',
        url: '/dashboard/sites',
        title: 'sites',
        element: (
          <Page title="Sites">
            <SiteModel />
          </Page>
        ),
        inSidebar: true,
        roles: ['superadmin', 'siteManager'],
      },
      {
        path: '/dashboard/vehicles',
        url: '/dashboard/vehicles',
        title: 'vehicles',
        element: (
          <Page title="Vehicles">
            <VehicleModel />
          </Page>
        ),
        inSidebar: true,
      },
      {
        path: '/dashboard/workshop',
        url: '/dashboard/workshop',
        title: 'workshops',
        element: (
          <Page title="Workshops">
            <WorkshopModel />
          </Page>
        ),
        inSidebar: true,
        roles: ['superadmin', 'workshopManager'],
      },
    ],
  },
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '404',
        element: <NotFound />,
      },
      {
        path: 'login',
        element: <Navigate to="/" />,
      },
      {
        path: 'register',
        element: <Navigate to="/" />,
      },
      {
        path: 'sign-up-otp',
        element: <Navigate to="/" />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/404" replace />,
  },
];

const Router = () => {
  return (
    <Routes>
      {navConfig.map((route, i) => (
        <Route key={i} path={route.path} element={<PrivateRoute data={route} />}>
          {route.children &&
            route.children.map((child, c) => (
              <Route key={c} path={child.path} element={<PrivateRoute data={child} />} />
            ))}
        </Route>
      ))}
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
};

export default Router;

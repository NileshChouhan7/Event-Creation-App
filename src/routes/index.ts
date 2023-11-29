import { lazy } from 'react';

const Calendar = lazy(() => import('../pages/Calendar'));
const AddEvents = lazy(() => import('../pages/AddEvent'));
const EventLists = lazy(() => import('../pages/EventList'));

const coreRoutes = [
  {
    path: '/calendar',
    title: 'Calender',
    component: Calendar,
  },
  {
    path: '/add-event',
    title: 'AddEvent',
    component: AddEvents,
  },
  {
    path: '/event-list',
    title: 'EventList',
    component: EventLists,
  }
];

const routes = [...coreRoutes];
export default routes;

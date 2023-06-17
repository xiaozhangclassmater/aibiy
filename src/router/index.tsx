import { lazy } from 'react'
import { Navigate, RouteObject } from 'react-router'
const Home = lazy(() => import('@/pages/Home/index'))
const Login = lazy(() => import('@/pages/Login/index'))
const NotFund = lazy(() => import('@/pages/404/index'))
const routes: Array<RouteObject> = [
  {
    path: '/',
    element: <Navigate to={'/home'} />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '*',
    element: <NotFund />
  }
]

export default routes
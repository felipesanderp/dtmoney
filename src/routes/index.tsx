import { Routes as RoutesReact, Route, useLocation, Navigate, Outlet } from 'react-router-dom';

import { SignIn } from '../pages/SignIn';
import { Dashboard } from '../pages/Dashboard';
import { Import } from '../pages/Import';
import { useAuth } from '../hooks/useAuth';
import { SignUp } from '../pages/SignUp';

export function Routes() {
 
  return (
    <RoutesReact>
      <Route path="/" element={<SignIn />} />
      <Route element={<RequireAuth />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/import" element={<Import />} />
      </Route>
      <Route path="/signup" element={<SignUp />} />
    </RoutesReact>
  )
}

function RequireAuth() {
  const { user } = useAuth();
  let location = useLocation();

  if (!user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/" state={{ from: location }} />;
  }

  return <Outlet />;
}

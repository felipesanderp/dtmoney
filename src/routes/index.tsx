import { Routes as RoutesReact, Route } from 'react-router-dom';

import { SignIn } from '../pages/SignIn';
import { Dashboard } from '../pages/Dashboard';
import { Import } from '../pages/Import';

export function Routes() {
  return (
    <RoutesReact>
      <Route path="/" element={<SignIn />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/import" element={<Import />} />
    </RoutesReact>
  )
}

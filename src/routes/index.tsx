import { Routes as RoutesReact, Route } from 'react-router-dom';

import { Dashboard } from '../pages/Dashboard';
import { Import } from '../pages/Import';

export function Routes() {
  return (
    <RoutesReact>
      <Route path="/" element={<Dashboard />} />
      <Route path="/import" element={<Import />} />
    </RoutesReact>
  )
}

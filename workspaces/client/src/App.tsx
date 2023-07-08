import { APP_TITLE } from '@scribbr-assessment-full-stack/common';
import React from 'react';
import Search from '../components/search/search';

import './index.css';

export function App() {
  return (
    <div>
      <h1>Welcome to {APP_TITLE}!</h1>
      <p>This would be probably the starting point of your app.</p>
      <Search />
    </div>
  );
}

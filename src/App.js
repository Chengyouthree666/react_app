import React, {Suspense} from 'react';
import { Routes, Route } from 'react-router-dom';
import { defaultRoutes } from './route';
import JumpLoading from './components/jumpLoading';

function App () {
  return (
    <div id="app-container">
      <Routes>
        {defaultRoutes.map((item) => <Route key={item.key} path={item.path} element={
          <Suspense fallback={
            <JumpLoading />
          }>
            <item.component />
          </Suspense>
        } />)}
      </Routes>
    </div>
  );
}

export default App;

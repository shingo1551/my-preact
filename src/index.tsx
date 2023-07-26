import { render } from 'preact';
import { LocationProvider, Router, Route, lazy } from 'preact-iso';

import { Home } from './pages/Home';
import { NotFound } from './pages/_404';
// import './style.css';

export function App() {
  return (
    <>
      <div style="display: flex; flex-direction: column;">
        <a href='/'>HOME</a>
        <a href='/ag-grid'>AG-GRID</a>
        <a href='#' onClick={() => location.href = '/ag-grid'}>AG-GRID by location.href</a>
        <a href='#' onClick={() => history.pushState({}, null, '/ag-grid')}>AG-GRID by history.pushState</a>
      </div>
      <LocationProvider>
        <Router>
          <Route path="/" component={Home} />
          <Route path="/ag-grid" component={lazy(() => import('./pages/AgGrid'))} />
          <Route default component={NotFound} />
        </Router>
      </LocationProvider>
    </>
  );
}

render(<App />, document.getElementById('app'));

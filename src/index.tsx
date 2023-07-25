import { render } from 'preact';
import { LocationProvider, Router, Route, lazy } from 'preact-iso';
import { Home } from './pages/Home';
import { NotFound } from './pages/_404';
// import './style.css';

export function App() {
  return (
    <LocationProvider>
      <Router>
        <Route path="/" component={Home} />
        <Route path="/ag-grid" component={lazy(() => import('./pages/AgGrid'))} />
        <Route default component={NotFound} />
      </Router>
    </LocationProvider>
  );
}

render(<App />, document.getElementById('app'));

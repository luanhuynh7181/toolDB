import './App.css';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';

import routes from './routes';

const AppRouter = () => {
  return useRoutes(routes);
};

const App = () => {
  return (
    <Router>
      <AppRouter />
    </Router>
  );
};
// function App() {
//   const content = useRoutes(routes);
//   return (
//     <div className="App">
//       {content}
//     </div>
//   );
// }

export default App;


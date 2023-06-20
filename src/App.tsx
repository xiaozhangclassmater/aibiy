import AibiHeader from '@/components/header';
import { useRoutes } from 'react-router-dom';
import AibiFooter from './components/Footer';
import routes from './router';

function App() {
  return (
    <div className="App">
      <AibiHeader />
      <div className="content">
        {useRoutes(routes)}
      </div>
      <AibiFooter />
    </div>
  );
}

export default App;

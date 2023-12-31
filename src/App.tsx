import AibiHeader from '@/components/header';
import { useRoutes } from 'react-router-dom';
import AibiFooter from './components/Footer';
import { useScrollTo } from './hooks';
import routes from './router';

function App() {
  useScrollTo()
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

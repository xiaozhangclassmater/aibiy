
import '@/assets/styles/index.less';
import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider, } from 'styled-components';
import App from './App';
import themeConfig from './assets/theme';
import store from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Suspense fallback='loading'>
      <HashRouter>
        <Provider store={store}>
         <ThemeProvider theme={themeConfig}>
         <App />
         </ThemeProvider>
        </Provider>
      </HashRouter>
    </Suspense>
);

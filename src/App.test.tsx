import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { store } from './redux/redux-store';


it('App renders', () => {
  render( <BrowserRouter>
            <Provider store={store}>
              <App />
            </Provider>
          </BrowserRouter>)
  
  expect(screen.getByText('Menu')).toBeInTheDocument()
  expect(screen.getByText('Contacts')).toBeInTheDocument()
  expect(screen.getByText('Login')).toBeInTheDocument()
  expect(screen.getByText('Register')).toBeInTheDocument()
});

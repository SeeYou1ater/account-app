import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Menu from './Menu';
import { store } from './../../redux/redux-store';


it('Menu renders', () => {
  render( <BrowserRouter>
            <Provider store={store}>
              <Menu />
            </Provider>
          </BrowserRouter>)
});
import { screen } from '@testing-library/react';
import App from './App';
import { renderWithRedux } from './hoc/renderWithRedux';



it('App menu renders', () => {
  renderWithRedux(<App />)
  expect(screen.getByText('Contacts')).toBeInTheDocument()
  expect(screen.getByText('Login')).toBeInTheDocument()
  expect(screen.getByText('Register')).toBeInTheDocument()
});

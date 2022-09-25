import { screen } from '@testing-library/react';
import Menu from './Menu';
import { renderWithRedux } from '../../hoc/renderWithRedux';


it('Menu header renders', () => {
  renderWithRedux(<Menu />, {initialState: {isAuth: false, contacts: null, authUser: null}})        
  expect(screen.getByText('Menu')).toBeInTheDocument()
});
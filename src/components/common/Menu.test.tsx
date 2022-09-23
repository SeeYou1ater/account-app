import { screen } from '@testing-library/react';
import Menu from './Menu';
import { renderWithRedux } from '../../hoc/renderWithRedux';


it('Menu header renders', () => {
  renderWithRedux(<Menu />)        
  expect(screen.getByText('Menu')).toBeInTheDocument()
});
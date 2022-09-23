import { screen } from '@testing-library/react';
import { renderWithRedux } from '../../../hoc/renderWithRedux';
import Contacts from './Contacts';


it('Contacts renders', () => {
  renderWithRedux(<Contacts />)        
  expect(screen.getByText('Loading...')).toBeInTheDocument()
});
import { screen, waitFor } from '@testing-library/react';
import { renderWithRedux } from '../../../hoc/renderWithRedux';
import Contacts from './Contacts';


it('Contacts renders', async () => {
  renderWithRedux(<Contacts />, {initialState: {isAuth: false, contacts: null, authUser: null}})        
  expect(screen.getByText('Loading...')).toBeInTheDocument()
})

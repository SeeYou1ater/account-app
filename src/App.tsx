import './App.css';
import './Reset.css';
import Main from './components/Main/Main';
import { useEffect } from 'react';
import { setAuthUser } from './redux/appReducer';
import { useAppDispatch } from './hooks';

function App() {
  const dispatch = useAppDispatch()

  useEffect( () => {
    let user = localStorage.getItem('user')
    if (user) {
      dispatch(setAuthUser(JSON.parse(user)))
    }
  } )
 
  return (
        <Main />
  );
}

export default App;

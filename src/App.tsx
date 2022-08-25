import './App.css';
import './Reset.css';
import Main from './components/Main/Main';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setAuthUser } from './redux/appReducer';
import { AppDispatchType } from './redux/redux-store';

function App() {
  const dispatch: AppDispatchType = useDispatch()

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

import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootStateType, AppDispatchType } from './redux/redux-store';

export const useAppDispatch = () => useDispatch<AppDispatchType>()
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector
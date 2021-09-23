import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './storeConfig';

// Use throughout your app instead of plain `useDispatch` and `useSelector`fdsf sdfsdf sdf sdfsdfdsfsdfsdfsd fsdfsdfsd fsdjldsfljsdlfjd
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

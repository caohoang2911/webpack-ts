import { useEffect, useRef } from 'react';
import { getAsyncProduct } from 'store/productSlice';
import { useAppDispatch } from './../../../store/hook';
import { unwrapResult } from '@reduxjs/toolkit';
const UserDetail = () => {
  const refInput: any = useRef();
  const dispatch = useAppDispatch();
  useEffect(() => {
    const fecthProduct = async () => {
      try {
        const data: any = await dispatch(getAsyncProduct({}));
        const products = unwrapResult(data);
      } catch (err: any) {
        console.log('Lỗi ở đây' + err.message);
      }
    };
    fecthProduct();
  }, []);

  return (
    <h3>
      <input ref={refInput} />
    </h3>
  );
};

export default UserDetail;

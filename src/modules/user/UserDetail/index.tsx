import { unwrapResult } from '@reduxjs/toolkit';
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { allProduct, getAsyncProduct } from 'store/productSlice';
import { RootState } from 'store/storeConfig';
import { useAppDispatch, useAppSelector } from './../../../store/hook';
const UserDetail = () => {
  const loading = useAppSelector((state: RootState) => state.products.status);
  const products = useSelector(allProduct);
  const refInput: any = useRef();
  const dispatch = useAppDispatch();
  useEffect(() => {
    const fecthProduct = async () => {
      try {
        const data: any = await dispatch(getAsyncProduct());
        unwrapResult(data);
      } catch (err: any) {
        console.log('Lỗi ở đây' + err.message);
      }
    };
    if (loading != 'fulfilled') {
      fecthProduct();
    }
  }, []);

  return (
    <h3>
      <input ref={refInput} />

      {loading == 'fulfilled'
        ? products.length > 0 &&
          products.map((product: any) => <p key={product.id}>{product.name}</p>)
        : 'Loading....'}
    </h3>
  );
};

export default UserDetail;

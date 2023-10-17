import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserOrder } from '../redux/productSlice';

function Profile() {
  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state.product);
  console.log(orders);
  useEffect(() => {
    dispatch(getUserOrder());
  }, [dispatch]);
  return (
    <section>
      <p>Profile</p>
    </section>
  );
}

export default Profile;

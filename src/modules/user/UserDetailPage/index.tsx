import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const UserDetail = () => {
  let params = useParams();
  useEffect(() => {
    console.log(params);
  }, []);
  return <h3>User Detail</h3>;
};

export default UserDetail;

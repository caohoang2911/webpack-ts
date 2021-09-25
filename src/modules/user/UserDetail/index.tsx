import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const UserDetail = () => {
  const params = useParams();

  useEffect(() => {
    function at() {
      return params;
    }
    at();
  }, []);

  return <h3>User Detail</h3>;
};

export default UserDetail;

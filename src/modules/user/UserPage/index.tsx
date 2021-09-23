import { NavLink, useHistory, useLocation } from 'react-router-dom';

const User = (): JSX.Element => {
  let history = useHistory();
  let location = useLocation();

  return (
    <>
      <button
        onClick={() => {
          history.push('/');
        }}
      >
        Click
      </button>
      <NavLink to="user/32">Details</NavLink>
    </>
  );
};
export default User;

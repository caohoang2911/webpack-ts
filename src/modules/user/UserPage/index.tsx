import { NavLink, useHistory } from 'react-router-dom';

const User = (): JSX.Element => {
  const history = useHistory();

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

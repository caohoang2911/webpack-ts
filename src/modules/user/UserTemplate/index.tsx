import { ChangeEvent, FormEvent, useRef } from 'react';
import './style.scss';
const UserTemplate = () => {
  const ref = useRef<HTMLInputElement>(null);
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    console.log(e);
  };
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    console.log(e);
  };
  const submit = (e: FormEvent<HTMLFormElement>): void => {
    console.log(e);
  };
  return (
    <>
      <form onSubmit={submit}>
        <input ref={ref} onChange={handleChange} />
        <button onClick={handleClick}>click me</button>
      </form>
    </>
  );
};

export default UserTemplate;

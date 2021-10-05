import { ChangeEvent, FormEvent, useRef } from 'react';
import './style.scss';
const UserTemplate = () => {
  const ref = useRef<HTMLInputElement>(null);
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {};
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {};
  const submit = (e: FormEvent<HTMLFormElement>): void => {};
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

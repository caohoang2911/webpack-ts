import React, { useEffect } from 'react';
import './style.scss';
interface Iprops {}
const Footer = (props: Iprops): JSX.Element => {
  useEffect(() => {
    console.log('render Footer');
  }, []);

  return (
    <>
      <div className="footer">
        <h3>This Footer</h3>
      </div>
    </>
  );
};
export default React.memo(Footer);

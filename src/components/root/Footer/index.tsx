import React, { useEffect } from 'react';
import './style.scss';
const Footer = (): JSX.Element => {
    useEffect(() => {
        console.log('render Footer');
    }, []);

    return (
        <>
            <div className="footer">
                <h3>Thi3s Footer</h3>
            </div>
        </>
    );
};
export default React.memo(Footer);

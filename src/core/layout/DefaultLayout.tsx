
import Header from 'components/root/Header';
import Sidebar from 'components/root/Sidebar';

import { useLocation } from 'react-router';
import {
    TransitionGroup,
    CSSTransition
} from "react-transition-group";
import './style.scss'

const DefaultLayout = ({ children }) => {
    const location = useLocation();
    return (
        <>
            <Sidebar single />
            <section className="wrapper">
                <Header />
                <main className="main">
                    <TransitionGroup>
                        <CSSTransition
                            key={location.pathname}
                            classNames="fade"
                            timeout={500}
                        >
                            {children}
                        </CSSTransition>
                    </TransitionGroup>
                </main>
            </section>
            {/* {children} */}
            {/* <Footer /> */}
        </>
    );
};
export default DefaultLayout;

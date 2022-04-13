import Header from 'components/root/Header';
import Sidebar from 'components/root/Sidebar';
import { useLocation } from 'react-router';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './style.scss';
import { createReducerContext } from 'react-use';
type Action = 'open' | 'close';
const reducer = (state: boolean, action: Action) => {
  switch (action) {
    case 'open':
      return (state = true);
    case 'close':
      return (state = false);
    default:
      throw new Error();
  }
};
const initState = Boolean(localStorage.getItem('nav-bar'));

export const [useSidebar, SharedNavBarProvider] = createReducerContext(reducer, initState);

const DefaultLayout = ({ children }) => {
  const location = useLocation();
  return (
    <>
      <SharedNavBarProvider initialState={true}>
        <Sidebar  />
        <section className="wrapper">
          <Header />
          <main className="main p-3">
            <TransitionGroup>
              <CSSTransition key={location.pathname} classNames="fade" timeout={500}>
                {children}
              </CSSTransition>
            </TransitionGroup>
          </main>
        </section>
      </SharedNavBarProvider>
    </>
  );
};
export default DefaultLayout;

import logo from 'assets/icons/logo.png';
import BaseMask from 'components/commons/BaseMask';
import { useSidebar } from 'core/layout/DefaultLayout';
import { useWindowSize } from 'react-use';
import { _nav_single } from '../_nav';
import NavHead from './components/NavHead';
import NavItem from './components/NavItem';
import NavList from './components/NavList';
import NavUser from './components/NavUser';
import './style.scss';
interface Iprops {
  curved?: boolean;
}

const SidebarOneLevel = ({ curved }: Iprops) => {
  const { width } = useWindowSize();
  const [isOpen, dispatch] = useSidebar();
  return (
    // toggle curved
    <>
      <div className={`sidebar   ${isOpen ? 'open' : ''} ${curved ? 'curved' : ''}`}>
        <NavHead
          toggleSidebar={() => dispatch(isOpen ? 'close' : 'open')}
          logo={logo}
          isOpen={isOpen}
        />
        <NavList>
          {_nav_single.map(({ name, icon, path, exact }, index) => {
            return <NavItem key={index} to={path} exactActive={exact} label={name} icon={icon} />;
          })}
          <NavUser
            name={'Hoang cao'}
            title={'Web designer'}
            avatar="https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462914.jpg"
          />
        </NavList>
      </div>
      {isOpen && width < 768 && (
        <BaseMask handleClick={() => dispatch(isOpen ? 'close' : 'open')} zIndex={2} />
      )}
    </>
  );
};

export default SidebarOneLevel;

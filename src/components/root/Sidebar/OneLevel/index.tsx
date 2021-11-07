import './style.scss';
import { useEffect, useRef, useState } from 'react';
import logo from 'assets/icons/logo.svg';
import NavHead from './components/NavHead';
import NavList from './components/NavList';
import {_nav_single } from '../_nav';
import NavItem from './components/NavItem';
import NavUser from './components/NavUser';

interface Iprops{
    curved?: boolean
}

const SidebarOneLevel = ({curved}: Iprops) => {
    const [open, setOpen] = useState(true)

    const toggleSidebar = () => {
        setOpen(!open)
    }
    return (
        // toggle curved
        <div className={`sidebar   ${open && 'open'} ${curved && 'curved'}` }>
            <NavHead toggleSidebar={toggleSidebar} logo={logo} isOpen={open} />
            <NavList>
                {_nav_single.map(({ name, icon, path, exact }, index) => {
                    return <NavItem key={index} to={path} exactActive={exact} label={name} icon={icon} />
                })}
                <NavUser name={'Hoang cao'} title={'Web designer'} avatar="https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462914.jpg" />
            </NavList>
        </div>
    )
}

export default SidebarOneLevel;

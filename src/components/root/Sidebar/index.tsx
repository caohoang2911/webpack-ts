import React, { useEffect } from 'react';

import { useLocalStorage } from 'react-use';
import { useSidebar } from 'core/layout/DefaultLayout';
import SidebarOneLevel from './OneLevel';

interface Iprops {
    single?: boolean;
}

const Sidebar = ({ single }: Iprops) => {
    const [isOpen] = useSidebar();
    const [, setNavBar] = useLocalStorage('nav-bar', isOpen);
    useEffect(() => {
        setNavBar(isOpen);
    }, [isOpen]);
    if (single) return <SidebarOneLevel />;
    return <h3>Multi</h3>;
};

export default React.memo(Sidebar);

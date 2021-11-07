import SidebarOneLevel from './OneLevel';


interface Iprops {
    single?: boolean
}

const Sidebar = ({ single }: Iprops) => {
    if (single)
        return (<SidebarOneLevel />)
    return <h3>Multi</h3>
}

export default Sidebar;

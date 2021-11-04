import './style.scss';
import { useEffect, useRef } from 'react';
import logo from 'assets/icons/logo.svg';
const Sidebar = () => {
   const refSidebar: any = useRef();
   useEffect(() => {

   }, [])
   const toggleSidebar = () => {
      // console.log(, 'refSidebar')
      refSidebar.current.classList.toggle('open')
   }
   return (
      <div className="sidebar curved open" ref={refSidebar}>
         <div className="logo-details">
            <img className="icon" src={logo} style={{ margin: '0 auto' }} width="40" height="40" />
            <i onClick={toggleSidebar} className='bx bx-menu' id="btn" ></i>
         </div>
         <ul className="nav-list">
            <li className="active">
               <a href="#">
                  <i className='bx bx-grid-alt'></i>
                  <span className="links_name">Dashboardddd</span>
               </a>
               <span className="tooltip">Dashboard</span>
            </li>
            <li>
               <a href="#">
                  <i className='bx bx-user' ></i>
                  <span className="links_name">User</span>
               </a>
               <span className="tooltip">User</span>
            </li>
            <li>
               <a href="#">
                  <i className='bx bx-chat' ></i>
                  <span className="links_name">Messages</span>
               </a>
               <span className="tooltip">Messages</span>
            </li>
            <li>
               <a href="#">
                  <i className='bx bx-pie-chart-alt-2' ></i>
                  <span className="links_name">Analytics</span>
               </a>
               <span className="tooltip">Analytics</span>
            </li>
            <li>
               <a href="#">
                  <i className='bx bx-folder' ></i>
                  <span className="links_name">File Manager</span>
               </a>
               <span className="tooltip">Files</span>
            </li>
            <li>
               <a href="#">
                  <i className='bx bx-cart-alt' ></i>
                  <span className="links_name">Order</span>
               </a>
               <span className="tooltip">Order</span>
            </li>
            <li>
               <a href="#">
                  <i className='bx bx-heart' ></i>
                  <span className="links_name">Saved</span>
               </a>
               <span className="tooltip">Saved</span>
            </li>
            <li>
               <a href="#">
                  <i className='bx bx-cog' ></i>
                  <span className="links_name">Setting</span>
               </a>
               <span className="tooltip">Setting</span>
            </li>
            <li className="profile">
               <div className="profile-details">
                  <img src="https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462914.jpg" alt="profileImg" />
                  <div className="name_job">
                     <div className="name">Cao Hoàng</div>
                     <div className="job">Web designer</div>
                  </div>
               </div>
               <i className='bx bx-log-out' id="log_out" ></i>
            </li>
         </ul>
      </div>
   )
}

export default Sidebar;

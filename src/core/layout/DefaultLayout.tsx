import Footer from 'components/Footer';
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';

const DefaultLayout = ({ children }) => {
   return (
      <>
         <Sidebar />
         <section className="wrapper">
            <div className="text">Dashboard</div>
         </section>
         {/* {children} */}
         {/* <Footer /> */}
      </>
   );
};
export default DefaultLayout;

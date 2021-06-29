import Navbar from '../components/navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <div >
                <div>
                    {children}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Layout;
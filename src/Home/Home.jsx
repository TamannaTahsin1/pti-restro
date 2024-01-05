import Banner from "../Component/Banner/Banner";
import Navbar from "../Component/Navbar/Navbar";
import Popular from "../Component/Popular/Popular";
import Recommended from "../Component/Recommended/Recommended";
import Footer from "../Footer/Footer";

const Home = () => {
    return (
        <div>

        <div className="container mx-auto">
            <Navbar></Navbar>
            <Banner></Banner>
            {/* <Popular></Popular> */}
            <Recommended></Recommended>
        </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;
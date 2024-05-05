import Navigation from "../../components/navigation/Navigation";
import Footer from "../../layouts/footer/Footer";
import Hero from "../../layouts/hero/Hero";
import Portfolio from "../../layouts/portfolio/Portfolio";
import Projects from "../../layouts/projects/Projects";
import Seoproject from "../../layouts/seoproject/Seoproject";

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Hero></Hero>
            <Portfolio></Portfolio>
            <Projects></Projects>
            <Seoproject></Seoproject>
            <Footer></Footer>
        </div>
    );
};

export default Home;
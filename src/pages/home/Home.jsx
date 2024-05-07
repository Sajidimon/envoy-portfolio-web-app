import { useContext, useEffect, useState } from "react";
import Navigation from "../../components/navigation/Navigation";
import Footer from "../../layouts/footer/Footer";
import Hero from "../../layouts/hero/Hero";
import Portfolio from "../../layouts/portfolio/Portfolio";
import Projects from "../../layouts/projects/Projects";
import Seoproject from "../../layouts/seoproject/Seoproject";
import { AuthContext } from "../../provider/AuthProvider";

const Home = () => {

    const { user } = useContext(AuthContext)
    const [headersbio, setHeaderbio] = useState([])

    const [exdata, setExdata] = useState([])


    useEffect(() => {

        fetch('http://localhost:5000/express')
            .then(res => res.json())
            .then(data => setExdata(data))

    }, [])

        fetch(`http://localhost:5000/headersbio/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setHeaderbio(data)
            })

    return (
        <div>
            <Navigation headersbio={headersbio}></Navigation>
            <Hero headersbio={headersbio}></Hero>
            <div className="bg-[#191431]">
                <div className="text-center text-white py-14">
                    <h2 className="text-5xl font-bold mb-6">My Work</h2>
                    <p>Explore my projects, Live link & code</p>
                </div>
                <div className="md:grid md:grid-cols-3">
                    {
                        exdata.map(exitem => <Portfolio key={exitem._id} exitem={exitem} />)
                    }
                </div>
            </div>
            {/* <Portfolio exdata={exdata}></Portfolio> */}
            <Projects></Projects>
            <Seoproject></Seoproject>
            <Footer></Footer>
        </div>
    );
};

export default Home;
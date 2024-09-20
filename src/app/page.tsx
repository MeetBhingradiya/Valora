import Hero from "../Components/Hero";
import Navbar from "@App/Components/Navbar";
import About from "../Components/About";
import Services from "../Components/Services";
import Testimonials from "../Components/Testimonials";  
import Portfolio from "../Components/Portfolio";
import Footer from "../Components/Footer";

export default function Home() {
    return (
        <>
            <Hero />
            <Navbar />
            <About />
            <Services />
            <Testimonials />
            <Portfolio />
            <Footer />
        </>
    );
}

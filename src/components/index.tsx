import Header from "@/components/header";
import Intro from "@/components/intro";
import Intro_2 from "@/components/intro_2"
import Intro_3 from "@/components/intro_3"
import Services from "@/components/services";
import Testimonials from "@/components/Testimonials"
import Footer from "@/components/footer"


export default function IndexPage() {
    return(
        <>
         <Header />
         <Intro />
         <Intro_2 />
         <Intro_3 />
         <Services />
         <Testimonials />
         <Footer />
        </>
    
    );
};
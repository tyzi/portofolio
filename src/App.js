import Home from "./components/home/Home";
import Sidebar from "./components/sidebar/Sidebar";
import About from "./components/about/About";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Portfolio from "./components/portfolio/Portfolio";
import Pricing from "./components/pricing/Pricing";
import Resume from "./components/resume/Resume";
import Services from "./components/services/Services";
import Testimonials from "./components/testimonials/Testimonials";

import "./styles.css";
export default function App() {
  return (
    <>
      <Sidebar />
      <main className="main">
        <Home />
        <About />
        <Services />
        <Resume />
        <Portfolio />
        <Pricing />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
    </>
  );
}

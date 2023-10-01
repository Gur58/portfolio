import Layout from "@/components/Layout/Layout";
import Header from "@/components/Header/Header";
import About from "@/components/About/About";
import Technology from "@/components/Technology/Technology";
import Company from "@/components/Company/Company";
import Projects from "@/components/Projects/Projects";

function App() {
  return (
    <Layout>
        <Header />
        <div className="sm:mt-10">
            <About />
        </div>
        <div className="mt-28">
            <Technology />
        </div>
        <div className="mt-28">
            <Company />
        </div>
        <div className="mt-28">
            <Projects />
        </div>
    </Layout>
  )
}

export default App

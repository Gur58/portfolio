import Layout from "@/components/Layout/Layout";
import Header from "@/components/Header/Header";
import About from "@/components/About/About";

function App() {
  return (
    <Layout>
        <Header />
        <div className="sm:mt-10">
            <About />

        </div>
    </Layout>
  )
}

export default App

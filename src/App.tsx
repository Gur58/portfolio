import Layout from "@/components/Layout/Layout";
import Header from "@/components/Header/Header";
import About from "@/components/About/About";
import Technology from "@/components/Technology/Technology";
import Company from "@/components/Company/Company";
import Projects from "@/components/Projects/Projects";
import {createContext, useContext, useEffect, useState} from "react";

const defaultTheme = localStorage.getItem('theme') as 'light' | 'dark' || 'light';

type ThemeType = 'light' | 'dark';

type ThemeContextType = {
    theme: ThemeType,
    onChangeTheme: () => void,
}

export const ThemeContext = createContext<ThemeContextType>({
    theme: defaultTheme,
    onChangeTheme: () => {}
});

function App() {
    const [theme, setTheme] = useState<ThemeType>(defaultTheme);

    const setThemeClass = (theme: ThemeType) => {
        const root = document.documentElement.classList;
        const body = document.body.classList;
        if (theme === 'dark') {
            root.add('dark')
            body.add('darkScroll')
            body.remove('lightScroll')
        } else {
            root.remove('dark')
            body.remove('darkScroll')
            body.add('lightScroll')


        }
    }

    const onChangeTheme = () => {
        const newTheme = theme === "light" ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        setThemeClass(newTheme);
    }

    useEffect(() => {
        setThemeClass(theme);
    }, []);

  return (
      <ThemeContext.Provider value={{theme, onChangeTheme}}>
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
              <div className="mt-28 pb-28">
                  <Projects />
              </div>
          </Layout>
      </ThemeContext.Provider>
  )
}

export default App

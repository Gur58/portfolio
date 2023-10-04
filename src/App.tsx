import Layout from "@/components/Layout/Layout";
import Header from "@/components/Header/Header";
import About from "@/components/About/About";
import Technology from "@/components/Technology/Technology";
import Company from "@/components/Company/Company";
import Projects from "@/components/Projects/Projects";
import {createContext, useEffect, useState} from "react";


type ThemeType = 'light' | 'dark';

type ThemeStoreType = {
    value: ThemeType,
    onChangeTheme: () => void,
}

type LoadingStoreType = {
    value: boolean,
    onChangeLoading: (loading: boolean) => void,
}

type StoreType = {
    theme: ThemeStoreType,
    loading: LoadingStoreType
}

const defaultTheme = (localStorage.getItem('theme') as ThemeType) || 'light';


export const Store = createContext<StoreType>({
    theme: {
        value: defaultTheme,
        onChangeTheme: () => {},
    },
    loading: {
        value: true,
        onChangeLoading: () => {},
    }
});

function App() {
    const [theme, setTheme] = useState<ThemeType>(defaultTheme);
    const [loading, setLoading] = useState<boolean>(true);

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
        setLoading(true);
        const newTheme = theme === "light" ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        setThemeClass(newTheme);
        setTimeout(() => setLoading(false), 2000)
    }

    useEffect(() => {
        setThemeClass(theme);
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, []);

  return (
      <Store.Provider
          value={
              {
                  theme: {
                      value: theme,
                      onChangeTheme
                  },
                  loading: {
                      value: loading,
                      onChangeLoading: setLoading
                  }
              }
          }
      >
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
      </Store.Provider>
  )
}

export default App

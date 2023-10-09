import Layout from "@/components/Layout/Layout";
import Header from "@/components/Header/Header";
import About from "@/components/About/About";
import Technology from "@/components/Technology/Technology";
import Company from "@/components/Company/Company";
import Projects from "@/components/Projects/Projects";
import {useEffect, useState} from "react";
import {Store, defaultTheme, ThemeType, LanguageType, defaultLanguage} from '@/store';
import i18n from "i18next";
import '@/i18n';


function App() {
    const [theme, setTheme] = useState<ThemeType>(defaultTheme);
    const [loading, setLoading] = useState<boolean>(true);
    const [language, setLanguage] = useState<LanguageType>(defaultLanguage);

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

    const onChangeLanguage = () => {
        setLoading(true);
        const newLanguage = language === "ru" ? "en" : "ru";
        setLanguage(newLanguage)
        localStorage.setItem('lang', newLanguage);
        i18n.changeLanguage(newLanguage)
        setTimeout(() => setLoading(false), 2000)
    }

    useEffect(() => {
        setThemeClass(theme);
        i18n.changeLanguage(language)
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, []);

    const storeValue = {
        theme: {
            value: theme,
            onChangeTheme
        },
        loading: {
            value: loading,
            onChangeLoading: setLoading
        },
        language: {
            value: language,
            onChangeLanguage
        }
    }

  return (
      <Store.Provider value={storeValue}>
          <Layout>
              <Header />
              <section className="sm:mt-10">
                  <About />
              </section>
              <section id="technology" className="mt-28">
                  <Technology />
              </section>
              <section id="company" className="mt-28">
                  <Company />
              </section>
              <section id="projects" className="mt-28 pb-28">
                  <Projects />
              </section>
          </Layout>
      </Store.Provider>
  )
}

export default App

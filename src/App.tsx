import Layout from "@/components/Layout/Layout";
import Header from "@/components/Header/Header";
import About from "@/components/About/About";
import Technology from "@/components/Technology/Technology";
import Company from "@/components/Company/Company";
import Projects from "@/components/Projects/Projects";
import Footer from "@/components/Footer/Footer";
import {useEffect, useState} from "react";
import {Store, defaultTheme, ThemeType, LanguageType, defaultLanguage} from '@/store';
import i18n from "i18next";
import '@/i18n';

const MIN_LOAD_TIME = 2000;

function App() {
    const [loadStartTime, setLoadStartTime] = useState<number>(Date.now());
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
        onChangeLoading(true);
        const newTheme = theme === "light" ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        setThemeClass(newTheme);
        setTimeout(() => onChangeLoading(false), MIN_LOAD_TIME)
    }

    const onChangeLanguage = () => {
        onChangeLoading(true);
        const newLanguage = language === "ru" ? "en" : "ru";
        setLanguage(newLanguage)
        localStorage.setItem('lang', newLanguage);
        i18n.changeLanguage(newLanguage)
        setTimeout(() => onChangeLoading(false), MIN_LOAD_TIME)
    }

    const onChangeLoading = (isLoading: boolean) => {
        setLoading(isLoading)
        const body = document.body.classList;
        if (isLoading) {
            setLoadStartTime(Date.now())
            body.add('overflow-hidden')
        } else {
            body.remove('overflow-hidden')
        }
    }

    const handleLoadResource = () => {
        const durationLoad = Date.now() - loadStartTime;
        const diffLoad = MIN_LOAD_TIME - durationLoad;
        if (diffLoad) {
            setTimeout(() => {
                onChangeLoading(false)
            }, diffLoad)
        } else {
            onChangeLoading(false)
        }
    }


    useEffect(() => {
        onChangeLoading(true)
        setThemeClass(theme);
        i18n.changeLanguage(language)
    }, []);

    const storeValue = {
        theme: {
            value: theme,
            onChangeTheme
        },
        loading: {
            value: loading,
            onChangeLoading
        },
        language: {
            value: language,
            onChangeLanguage
        }
    }

  return (
      <div onLoad={handleLoadResource}>
          <Store.Provider value={storeValue}>
              <Layout>
                  <Header />
                  <main className="px-[7px]">
                      <div className="mb-14 xsm:mb-28">
                          <About />
                      </div>
                      <div className="mb-14 xsm:mb-28">
                          <Technology />
                      </div>
                      <div className="mb-14 xsm:mb-28">
                          <Company />
                      </div>
                      <div className="mb-10">
                          <Projects />
                      </div>
                  </main>
                  <Footer />
              </Layout>
          </Store.Provider>
      </div>

  )
}

export default App

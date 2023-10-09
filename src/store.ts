import {createContext} from "react";

export type ThemeType = 'light' | 'dark';
export type LanguageType = 'en' | 'ru';

export type ThemeStoreType = {
    value: ThemeType,
    onChangeTheme: () => void,
}

export type LoadingStoreType = {
    value: boolean,
    onChangeLoading: (loading: boolean) => void,
}

export type LanguageStoreType = {
    value: LanguageType,
    onChangeLanguage: () => void,
}

export type StoreType = {
    theme: ThemeStoreType,
    loading: LoadingStoreType,
    language: LanguageStoreType,
}

export const defaultTheme = (localStorage.getItem('theme') as ThemeType) || 'light';
export const defaultLanguage = (localStorage.getItem('lang') as LanguageType) || 'ru';


export const Store = createContext<StoreType>({
    theme: {
        value: defaultTheme,
        onChangeTheme: () => {},
    },
    loading: {
        value: true,
        onChangeLoading: () => {},
    },
    language: {
        value: defaultLanguage,
        onChangeLanguage: () => {},
    }
});

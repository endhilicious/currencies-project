import React, { createContext } from 'react';

export const CurrenciesContext = createContext(null);

export default function useCurrencies(props: any): any {
    const { data } = props;
    const currenciesList = Object.keys(data?.rates);
    return {
        currenciesList,
        rates: data?.rates || {}
    };
}

interface CurrenciesProviderPros {
    children: React.ReactNode;
    currencies?: any;
}

export const CurrenciesProvider: React.FC<CurrenciesProviderPros> = ({ children, ...props }) => {
    return (
        <CurrenciesContext.Provider value={useCurrencies(props)}>
            {children}
        </CurrenciesContext.Provider>
    );
};

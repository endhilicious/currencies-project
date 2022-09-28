import React from 'react';
import { CurrenciesProvider } from '../src/context/useCurrencies';
import CurrencyViews from '../src/views/CurrencyViews';

const API_KEY = 'vBHcsx2PtMVVuXL7rgPYXrhVwTmSKt4x';
const API_EXCHANGERATE_LATEST = 'https://api.apilayer.com/exchangerates_data/latest';

const Home: React.FC = props => {
  return (
    <CurrenciesProvider {...props}>
      <CurrencyViews />
    </CurrenciesProvider>
  )
}

export async function getServerSideProps() {
  let data;
  try {
    const response = await fetch(
      API_EXCHANGERATE_LATEST,
      { headers: {
        apikey: API_KEY,
      }}
    );
    data = await response.json();
  } catch (error) {
    data = error;
  }
  return { props: { data } }
}

export default Home

import React, { useContext, useState } from 'react';
import cx from 'classnames';

import Button from '../../src/components/Button'
import Card from '../../src/components/Card'
import MainCard from '../../src/components/MainCard'
import Select from '../../src/components/Select';
import { CurrenciesContext } from '../context/useCurrencies';
import styles from '../../styles/CurrencyViews.module.css';
import Plus from '../components/Icon/Plus';

const CurrencyViews = () => {
    const { currenciesList, rates }: any = useContext(CurrenciesContext);

    const [selectedCard, setSelectedCard] = useState<string | null>(null)
    const [selectedCurrency, setSelectedCurrency] = useState<string | null>(null)

    const [isCurrencyChange, setCurrencyChange] = useState<boolean>(false)
    const [listActiveCurrencies, setListActiveCurrencies] = useState<any[]>([])

    const handleClick = () => setCurrencyChange(prev => !prev);
    const handleSelectedCurrency = (curr: string) => {
        setSelectedCurrency(curr)
    };
    const handleSelectedCurrencies = (curr: string) => {
        setSelectedCard(selectedCard === curr ? null : curr);
    }
    const handleRemoveSelectedCurrencies = (curr: string) => {
        const newListActiveCurrenies = listActiveCurrencies.filter(data =>  data.label !== curr);
        setListActiveCurrencies(newListActiveCurrenies);
    }
    const handleSubmit = () => {
        if (!listActiveCurrencies.includes(selectedCurrency)) {
            let newListActiveCurrenies: any[] = listActiveCurrencies;
            if (selectedCard) {
                newListActiveCurrenies = listActiveCurrencies.filter(data =>  data.label !== selectedCard);
            }
            setListActiveCurrencies([
                ...newListActiveCurrenies,
                { desc: null, label: selectedCurrency, value: rates[selectedCurrency || 'IDR']}
            ]);
            setCurrencyChange(false);
            setSelectedCard(null);
        } {
            // something alert should be show, to ensure currencies has been implemented
        }
    }

    return (
        <div>
            <MainCard />
            <div className={styles['CurrencyViews__cardMainWrapper']}>
                {
                    listActiveCurrencies.map((data, i) => (
                        <React.Fragment key={i}>
                            <Card
                                className={cx(
                                styles['CurrencyViews__cardWrapper'], {
                                    [styles['CurrencyViews__cardWrapper--active']]: selectedCard === data.label
                                })}
                                onClick={() => handleSelectedCurrencies(data.label)}
                                onClose={() => handleRemoveSelectedCurrencies(data.label)}
                                selected={selectedCard === data.label}
                            >
                                <div className={styles['CurrencyViews__cardMain']}>
                                    <div>{data.label}</div>
                                    <div>{data.value}</div>
                                </div>
                                <div className={styles['CurrencyViews__cardDesc']}>
                                    <div>{data.label} {data.desc && `- ${data.desc}`}</div>
                                    <div className={styles['CurrencyViews__cardPercent']}>{`-1.13%`}</div>
                                </div>
                                <div className={styles['CurrencyViews__cardCalculate']}>
                                    <div>1 USD = {data.label} {data.value}</div>
                                </div>
                            </Card>
                        </React.Fragment>
                    ))
                }
            </div>
            {!isCurrencyChange ? (
                <div className={styles['CurrencyViews__buttonWrapper']}>
                    <Button onClick={handleClick}>
                        {selectedCard ? (
                            <span>Change Currencies</span>
                        ) : (
                            <>
                                <Plus />
                                <span>Add More Currencies</span>
                            </>
                        )}
                    </Button>
                </div>
            ) : (
                <div className={styles['CurrencyViews__buttonSelectWrapper']}>
                    <Select onChange={handleSelectedCurrency} options={currenciesList} value={selectedCurrency} />
                    <Button onClick={handleSubmit}>
                    Submit
                    </Button>
                </div>
            )}
        </div>
    )
}

export default CurrencyViews
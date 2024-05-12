import { useDispatch } from 'react-redux';
import { updateCurrency } from '../../reducers/currencySlice';
import newRequest from '../../utils/newRequest';
import './CurrencySwitch.css'; // Import the SCSS file

const CurrencySwitch = () => {
  const dispatch = useDispatch();

  const handleCurrencyChange = async (currency) => {
    try {
      console.log('Dispatching updateCurrency with:', currency);
      await newRequest.post('/currency', { currency });
      dispatch(updateCurrency(currency));
    } catch (error) {
      console.error('Error updating currency:', error);
    }
  };

  return (
    <div className="dropdown">
      <button className="btn dropdown-toggle btntext" type="button" id="currencyDropdown" data-bs-toggle="dropdown" aria-expanded="false">
        Currency
      </button>
      <ul className="dropdown-menu btntext" aria-labelledby="currencyDropdown">
        <li><button className="dropdown btntext" type="button" onClick={() => handleCurrencyChange('USD')}>USD</button></li>
        <li><button className="dropdown btntext" type="button" onClick={() => handleCurrencyChange('EUR')}>EUR</button></li>
        <li><button className="dropdown btntext" type="button" onClick={() => handleCurrencyChange('NGN')}>NGN</button></li>
        <li><button className="dropdown btntext" type="button" onClick={() => handleCurrencyChange('GBP')}>GBP</button></li>
        <li><button className="dropdown btntext" type="button" onClick={() => handleCurrencyChange('GHS')}>GHS</button></li>
        <li><button className="dropdown btntext" type="button" onClick={() => handleCurrencyChange('INR')}>INR</button></li>
        <li><button className="dropdown btntext" type="button" onClick={() => handleCurrencyChange('KES')}>KES</button></li>
        <li><button className="dropdown btntext" type="button" onClick={() => handleCurrencyChange('ZMW')}>ZMW</button></li>
        <li><button className="dropdown btntext" type="button" onClick={() => handleCurrencyChange('ZAR')}>ZAR</button></li>



        {/* Add more currencies as needed */}	
      </ul>
    </div>
  );
};

export default CurrencySwitch;

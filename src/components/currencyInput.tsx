import { Input } from 'antd';
import "../styles/components/CurrencyInput.css";

const CurrencyInput = () => {
    return (
        <Input
            placeholder="Please Enter amount"
            addonAfter="USD"
            className='inputCurrencyHolder'
        />
    );
};

export default CurrencyInput;

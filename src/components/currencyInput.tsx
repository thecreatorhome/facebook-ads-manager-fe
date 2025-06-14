import { Input } from 'antd';
import "../styles/components/CurrencyInput.css";

const CurrencyInput = () => {
    return (
        <Input
            placeholder="Please Enter amount"
            addonBefore="$"
            addonAfter="USD"
            defaultValue={5}
            className='inputCurrencyHolder'
        />
    );
};

export default CurrencyInput;

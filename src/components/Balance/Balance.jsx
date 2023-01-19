

import './Balance.scss';

const Balance  = (props) => {

    const myBalance = props.balance

    return (
        <span className={`balance ${props.className}`}>
            {props.currency}
            <span>
                {myBalance}
            </span>
        </span>
    )
}

export default Balance
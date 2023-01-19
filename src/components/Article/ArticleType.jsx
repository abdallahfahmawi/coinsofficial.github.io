import Button from '../Buttons/Button'
import {RxDotsVertical} from 'react-icons/rx'
import {BsQuestionLg} from 'react-icons/bs'

import './ArticleType.scss'

const ArticleType = () => {
    return (
        <div className='articleTypeHolder d-flex justify-content-between'>
            <div className='articleTypeHolder_articleSource d-flex'>
                <div className='articleTypeHolder_articleSource_icon'>
                    <BsQuestionLg />
                </div>
                <div className='articleTypeHolder_articleSource_title d-flex'>
                    <p>Coinbase Learn</p>
                    <span>Explainers</span>
                </div>
            </div>
            <Button className="btn-more">
                <RxDotsVertical/>
            </Button>
        </div>
    )
}

export default ArticleType

import Button from '../Buttons/Button'
import {MdOutlineNotificationsNone} from 'react-icons/md'
import {TbGridDots} from 'react-icons/tb'
import './Header.scss'
const Header = () => {
    return (
        <div className="headerHolder justify-content-between d-flex">
            <div className="pageName">
                <h5>Home</h5>
            </div>
            <div className="userHolder d-flex">
                <div className='userInterfaceList'>
                    <Button buttonStyle ="btn-Primary">
                        Buy & Sell
                    </Button>
                    <Button buttonStyle="btn-Secondary">
                        Send & Recieve
                    </Button>
                    <Button buttonStyle="btn-notification">
                        <MdOutlineNotificationsNone/>
                    </Button>
                    <Button buttonStyle="btn-notification">
                        <TbGridDots/>
                    </Button>   
                </div>
                <div className='userImage'></div>
            </div>
        </div>

    )
}


export default Header
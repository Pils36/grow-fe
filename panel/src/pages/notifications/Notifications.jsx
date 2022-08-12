import "./notification.scss"
import logo from "../../components/images/Ellipse.png"
import { FaLongArrowAltLeft } from "react-icons/fa"
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const Notifications = () => {
  return (
    <div className="notify">
        <div className="top">
            <div className="noteLeft">
                <img className="logo" src={ logo } alt="Logo" />
                <div className="back">
                    <FaLongArrowAltLeft />
                    <h1>Back</h1>
                </div>
            </div>
            <div className="noteRight">
                <h1>Admin name</h1>
                <AccountCircleOutlinedIcon />
            </div>
        </div>

        <div className="noteHead">
            <h1>Notifications</h1>
            <div className="div"></div>
        </div>

        <div className="activityInfo">
                <div className="activityInfoF">
                    <div className="left">
                        <h2>Clement added a new task schedule</h2>
                        <p>"Clearing of land" for farm B on 6th July, 2000</p>
                    </div>
                    <div className="right">
                        <h3>3rd June, 2000</h3>
                        <p>12:33pm</p>
                    </div>
                </div>

                <div className="activityInfoF">
                    <div className="left">
                        <h2>Clement added a new task schedule</h2>
                        <p>"Clearing of land" for farm B on 6th July, 2000</p>
                    </div>
                    <div className="right">
                        <h3>3rd June, 2000</h3>
                        <p>12:33pm</p>
                    </div>
                </div>

                <div className="activityInfoF">
                    <div className="left">
                        <h2>Clement added a new task schedule</h2>
                        <p>"Clearing of land" for farm B on 6th July, 2000</p>
                    </div>
                    <div className="right">
                        <h3>3rd June, 2000</h3>
                        <p>12:33pm</p>
                    </div>
                </div>

                <div className="activityInfoF">
                    <div className="left">
                        <h2>Clement added a new task schedule</h2>
                        <p>"Clearing of land" for farm B on 6th July, 2000</p>
                    </div>
                    <div className="right">
                        <h3>3rd June, 2000</h3>
                        <p>12:33pm</p>
                    </div>
                </div>

                <div className="activityInfoF">
                    <div className="left">
                        <h2>Clement added a new task schedule</h2>
                        <p>"Clearing of land" for farm B on 6th July, 2000</p>
                    </div>
                    <div className="right">
                        <h3>3rd June, 2000</h3>
                        <p>12:33pm</p>
                    </div>
                </div>

                <div className="activityInfoF">
                    <div className="left">
                        <h2>Clement added a new task schedule</h2>
                        <p>"Clearing of land" for farm B on 6th July, 2000</p>
                    </div>
                    <div className="right">
                        <h3>3rd June, 2000</h3>
                        <p>12:33pm</p>
                    </div>
                </div>
                </div>
        
    </div>
  )
}

export default Notifications
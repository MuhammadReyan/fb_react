import "./profile.css"

import Topbar from "../../components/topbar/topbar";
import Sidebar from "../../components/sidebar/sidebar";
import Feed from "../../components/feed/feed";
import Rightbar from "../../components/rightbar/rightbar";





export default function Profile() {
    return (

        <>
            <Topbar />
            <div className="profile">

                <Sidebar />
                <div className="profileRight">

                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img className="profileCoverImg" src="assests/cover.png" alt="" />
                            <img className="profileUserImg" src="assests/photo4.png" alt="" />
                        </div>

                        <div className="profileInfo">
                            <h4 className="profileInfoName">Danny Rim</h4>
                            <span className="profileInfoDesc">Hello my friend!!!</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        <Rightbar profile />
                    </div>

                </div>

            </div>
        </>
    )
}

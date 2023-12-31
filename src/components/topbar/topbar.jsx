import "./topbar.css"

import { Search, Person, Chat, Notifications } from "@mui/icons-material"


export default function Topbar() {
    return (
        <div className="topbarContainer">

            <div className="topbarLeft">
                <span className="logo">Facebook</span>
            </div>

            <div className="topbarCenter">
                <div className="searchBar">
                    <Search className="searchicon" />
                    <input placeholder="Search....." className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Home Page </span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person />

                        <span className="topbarIconBadge"> 1</span>
                    </div>

                    <div className="topbarIconItem">
                        <Chat />

                        <span className="topbarIconBadge"> 2</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications />

                        <span className="topbarIconBadge"> 3</span>
                    </div>
                </div>
                {/* IMAGE */}

                <img src="/assests/download.jpeg" alt="" className="topbarImage" />
            </div>
        </div>
    )
}


// import PersonIcon from '@mui/icons-material/Person';
import "./home.css"
import Topbar from "../../components/topbar/topbar";
import Sidebar from "../../components/sidebar/sidebar";
import Feed from "../../components/feed/feed";
import Rightbar from "../../components/rightbar/rightbar";





export default function Home() {
    return (

        <>
            <Topbar />
            <div className="homeContainer">

                <Sidebar />
                <Feed />
                <Rightbar />
            </div>
        </>


    )



}

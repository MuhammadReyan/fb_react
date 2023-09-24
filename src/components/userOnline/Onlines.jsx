import "./online.css"

export default function Onlines({ user }) {
    return (
        <li className="rightbarFriend">

            <div className="rightbarProfileImgContainer">
                <img className='rightbarProfileImg' src={user.profilePicture} alt="" />
                <span className='rightbarOnline'></span>
            </div>
            <span className='rightbarUserName'>{user.username}</span>
        </li>
    )
}

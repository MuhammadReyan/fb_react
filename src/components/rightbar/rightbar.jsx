import './rightbar.css'
import { Users } from '../../dummyData'
import Onlines from '../userOnline/Onlines'




export default function Rightbar({ profile }) {



  const HomeRightBar = () => {
    return (
      <>

        <div className="birthdayContainer">
          <img className='birthdayImg' src="/assests/gift.jpeg" alt="" />
          <span className='birthdayText'><b>James John</b> and <b>3  others friends</b> have a birthday...</span>
        </div>

        <img className='rightbarAd' src="/assests/advertisement.png" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>

        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Onlines key={u.id} user={u} />
          ))}
        </ul>
      </>
    )
  }
  const ProfileRightBar = () => {
    return (

      <> <h4 className='rightBarTitle'>
        My Bio
      </h4>

        <div className="rightBarInfo">
          <div className="rightBarInfoItem">
            <span className='rightBarInfoKey'> City:</span>
            <span className='rightBarInfoValue'> Los Angles</span>
          </div>
        </div>

        <div className="rightBarInfo">
          <div className="rightBarInfoItem">
            <span className='rightBarInfoKey'> From:</span>
            <span className='rightBarInfoValue'> United State</span>
          </div>
        </div>

        <div className="rightBarInfo">
          <div className="rightBarInfoItem">
            <span className='rightBarInfoKey'> Education:</span>
            <span className='rightBarInfoValue'> Software Engineer</span>
          </div>
        </div>

        <div className="rightBarInfo">
          <div className="rightBarInfoItem">
            <span className='rightBarInfoKey'> Relationship:</span>
            <span className='rightBarInfoValue'> Single</span>
          </div>
        </div>

        <h4 className='rightBarTitle'>My Friends</h4>
        <div className="rightBarFollowings">
          <div className="rightBarFollowing">
            <img src="assests/photo1.png" alt="" className="rightBarFollowingImg" />
            <span className='rightBarFollowingName'>Jon James </span>
          </div>

          <div className="rightBarFollowing">
            <img src="assests/member-2.png" alt="" className="rightBarFollowingImg" />
            <span className='rightBarFollowingName'>Summy Dane</span>
          </div>
          <div className="rightBarFollowing">
            <img src="assests/photo6.png" alt="" className="rightBarFollowingImg" />
            <span className='rightBarFollowingName'>Nick Smith </span>
          </div>
          <div className="rightBarFollowing">
            <img src="assests/photo4.png" alt="" className="rightBarFollowingImg" />
            <span className='rightBarFollowingName'>Paul Donna</span>
          </div>

          <div className="rightBarFollowing">
            <img src="assests/photo3.png" alt="" className="rightBarFollowingImg" />
            <span className='rightBarFollowingName'>Jason Ronald</span>
          </div>
          <div className="rightBarFollowing">
            <img src="assests/member-7.png" alt="" className="rightBarFollowingImg" />
            <span className='rightBarFollowingName'>Andrew Steven</span>
          </div>
        </div>
      </>



    )
  }

  return (
    <div className='rightbar'>
      <div className="rightWrapper">

        {profile ? <ProfileRightBar /> : <HomeRightBar />}
      </div>

    </div>
  )
}

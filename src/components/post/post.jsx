import { MoreVert } from '@mui/icons-material'
import './post.css'
import { Users } from '../../dummyData'
import { useState } from 'react'

export default function Post({ posts }) {
    const [like, setLike] = useState(posts.like)
    const [islike, issetLike] = useState(false)


    const likeHandler = () => {
        setLike(islike ? like - 1 : like + 1)
        issetLike(!islike)
    }
    return (
        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={Users.filter((u) => u.id === posts?.userId)[0].profilePicture} className='postProfileImg' alt="" />
                        <span className='postUserName'>{Users.filter((u) => u.id === posts?.userId)[0].username}</span>
                        <span className='postDate'>{posts.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">

                    <span className='postText'>{posts?.desc}</span>
                    <img src={posts.photo} className='postImg' />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className='likeIcon' onClick={likeHandler} src="/assests/like.png" alt="" />
                        <img className='likeIcon' onClick={likeHandler} src="/assests/heart.png" alt="" />

                        <span className='postLikeCounter'>{like} people liked it</span>
                    </div>


                    <div className="postBottomRight">
                        <span className='postCommentsText'> {posts.comment} comments </span>

                    </div>
                </div>
            </div>
        </div>
    )
}

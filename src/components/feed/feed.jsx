import Share from '../Share/Share'
import Post from '../post/post'
import './feed.css'

import { Posts } from '../../dummyData'

export default function Feed() {
    return (
        <div className='feed'>

            <div className="feedWrapper">

                <Share />
                {
                    Posts.map((p) => (

                        <Post key={p.id} posts={p} />
                    ))
                }



            </div>

        </div>
    )
}

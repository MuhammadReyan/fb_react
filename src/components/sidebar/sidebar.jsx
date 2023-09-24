import CloseFriend from '../closeFriend/CloseFriend'
import './sidebar.css'
import { HelpOutline, RssFeed, School, VideoSettings, WorkOutline, Event, Group, Chat, Bookmark } from '@mui/icons-material'

import { Users } from '../../dummyData'

export default function Sidebar() {
  return (
    <div className='sidebar'>

      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className='sidebarIcon' />
            <span className='sidebarlistItemText'>Feed</span>
          </li>
          <li className="sidebarListItem">
            <Chat className='sidebarIcon' />
            <span className='sidebarlistItemText'>Chats</span>
          </li>
          <li className="sidebarListItem">
            <VideoSettings className='sidebarIcon' />
            <span className='sidebarlistItemText'>Videos</span>
          </li>

          <li className="sidebarListItem">
            <Bookmark className='sidebarIcon' />
            <span className='sidebarlistItemText'>Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <Group className='sidebarIcon' />
            <span className='sidebarlistItemText'>Groups</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className='sidebarIcon' />
            <span className='sidebarlistItemText'>Question</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className='sidebarIcon' />
            <span className='sidebarlistItemText'>Jobs</span>
          </li>
          <li className="sidebarListItem">
            <Event className='sidebarIcon' />
            <span className='sidebarlistItemText'>Events</span>
          </li>
          <li className="sidebarListItem">
            <School className='sidebarIcon' />
            <span className='sidebarlistItemText'>Courses</span>
          </li>
        </ul>

        <button className='sidebarButton'>Show More</button>
        <hr className='sidebarHr' />


        <ul className="sidebarFriendList">
          {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  )
}

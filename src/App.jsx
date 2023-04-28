import user from './components/Profile/user.json';
import Profile from "./components/Profile/Profile";

import './index.css';
import data from './components/Statistics/data.json';
import Statistics from 'components/Statistics/Statistics';

import friends from './components/FriendList/friends.json';
import FriendList from  './components/FriendList/FriendList'


export default function App() {
  return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        }}>

        <Profile
          key={user.tag}
          avatar={user.avatar}
          username={user.username}
          tag={user.tag}
          location={user.location}
          stats={user.stats}
        />
        <Statistics title="Upload stats" stats={data} />
        <Statistics stats={data} />
        <FriendList friends={friends} />;
      </div>
  );
};


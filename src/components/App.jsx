import user from './Profile/user.json';
import Profile from "./Profile/Profile";

import '../index.css';

export default function App() {
  return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',}}>

        <Profile
          key={user.tag}
          avatar={user.avatar}
          username={user.username}
          tag={user.tag}
          location={user.location}
          stats={user.stats}
        />
      </div>
  );
};

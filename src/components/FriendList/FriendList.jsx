import PropTypes from 'prop-types';
import { ListFriend } from './FriendList.styled'
import FriendListItem from './FriendListItem/FriendListItem';

function FriendList({ friends }) {
  return (
    <ListFriend>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
      ))}
    </ListFriend>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};

export default FriendList;
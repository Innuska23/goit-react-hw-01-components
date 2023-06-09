import PropTypes from 'prop-types';
import { ListItem, ItemStatus, ItemImage, ItemName } from './FriendListItem.styled';

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <ListItem>
      <ItemStatus isOnline={isOnline}></ItemStatus>
      <ItemImage src={avatar} alt={name} />
      <ItemName>{name}</ItemName>
    </ListItem>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
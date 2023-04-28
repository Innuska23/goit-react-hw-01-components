import PropTypes from 'prop-types';
import { CardUser, UserName, Avatar, Name, Info, Stats, StatsItem, StatsInformation, StatsInfoQuantity } from './Profile.styled';

function Profile({ avatar, username, tag, location, stats }) {
    return (
        <CardUser>
            <Avatar src={avatar} alt='User avatar' />
            <UserName>
                <Name>{username}</Name>
                <Info>@{tag}</Info>
                <Info>{location}</Info>
            </UserName>
            <Stats>
                <StatsItem>
                    <StatsInformation>Followers</StatsInformation>
                    <StatsInfoQuantity>{stats.followers}</StatsInfoQuantity>
                </StatsItem>
                <StatsItem>
                    <StatsInformation>Views</StatsInformation>
                    <StatsInfoQuantity>{stats.views}</StatsInfoQuantity>
                </StatsItem>
                <StatsItem>
                    <StatsInformation>Likes</StatsInformation>
                    <StatsInfoQuantity>{stats.likes}</StatsInfoQuantity>
                </StatsItem>
            </Stats>
        </CardUser>
    )
}


Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.exact({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }),
};

export default Profile;
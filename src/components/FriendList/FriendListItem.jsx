import {Item, Avatar, Status, NameAvatar} from './FriendListItem.styled';
import PropTypes from 'prop-types';



export const FriendListItem = ({avatar, name, id, isOnline}) => {
    return(
        <Item key={id}>
            <Status statusType={isOnline}>{isOnline}</Status>
            <Avatar src={avatar} alt={name} width="48" />
            <NameAvatar>{name}</NameAvatar>
        </Item>
    )
}

FriendListItem.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}

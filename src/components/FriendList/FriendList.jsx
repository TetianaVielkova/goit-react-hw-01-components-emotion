import {List} from './FriendList.styles';
import { FriendListItem } from './FriendListItem';



export const FriendList = ({friends}) => {
    return(
        <List>
            {friends.map(({avatar, name, id, isOnline}) => (
                <FriendListItem 
                    key={id}
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline}
                />
            ))}
        </List>
    )
}
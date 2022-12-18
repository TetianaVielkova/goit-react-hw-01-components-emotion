import styled from '@emotion/styled';


export const Item = styled.li`
    display: flex;
    align-items: center;
    border: var(--main-border);
    border-radius: 5px;
    box-shadow: var(--main-shadow);

    :not(:last-child){
        margin-bottom: 15px;
    }
`;

export const Status = styled.span`
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => (props.statusType ? 'green' : 'red')};
    margin: 30px;
`;


export const Avatar = styled.img`
    width: 100px;
    border: 10px;
    padding: 15px;
`;

export const NameAvatar = styled.p`
    font-family: var(--main-font-family);
    font-size: 32px;
    font-weight: 500;
    margin-left: 30px;
`;

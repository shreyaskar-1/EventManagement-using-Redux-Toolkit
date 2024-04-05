import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { MdDeleteForever } from 'react-icons/md';
import { removeUser } from '../store/slices/UserSlice';

const DisplayUsers = () => {
    const dispatch = useDispatch();

    const data = useSelector((state) => {
        return state.users;
    });

    const deleteUser = (id) => {
        dispatch(removeUser(id));
    }

    return (
        <Wrapper>
            {data.map((user, id) => (
                <ListItem key={id}>
                <Divider />
                <div className='user'>
                    <UserName>{user}</UserName>
                    <DeleteButton onClick={() => deleteUser(id)}>
                        <MdDeleteForeverIcon />
                    </DeleteButton>
                    </div>

                </ListItem>
            ))}
        </Wrapper>
    );
};

const Wrapper = styled.section`
.user{
    display:flex;
    justify-content:space-between;
}
`;

const ListItem = styled.li`

`;

const UserName = styled.span`

`;



const DeleteButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
`;

const MdDeleteForeverIcon = styled(MdDeleteForever)`
    color: red; 
    font-size: 20px; 
`;

const Divider = styled.hr`
    flex-grow: 1; 
    height: 1px;
    border: none;
    background-color: #e4e4e4;
    margin-bottom:2px; 
`;

export default DisplayUsers;

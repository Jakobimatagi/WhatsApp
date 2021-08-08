import React from 'react'
import styled from  'styled-components'
import { Avatar } from '@material-ui/core'
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { IconButton, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search'
import * as EmailValidator from 'email-validator'
function SideBar() {


    const createChat = () => {
        const input = prompt('Please enter an email address for the user you wish to chat with');

        if (!input) return null;

        if (EmailValidator.validate(input)) {
            // We need to add chat into db
        }
    }


    return (
        <Container>
            <Header>
                <UserAvatar />

                <IconsContainer>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </IconsContainer>
            </Header>

            <Search>
                <SearchIcon />
                <SearchInput />
            </Search>

            <SideBarButton onCLick={createChat}>Start a new chat</SideBarButton>
            
            {/* list of chats */}


        </Container>
    )
}

export default SideBar;


const Container = styled.div``;

const Search = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
    border-radius: 2px;
`;

const SearchInput = styled.input`
    outline-width: 0;
    border: none;
    flex: 1;
`;

const SideBarButton = styled(Button)`
    width: 100%;
    
    &&&{
        border-top: 1px solid whitesmoke;
        border-bottom: 1px solid whitesmoke;
    }
`;

const Header = styled.div`
    display: flex;
    position: sticky;
    top: 0;
    background-color: white;
    z-index: 1;
    justify-content: space-between;
`;

const UserAvatar = styled(Avatar)`
`;

const IconsContainer = styled.div``;
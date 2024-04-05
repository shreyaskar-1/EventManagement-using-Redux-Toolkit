import React from 'react';
import styled from "styled-components";

const Wrapper = styled.section`
  /* Add wrapper styles here */
`;

const NavWrapper = styled.nav`
  margin: 3rem 0;
  background: #f9f9f9;
  padding: 1rem 0;
`;

const MenuItems = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const MenuItem = styled.li`
  margin: 1.6rem 5rem;
`;

const MenuLink = styled.a`
  text-decoration: none;
  color: #8f8f8f;
  font-size: 24px;
  font-weight: 400;
  transition: all 0.5s ease-in-out;
  position: relative;
  text-transform: uppercase;

  &:hover::before {
    width: 100%;
    transition: all 0.5s ease-in-out;
  }
`;

const Navbar = () => {
  return (
    <Wrapper>
      <div>
        Welcome, To Event Hub
      </div>
      <h1>Admin Table</h1>

      <div>
          One Destination For All The Events
        </div>
      <NavWrapper>
        <MenuItems>
          <MenuItem>
            <MenuLink href='/' data-item="Home">Home</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink href='/about' data-item="About">About</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink href='/projects' data-item="Projects">Projects</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink href='/code' data-item="Code">Code</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink href='/contact' data-item="Contact">Contact</MenuLink>
          </MenuItem>
        </MenuItems>
      </NavWrapper>
    </Wrapper>
  );
};

export default Navbar;

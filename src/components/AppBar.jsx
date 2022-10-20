import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Box } from './Box';

const navItems = [
  { href: 'home', text: 'Home' },
  { href: 'movies', text: 'Movies' },
];

const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: ${p => p.theme.space[3]}px;
  border-radius: 4px;
  text-decoration: none;
  color: ${p => p.theme.colors.text};
  margin-right: 10px;

  &.active {
    background-color: ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.white};
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.text};
    background-color: ${p => p.theme.colors.secondary};
  }
`;

const AppBar = () => {
  return (
    <HeaderStyled as="header" p={4}>
      <Box as="nav" display="flex">
        {navItems.map(({ href, text }) => (
          <NavItem to={href} key={href}>
            {text}
          </NavItem>
        ))}
      </Box>
    </HeaderStyled>
  );
};

const HeaderStyled = styled(Box)`
  height: 30px;
  box-shadow: 0px 5px 9px 0px grey;
  margin-bottom: 20px;
`;

export default AppBar;

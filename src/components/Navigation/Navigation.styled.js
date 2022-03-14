import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 15px;
  font-weight: 600;
  color: #000;
  font-size: 20px;

  &.active {
    color: blue;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 80px;
  margin-bottom: 16px;
  border-bottom: 1px solid #2a363b;
`;

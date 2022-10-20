import { Suspense } from 'react';
import { Box } from './Box';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import AppBar from './AppBar';

const Layout = () => {
  return (
    <DivStyles>
      <AppBar />
      <Suspense fallback="Loading...">
        <Outlet />
      </Suspense>
    </DivStyles>
  );
};

const DivStyles = styled(Box)`
  display: grid;
`;

export default Layout;

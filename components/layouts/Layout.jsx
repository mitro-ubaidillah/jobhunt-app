import { Stack } from '@chakra-ui/react';
import React from 'react';

const Layout = ({ children }) => {
    return (
        <Stack
            bg={'backgroundPrimary'}
            px={{ base: '30px', md: '50px', lg: '60px' }}
            py={{ base:'27px',md:'50px',lg:'27px' }}
        >
            {children}
        </Stack>
    );
}

export default Layout;

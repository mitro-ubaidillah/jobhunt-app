import { Stack } from '@chakra-ui/react';
import React from 'react';

const Layout = ({children}) => {
    return (
        <Stack
            bg={'backgroundPrimary'}
            px={'60px'}
            py={'27px'}
        >
            {children}
        </Stack>
    );
}

export default Layout;

import { Box, Flex } from '@chakra-ui/react';
import React from 'react';

const Index = () => {
    return (
        <Flex
            flexWrap={'wrap'}
        >
            <Box
                flexBasis={'50%'}
                bgImage={`url(/images/login-image.png)`}
            >
                halo
            </Box>
            <Box
                flexBasis={'50%'}
            >
                
            </Box>
        </Flex>
    );
}

export default Index;

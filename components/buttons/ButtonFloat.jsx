import { Box, Button, Flex, Text, keyframes } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

const ButtonFloat = () => {
    const animationKeyframes = keyframes`
        0% { transform: rotate(-20deg) }
        50% { transform: rotate(20deg) }
        100% { transform: rotate(-20deg) }
    `;

    const animation = `${animationKeyframes}  2s ease-in-out infinite`;

    return (
        <Button
            borderRadius={'full'}
            p={'0'}
            height={'54px'}
            pr={'46px'}
        >
            <Flex
                align={'center'}
            >
                <Box
                    bg={'white'}
                    borderRadius={'full'}
                    p={'13px'}
                    mr={'12px'}
                    shadow={'lg'}
                >
                    <Box
                        as={motion.div}
                        animation={animation}

                    >
                        <Image src={'/images/icons/diamondNew.png'} width={'40'} height={'41'} alt='diamond icon' />
                    </Box>
                </Box>
                <Box>
                    <Text
                        color={'primary'}
                        fontSize={'14px'}
                        fontWeight={'600'}
                    >
                        Get Premium
                    </Text>
                    <Text
                        fontSize={'12px'}
                        fontWeight={'300'}
                        color={'fontPrimary'}
                    >
                        For easy application
                    </Text>
                </Box>
            </Flex>
        </Button>
    );
}

export default ButtonFloat;

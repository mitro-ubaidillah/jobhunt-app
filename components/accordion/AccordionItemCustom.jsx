import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { AccordionButton, AccordionItem, AccordionPanel, Box } from '@chakra-ui/react';
import React from 'react';

const AccordionItemCustom = ({ title, body }) => {
    return (
        <AccordionItem
            borderBottom={'1px'}
            p={'10px'}
            borderTop={'none'}
            borderColor={'#EBE8E8'}
        >
            {({ isExpanded }) => (
                <>
                    <h2>
                        <AccordionButton>
                            <Box
                                flex="1"
                                textAlign="left"
                                color={isExpanded ? 'primary' : 'fontPrimary'}
                                fontSize={'18px'}
                                fontWeight={'500'}
                            >
                                {title}
                            </Box>
                            {isExpanded ? (
                                <MinusIcon w={4} h={4} color={'primary'} />
                            ) : (
                                <AddIcon w={3} h={3} color={'fontPrimary'} />
                            )}
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} borderTop={'1px'} borderColor={'#EBE8E8'} pt={'30px'} pl={0}>
                        {body}
                    </AccordionPanel>
                </>
            )}
        </AccordionItem>
    );
}

export default AccordionItemCustom;

import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from '@chakra-ui/react';
import React from 'react';
import AccordionItemCustom from './AccordionItemCustom';

const AccordionForm = ({ children, width }) => {
    return (
        <Accordion
            allowToggle
            bg={'backgroundPrimary'}
            borderColor={'transparent'}
            border={'none'}
            width={width}
        >
            {children}
        </Accordion>
    );
}

export default AccordionForm;

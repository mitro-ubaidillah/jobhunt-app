import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from '@chakra-ui/react';
import React from 'react';
import AccordionItemCustom from './AccordionItemCustom';

const AccordionForm = () => {
    return (
        <Accordion allowMultiple>
            <AccordionItemCustom />
            <AccordionItemCustom />
        </Accordion>
    );
}

export default AccordionForm;

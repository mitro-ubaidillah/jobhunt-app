import { ButtonGroup, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from '@chakra-ui/react';
import React from 'react';
import ButtonPrimary from '../buttons/ButtonPrimary';
import ButtonSecondary from '../buttons/ButtonSecondary';
import ButtonAlternative from '../buttons/ButtonAlternative';
import Image from 'next/image';

const PopUpDialog = ({ isOpen, onClose, title, body, onClickConfirm, titleButtonCancel, titleButtonConfirm }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader
                    fontWeight={'500'}
                    fontSize={'16px'}
                    lineHeight={'28px'}
                >
                    {title}
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    {body}
                </ModalBody>

                <ModalFooter>
                    <ButtonGroup
                        justifyContent={'space-between'}
                        width={'full'}
                    >
                        <ButtonAlternative
                            onClick={onClose}
                        >
                            <Image src={'/images/icons/delete-icon.png'} height='18' width='18' alt='trash-icon'/>
                            <Text pt={'4px'}>{titleButtonCancel}</Text>
                        </ButtonAlternative>
                        <ButtonPrimary
                            width={'121px'}
                            onClick={onClickConfirm}
                        >
                            {titleButtonConfirm}
                        </ButtonPrimary>
                    </ButtonGroup>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}

export default PopUpDialog;

import { ButtonGroup, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react';
import React from 'react';
import ButtonPrimary from '../buttons/ButtonPrimary';
import ButtonSecondary from '../buttons/ButtonSecondary';

const PopUpDialogNoClose = ({ isOpen, onClose, title, body, onClickConfirm, titleButtonCancel, titleButtonConfirm }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent
                px={'30px'}
                py={'40px'}
                textAlign={'center'}
            >
                <ModalHeader
                    mx={'auto'}
                    fontWeight={'600'}
                    fontSize={'20px'}
                    lineHeight={'28px'}
                    maxWidth={'256px'}
                    mb={'12px'}
                    p={0}
                    >
                    {title}
                </ModalHeader>
                <ModalBody
                    p={0}
                    mx={'auto'}
                    mb={'30px'}
                    fontWeight={'400'}
                    fontSize={'14px'}
                    lineHeight={'19px'}
                    maxWidth={'340px'}
                >
                    {body}
                </ModalBody>

                <ModalFooter>
                    <ButtonGroup
                        justifyContent={'space-between'}
                        width={'full'}
                    >
                        <ButtonSecondary
                            onClick={onClose}
                            width={'172px'}
                            height={'38px'}
                            >
                            {titleButtonCancel}
                        </ButtonSecondary>
                        <ButtonPrimary
                            height={'38px'}
                            width={'172px'}
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

export default PopUpDialogNoClose;

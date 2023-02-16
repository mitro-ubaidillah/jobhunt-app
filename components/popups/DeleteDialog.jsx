import { ButtonGroup, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react';
import React from 'react';
import ButtonPrimary from '../buttons/ButtonPrimary';
import ButtonSecondary from '../buttons/ButtonSecondary';

const DeleteDialog = ({ isOpen, onClose, onClickConfirm }) => {
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
                    Anda yakin ingin menghapus data ini?
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
                    Data yang di hapus akan hilang dan tidak dapat di akses kembali
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
                            Batal
                        </ButtonSecondary>
                        <ButtonPrimary
                            height={'38px'}
                            width={'172px'}
                            onClick={onClickConfirm}
                        >
                            Hapus data
                        </ButtonPrimary>
                    </ButtonGroup>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}

export default DeleteDialog;

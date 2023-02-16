import { Box, Center, FormControl, FormLabel, Grid, Input, Text } from '@chakra-ui/react';
import React from 'react';
import ButtonSecondary from '../buttons/ButtonSecondary';
import Image from 'next/image';

const InputImage = ({ previewImage, onRemoveImage, onChangeImage }) => {
    return (
        <FormControl>
            <FormLabel
                fontSize={'14px'}
                fontWeight={'300'}
                color={'fontPrimary'}
            >
                Unggah Sertifikat
            </FormLabel>
            {previewImage ? (
                <>
                    <Box>
                        <ButtonSecondary
                            onClick={onRemoveImage}
                        >
                            Hapus Foto
                        </ButtonSecondary>
                    </Box>
                </>
            ) : (
                <></>
            )}
            <Input
                // {...register("fotoKTP")}
                type="file"
                id="img"
                name="sertifikat"
                accept="image/*"
                display={'none'}
                onChange={onChangeImage}
            />
            <Box
                py={'18px'}
                border={'1px'}
                borderColor={'#C4C4C4'}
                borderRadius={'4px'}
                w="100%"
            >
                <FormControl>
                    <FormLabel htmlFor="img" style={{ cursor: 'pointer' }}>
                        <Grid justifyContent={'center'} alignContent={'center'} w="100%">
                            {previewImage ? (
                                <>
                                    <Box w={'100%'} pt={10}>
                                        <Image src={previewImage} width={'300'} height={'300'} alt='Sertifikat'/>
                                    </Box>
                                </>
                            ) : (
                                <Box>
                                    <Center mb={'26px'}>
                                        <Image src='/images/img.png' width="22" height="22" alt='img' />
                                    </Center>
                                    <Center width={'100%'}>
                                        <span>
                                            <FormLabel
                                                htmlFor="img"
                                                border={'1px'}
                                                fontSize={'13px'}
                                                width={'full'}
                                                px={'23px'}
                                                py={'5px'}
                                                borderRadius={'4px'}
                                                fontWeight={'600'}
                                                color={'primary'}
                                                cursor={'pointer'}
                                                textAlign={'center'}
                                            >
                                                Pilih Foto
                                            </FormLabel>
                                        </span>
                                    </Center>
                                    <Text color={'fontPrimary'}>Size max. 5 MB</Text>
                                </Box>
                            )}
                        </Grid>
                    </FormLabel>
                </FormControl>
            </Box>
        </FormControl>
    );
}

export default InputImage;

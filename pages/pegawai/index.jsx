import React, { useEffect, useState } from 'react';
import Layout from '../../components/layouts/Layout';
import Navbar from '../../components/layouts/Navbar';
import Cookies from 'js-cookie';
import { onLogoutHandler } from '../../utils/Auth/Logout';
import { Auth } from '../../utils/Auth/Auth';
import { useRouter } from 'next/router';
import { Box, Stack, Text } from '@chakra-ui/layout';
import AccordionForm from '../../components/accordion/AccordionForm';
import AccordionItemCustom from '../../components/accordion/AccordionItemCustom';
import FormPersonal from '../../components/form/FormPersonal';
import { api } from '../../service/api';
import ButtonPrimary from '../../components/buttons/ButtonPrimary';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { DataPegawaiValidation } from '../../utils/validations/DataPegawaiValidation';
import ButtonAdd from '../../components/buttons/ButtonAdd';
import FormRiwayatPendidikan from '../../components/form/FormRiwayatPendidikan';
import { useDisclosure } from '@chakra-ui/react';
import DeleteDialog from '../../components/popups/DeleteDialog';
import FormSertifikasi from '../../components/form/FormSertifikasi';

const Index = ({ provinsi, kota, pendidikan, bidang }) => {
    const auth = Auth();
    const router = useRouter();
    const [prov, setProv] = useState();
    const [birth, setBirth] = useState();
    const [age, setAge] = useState('0');
    const [previewImage, setPreviewImage] = useState();
    const [imageSertifikat, setImageSertifikat] = useState();

    const { isOpen: isOpenRiwayat, onOpen: onOpenRiwayat, onClose: onCloseRiwayat } = useDisclosure()
    const { isOpen: isOpenDeleteDialog, onOpen: onOpenDeleteDialog, onClose: onCloseDeleteDialog } = useDisclosure()

    const { isOpen: isOpenSertifikasi, onOpen: onOpenSertifikasi, onClose: onCloseSertifikasi } = useDisclosure()

    const onLogout = () => {
        onLogoutHandler();
    }

    const onChangeBorn = (e) => {
        setBirth(e);
        setValue('TanggalLahir', e);
        const today = new Date();
        const born = new Date(birth)
        const newAge = birth ? Math.floor((today - born) / (365.25 * 24 * 60 * 60 * 1000)) : 0
        setValue('Umur', newAge)
        setAge(newAge);
    }

    const { register, handleSubmit, formState: { errors }, setValue } = useForm({
        mode: 'onTouched',
        resolver: yupResolver(DataPegawaiValidation)
    })

    const onSubmit = (data) => { console.log(data) }

    const newKota = kota?.filter((data) => {
        return data.Kd_Provinsi == prov;
    });

    const onHandlePreviewImage = (file) => {
        setImageSertifikat(file);
        const reader = new FileReader();
        reader.onload = () => {
            setPreviewImage(reader.result);
        }
        reader.readAsDataURL(file);
    }

    useEffect(() => {
        if (!auth) {
            router.push('/login')
        }
    }, []);

    return (
        <Layout>
            <Navbar auth={true} titlePage={'Data Pegawai'} onLogout={() => onLogout()} />
            <Stack
                textAlign={'center'}
                pt={'70px'}
                align={'center'}
            >
                <AccordionForm
                    width={'610px'}
                >
                    <FormPersonal
                        onChangeBirth={(e) => onChangeBorn(e.target.value)}
                        provinsi={provinsi}
                        onChangeProv={(e) => setProv(e.target.value)}
                        kota={newKota}
                        ageValue={age}
                        registerAddress={register('AlamatLengkap')}
                        registerAge={register('Umur')}
                        registerKota={register('Kd_Kota')}
                        registerName={register('NamaLengkap')}
                        registerProv={register('Kd_Provinsi')}
                        errorsName={errors.NamaLengkap}
                        errorsAddress={errors.AlamatLengkap}
                        errorsAge={errors.Umur}
                        errorsBorn={errors.TanggalLahir}
                        errorsKota={errors.Kd_Kota}
                        errorsProv={errors.Kd_Provinsi}
                    />
                    <AccordionItemCustom
                        title={'Riawayat Pendidikan'}
                        body={
                            <Box
                                textAlign={'left'}
                            >
                                <ButtonAdd
                                    onClick={onOpenRiwayat}
                                >
                                    Tambah riwayat pendidikan
                                </ButtonAdd>
                            </Box>
                        }
                    />
                    <AccordionItemCustom
                        title={'Sertifikasi'}
                        body={
                            <Box
                                textAlign={'left'}
                            >
                                <ButtonAdd
                                    onClick={onOpenSertifikasi}
                                >
                                    Tambah sertifikasi
                                </ButtonAdd>
                            </Box>
                        }
                    />
                </AccordionForm>
                <Box
                    width={'610px'}
                    textAlign={'right'}
                    pt={'80px'}
                >
                    <ButtonPrimary
                        width={'140px'}
                        onClick={handleSubmit(onSubmit)}
                    >
                        Simpan
                    </ButtonPrimary>
                </Box>
            </Stack>
            {/* dialog box riwayat pendidikan */}
            <FormRiwayatPendidikan
                isOpen={isOpenRiwayat}
                onClose={onCloseRiwayat}
                jenjang={pendidikan}
                onClickDelete={onOpenDeleteDialog}
            />
            <DeleteDialog
                isOpen={isOpenDeleteDialog}
                onClose={onCloseDeleteDialog}
            />

            {/* dialog box sertifikasi */}
            <FormSertifikasi
                isOpen={isOpenSertifikasi}
                onClose={onCloseSertifikasi}
                bidang={bidang}
                previewImage={previewImage}
                onChangeImage={(e) => onHandlePreviewImage(e.target.files[0])}
                onRemoveImage={()=>setPreviewImage(null)}
            />
        </Layout>

    );
}

export async function getServerSideProps() {
    const result = await api.getAllProvinsi();
    const resultKota = await api.getAllKota();
    const resultPendidikan = await api.getAllPendidikan();
    const resultBidang = await api.getAllBidang();

    const dataProvinsi = result.data.data;
    const dataKota = resultKota.data.data;
    const dataPendidikan = resultPendidikan.data.data;
    const dataBidang = resultBidang.data.data;

    return {
        props: {
            provinsi: dataProvinsi,
            kota: dataKota,
            pendidikan: dataPendidikan,
            bidang: dataBidang,
        }
    }
}



export default Index;

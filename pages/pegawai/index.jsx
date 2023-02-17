import React, { useEffect, useState } from 'react';
import Layout from '../../components/layouts/Layout';
import Navbar from '../../components/layouts/Navbar';
import Cookies from 'js-cookie';
import { onLogoutHandler } from '../../utils/Auth/Logout';
import { Auth } from '../../utils/Auth/Auth';
import { useRouter } from 'next/router';
import { Box, Stack, Text, Flex } from '@chakra-ui/layout';
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
import { Button, useDisclosure } from '@chakra-ui/react';
import DeleteDialog from '../../components/popups/DeleteDialog';
import FormSertifikasi from '../../components/form/FormSertifikasi';
import axios from 'axios';
import { SertivikasiValidation } from '../../utils/validations/SertifikasiValidation';
import { useDispatch, useSelector } from 'react-redux';
import { addSertifikat, destroySertifikat, editSertifikat } from '../../redux/slice/SertifikasiSlice';
import Image from 'next/image';
import SuccessAlert from '../../components/alerts/SuccessAlert';
import FailedAlert from '../../components/alerts/FailedAlert';
import { DataPendidikan } from '../../utils/validations/DataPendidikan';
import { addPendidikan } from '../../redux/slice/PendidikanSlice';

const Index = ({ provinsi, kota, pendidikan, bidang }) => {
    const auth = Auth();
    const router = useRouter();
    const [prov, setProv] = useState();
    const [birth, setBirth] = useState();
    const [age, setAge] = useState('0');
    const [previewImage, setPreviewImage] = useState();
    const [imageSertifikat, setImageSertifikat] = useState('');
    const [requiredImage, setRequiredImage] = useState(true);
    const [idSertifikasi, setIdSertifikasi] = useState();
    const token = Cookies.get('token');
    const dispatch = useDispatch();
    const sertifikasi = useSelector((state) => state.sertifikasi);
    const riwayat = useSelector((state) => state.pendidikan);

    const { isOpen: isOpenRiwayat, onOpen: onOpenRiwayat, onClose: onCloseRiwayat } = useDisclosure()
    const { isOpen: isOpenDeleteDialog, onOpen: onOpenDeleteDialog, onClose: onCloseDeleteDialog } = useDisclosure()

    const { isOpen: isOpenSertifikasi, onOpen: onOpenSertifikasi, onClose: onCloseSertifikasi } = useDisclosure()
    const { isOpen: isOpenEditSertifikasi, onOpen: onOpenEditSertifikasi, onClose: onCloseEditSertifikasi } = useDisclosure()

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

    //handle upload data pegawai
    const onHandleDataPegawai = async(data) => {
        await axios.post(`https://klinikme-test-api.herokuapp.com/api/v1/daftar_pegawai`, data, {
            headers: {
                Authorization: `Bearer ${token}`,
                'content-type': 'multipart/form-data'
            }
        })
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    const onSubmit = (data) => {
        // console.log(data)
        const formData = new FormData()
        formData.append('NamaLengkap', data.NamaLengkap)
        formData.append('AlamatLengkap', data.AlamatLengkap);
        formData.append('Umur', data.Umur);
        formData.append('TanggalLahir', data.TanggalLahir);
        formData.append('Kd_Provinsi', data.Kd_Provinsi);
        formData.append('Kd_Kota', data.Kd_Kota);
        formData.append('RiwayatPendidikan', JSON.stringify(riwayat));
        formData.append('Sertifikasi', JSON.stringify(sertifikasi));
        
        console.log(formData.get('RiwayatPendidikan'));
    };

    //validation Personal Data
    const { register, handleSubmit, formState: { errors }, setValue } = useForm({
        mode: 'onTouched',
        resolver: yupResolver(DataPegawaiValidation)
    })

    //validation Data sertifikasi
    const { register: onAddSertifikasi, handleSubmit: onSubmitSertifikasi, formState: { errors: errorsSertifikasi }, setValue: setSertifikasi } = useForm({
        mode: 'all',
        resolver: yupResolver(SertivikasiValidation)
    });

    //validation data pendidikan
    const {register: onAddPendidikan, handleSubmit: onSubmitPendidikan, formState: {errors: errorsPendidikan}, setValue: setPendidikan} = useForm({
        mode: 'all',
        resolver: yupResolver(DataPendidikan)
    })

    const newKota = kota?.filter((data) => {
        return data.Kd_Provinsi == prov;
    });

    //handle sertifikat

    const onHandlePreviewImage = (file) => {
        setImageSertifikat(file);
        setRequiredImage(false)
        const reader = new FileReader();
        reader.onload = () => {
            setPreviewImage(reader.result);
        }
        reader.readAsDataURL(file);
    }

    const onHandleUploadImage = async (NamaLembaga, Id_Bidang) => {
        const data = new FormData();
        data.append('image', imageSertifikat);

        await axios.post('https://klinikme-test-api.herokuapp.com/api/v1/upload_image', data, {
            headers: {
                Authorization: `Bearer ${token}`,
                'content-type': 'multipart/form-data'
            }
        })
            .then(response => {
                const linkImage = response.data.data.linkImage;
                setSertifikasi('DokumenSertifikat', linkImage)
                dispatch(addSertifikat({
                    NamaLembaga: NamaLembaga,
                    Id_Bidang: Id_Bidang,
                    DokumenSertifikat: linkImage
                }));
                SuccessAlert('Data berhasil di simpan')
                setPreviewImage(null);
                setImageSertifikat('');
            })
            .catch(error => {
                FailedAlert('Data gagal di simpan')
            })
    }

    const onUpdateImage = async (NamaLembaga, Id_Bidang) => {
        const data = new FormData();
        data.append('image', imageSertifikat);

        await axios.post('https://klinikme-test-api.herokuapp.com/api/v1/upload_image', data, {
            headers: {
                Authorization: `Bearer ${token}`,
                'content-type': 'multipart/form-data'
            }
        })
            .then(response => {
                const linkImage = response.data.data.linkImage;
                setSertifikasi('DokumenSertifikat', linkImage)
                dispatch(editSertifikat({
                    NamaLembaga: NamaLembaga,
                    Id_Bidang: Id_Bidang,
                    DokumenSertifikat: linkImage
                }));
                SuccessAlert('Data berhasil di simpan')
                setPreviewImage(null);
                setImageSertifikat('');
            })
            .catch(error => {
                FailedAlert('Data gagal di simpan')
            })
    }

    const onHandleSertifikasi = (data) => {
        onHandleUploadImage(data.NamaLembaga, data.Id_Bidang)
        setSertifikasi('NamaLembaga', '');
        setSertifikasi('Id_Bidang', '');
        setSertifikasi('DokumenSertifikat', '');
        onCloseSertifikasi();
    }

    const onHandleUpdateSertifikasi = (data) => {
        onUpdateImage(data.NamaLembaga, data.Id_Bidang);
    }

    const onEditSertifikat = (id) => {
        sertifikasi?.map((data) => {
            data.id == id &&
            setSertifikasi('NamaLembaga', data.NamaLembaga);
            setSertifikasi('Id_Bidang', data.Id_Bidang);
            setSertifikasi('DokumenSertifikat', data.DokumenSertifikat);
            setPreviewImage(data.DokumenSertifikat);
        })
        setIdSertifikasi(id);
        onOpenEditSertifikasi();
    }

    const onRemoveImage = () => {
        setPreviewImage(null);
        setImageSertifikat('');
        setRequiredImage(false)
    }

    const onCloseDialogSertifikat = () => {
        setSertifikasi('NamaLembaga', '')
        setSertifikasi('Id_Bidang', '')
        setSertifikasi('DokumenSertifikat', '')
        setPreviewImage('');
        setImageSertifikat('');
        onCloseSertifikasi()
        onCloseEditSertifikasi()
    }

    const onDeleteSertifikat = () => {
        dispatch(destroySertifikat({id: idSertifikasi}))
        onCloseEditSertifikasi()
    }

    //handle pendidikan
    const onHandleDataPendidikan = (data) => {
        dispatch(addPendidikan({
            Kd_Pendidikan: data.Kd_Pendidikan,
            NamaSekolah: data.NamaSekolah,
            TanggalMulai: data.TanggalMulai,
            TanggalSelesai: data.TanggalSelesai,
        }));
        setPendidikan('Kd_Pendidikan', '');
        setPendidikan('NamaSekolah', '');
        setPendidikan('TanggalMulai', '');
        setPendidikan('TanggalSelesai', '');
        SuccessAlert('Data berhasil disimpan')
        onCloseRiwayat();
    }

    const onCloseDialogRiwayat = () => {
        setPendidikan('Kd_Pendidikan', '');
        setPendidikan('NamaSekolah', '');
        setPendidikan('TanggalMulai', '');
        setPendidikan('TanggalSelesai', '');
        onCloseRiwayat();
    }

    console.log(riwayat)

    useEffect(() => {
        if (!auth) {
            router.push('/login')
        }
    }, [requiredImage, auth]);

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
                                {
                                    riwayat?.map((data) => (
                                        pendidikan.map((item) => (
                                            data.Kd_Pendidikan == item.Kd_Pendidikan &&
                                            <>
                                                <Flex
                                                    justify={'space-between'}
                                                    align={'center'}
                                                    my={'24px'}
                                                    key={item.id}
                                                >
                                                    <Box>
                                                        <Text
                                                            fontWeight={'500'}
                                                            fontSize={'18px'}
                                                            color={'fontPrimary'}
                                                        >
                                                            {data.NamaSekolah}
                                                        </Text>
                                                        <Text
                                                            fontWeight={'300'}
                                                            fontSize={'16px'}
                                                            color={'fontPrimary'}
                                                        >
                                                            {item.Pendidikan}
                                                        </Text>
                                                        <Text
                                                            fontWeight={'300'}
                                                            fontSize={'14px'}
                                                            color={'fontPrimary'}
                                                        >
                                                            {`${data.TanggalMulai} - ${data.TanggalSelesai}`}
                                                        </Text>
                                                    </Box>
                                                    <Box
                                                        cursor={'pointer'}
                                                        onClick={() => onEditSertifikat(item.id)}
                                                    >
                                                        <Image src={'/images/icons/edit.png'} width={'24'} height={'24'} alt='edit icon' />
                                                    </Box>
                                                </Flex>
                                            </>
                                        ))
                                    ))
                                }
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
                                {
                                    sertifikasi?.map((item) =>
                                    (
                                        bidang?.map((data) =>
                                        (
                                            data.Id_Bidang == item.Id_Bidang &&
                                            <>
                                                <Flex
                                                    justify={'space-between'}
                                                    align={'center'}
                                                    my={'24px'}
                                                    key={item.id}
                                                >
                                                    <Box>
                                                        <Text
                                                            fontWeight={'500'}
                                                            fontSize={'18px'}
                                                            color={'fontPrimary'}
                                                        >
                                                            {item.NamaLembaga}
                                                        </Text>
                                                        <Text
                                                            fontWeight={'300'}
                                                            fontSize={'16px'}
                                                            color={'fontPrimary'}
                                                        >
                                                            {data.NamaBidang}
                                                        </Text>
                                                    </Box>
                                                    <Box
                                                        cursor={'pointer'}
                                                        onClick={() => onEditSertifikat(item.id)}
                                                    >
                                                        <Image src={'/images/icons/edit.png'} width={'24'} height={'24'} alt='edit icon' />
                                                    </Box>
                                                </Flex>
                                            </>
                                        ))
                                    ))
                                }
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
                onClose={()=>onCloseDialogRiwayat()}
                jenjang={pendidikan}
                onClickDelete={onOpenDeleteDialog}
                errorsJenjang={errorsPendidikan.Kd_Pendidikan}
                errorsNamaSekolah={errorsPendidikan.NamaSekolah}
                errorsTanggalMulai={errorsPendidikan.TanggalMulai}
                errorsTanggalSelesai={errorsPendidikan.TanggalSelesai}
                registerJenjang={onAddPendidikan('Kd_Pendidikan')}
                registerNamaSekolah={onAddPendidikan('NamaSekolah')}
                registerTanggalMulai={onAddPendidikan('TanggalMulai')}
                registerTanggalSelesai={onAddPendidikan('TanggalSelesai')}
                onClickConfirm={onSubmitPendidikan(onHandleDataPendidikan)}
            />


            <DeleteDialog
                isOpen={isOpenDeleteDialog}
                onClose={onCloseDeleteDialog}
            />

            {/* dialog box sertifikasi */}
            <FormSertifikasi
                isOpen={isOpenSertifikasi}
                onClose={onCloseDialogSertifikat}
                bidang={bidang}
                previewImage={previewImage}
                onChangeImage={(e) => onHandlePreviewImage(e.target.files[0])}
                onRemoveImage={() => onRemoveImage()}
                onClickConfirm={onSubmitSertifikasi(onHandleSertifikasi)}
                errorsBidang={errorsSertifikasi.Id_Bidang}
                errorsNamaLembaga={errorsSertifikasi.NamaLembaga}
                errorsImage={errorsSertifikasi.DokumenSertifikat}
                registerBidang={onAddSertifikasi('Id_Bidang')}
                registerNamaLembaga={onAddSertifikasi('NamaLembaga')}
            />

            {/* edit box sertifikasi */}
            <FormSertifikasi
                isOpen={isOpenEditSertifikasi}
                onClose={onCloseDialogSertifikat}
                bidang={bidang}
                previewImage={previewImage}
                onChangeImage={(e) => onHandlePreviewImage(e.target.files[0])}
                onRemoveImage={() => onRemoveImage()}
                // onClickConfirm={onSubmitSertifikasi(onHandleUpdateSertifikasi)}
                errorsBidang={errorsSertifikasi.Id_Bidang}
                errorsNamaLembaga={errorsSertifikasi.NamaLembaga}
                errorsImage={errorsSertifikasi.DokumenSertifikat}
                registerBidang={onAddSertifikasi('Id_Bidang')}
                registerNamaLembaga={onAddSertifikasi('NamaLembaga')}
                onClickDelete={()=>onDeleteSertifikat()}
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

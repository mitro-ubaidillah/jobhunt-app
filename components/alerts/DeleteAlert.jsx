import Swal from 'sweetalert2';

const DeleteAlert = (message) => {
    Swal.fire({
        position: 'center',
        imageUrl: '/images/icons/delete-alert.png',
        imageWidth: 140,
        imageHeight: 140,
        padding: '56px 50px',
        color: 'fontPrimary',
        html: `<p class="alert">${message}<p>`,
        timer: 2000,
        showConfirmButton: false,
    })
}

export default DeleteAlert;

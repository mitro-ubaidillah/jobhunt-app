import Swal from "sweetalert2";

const FailedAlert = (message) => {
    Swal.fire({
        position: 'center',
        imageUrl: '/images/icons/error.png',
        imageWidth: 140,
        imageHeight: 140,
        padding: '56px 50px',
        color: 'fontPrimary',
        html: `<p class="alert">${message}<p>`,
        timer: 2000,
        showConfirmButton: false,
    })
}

export default FailedAlert;

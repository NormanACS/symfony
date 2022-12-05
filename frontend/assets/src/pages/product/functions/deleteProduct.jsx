import axios from "axios";
import Swal from "sweetalert2";
import PropTypes  from "prop-types";
import { URL_PRODUCT } from "../../../middleware/environment";

const deleteProduct = (id) =>{
    Swal.fire({
        title: "Etes vous sur ?",
        Text: "Operation irreversible",
        icon: "warning",
        showCancelButton: true,
        cancelButtonText: "Annuler",
        confirmButtonText: "Supprimer !",
    }).then((result) => {
        if (result.isConfirmed) {
            axios.delete(`${URL_PRODUCT}/${id}`).then(() => {
                Swal.fire({
                   icon: "success",
                   title: "Projet supp",
                   showConfirmButton: false,
                   timer: 1500,
                });
                setTimeout(() => {
                    window.location.reload();
                }, 2000)
            });
        }
    }).catch((err) => {
        console.error(err);
        Swal.fire({
            icon: "error",
            title: "Une erreur est survenue",
            showConfirmButton: false,
            timer: 1500,
        })
    });
};

deleteProduct.propTypes = {
    id: PropTypes.number,
}

export default deleteProduct;
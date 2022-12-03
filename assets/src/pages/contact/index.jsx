import axios from "axios";
import React from "react";



const Contact = () =>{
    
    const [Products, getProduct, deletProduct] = useState([]);
    
    
    const getAllProduct = async () => {
        await axios.get(`${URL}`)
        .then((response) => {
            getProduct(response.data["hydra:member"]);
            // console.log(response.data["hydra:member"]);
        })
        .catch((err) => {
            (console.error(err));
        })
    };


    const form = document.getElementById('form');

    form.addEventListener('submit', async function(e) {
        e.preventDefault();

        const formData = new FormData(from);

        formData.append('text', document.getElementById('text').value);
        formData.append('id')
        console.log('ok');
        try {
            const res = await axios.post('http://localhost:8000/api/clients', formData)
            console.log(res);
        } catch(e) {
            console.error(error);
        }
    })
    
    useEffect(() => {
        getAllProduct();
    }, []);
    
    
    // Update un product
    const updateProduct = async () => {
        alert(`produit mise a jour : ${Product.id}`);

        // await axios.put('http://localhost:8000/api/products/2', article)
        // .then(response => this.setState({ updatedAt: response.data.updatedAt }))
        // .catch(error => {
        //     this.setState({ errorMessage: error.message });
        //     console.error('There was an error!', error);
        // });

        await axios.put(`${URL}`)
        .then(response => this.setState({ updatedAt: response.data.updatedAt }))
        .catch(error => {
            this.setState({ errorMessage: error.message });
            console.error('There was an error!', error);
        });
    };


//     const element = document.querySelector('#put-request-error-handling .date-updated');
// const article = { title: 'Axios PUT Request Example' };
// axios.put('https://reqres.in/invalid-url', article)
//     .then(response => element.innerHTML = response.data.updatedAt )
//     .catch(error => {
//         element.parentElement.innerHTML = `Error: ${error.message}`;
//         console.error('There was an error!', error);
//     });

    const submiteForm = () => {
        try {
             alert('ok');
        } catch (error) {
            console.error(error);
        }
    }

    return (

        <>

        <form action="" style={{display: "flex", 
        flexDirection: "column", 
        width: "50%", 
        marginTop: "2rem", 
        marginBottom: "2rem"
        }}>
            <label htmlFor="text">Nom du produit :</label>
            <input type="text"  name="text" id="text"/>
            <label htmlFor="desciption">Description :</label>
            <textarea type="desciption" name="description" id="description"/>
            <label htmlFor="price">Prix :</label>
            <input type="number" name="number" id="number"/>
            <button type="button" onClick={() => submiteForm()}>Envoyer</button>
        </form>
        <hr style={{marginBottom: "5rem"}}/>

        </>
    );
};

export default Contact;
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const initialFormData = {
    id: "",
    title: "",
    content: "",
    image: ""
}

const apiURL = import.meta.env.VITE_API_URL

function NewPost() {
    // Variabili reattive
    const [formData, setFormData] = useState(initialFormData)
    const navigate = useNavigate()

    // Funzioni
    function handleInputChange(event) {
        const keyToChange = event.target.name
        const valueToChange =
            event.target.type === "checkbox" ?
                event.target.checked : event.target.value

        const newData = {
            ...formData,
            [keyToChange]: valueToChange
        }
        setFormData(newData);
    }

    function handleSubmit(event) {
        event.preventDefault();

        // Axios: store
        axios.post(`${apiURL}/posts`, formData).then((resp) => {
            // console.log(resp);

            // const newPostList = [...postList, resp.data]
            // setPostList(newPostList)
            // setFormData(initialFormData)

            navigate(`/Blog/Post/${resp.data.id}`)
        })
    }

    return (
        <>
            <main className='bg-danger-subtle'>
                {/* Form section */}
                <section className='container py-4'>
                    <h3 className='my-3'>Crea il tuo post!</h3>
                    <form onSubmit={handleSubmit}>
                        {/* Title */}
                        <div className="mb-3">
                            <label htmlFor="title" className='form-label'>Titolo del post</label>
                            <input className='form-control' type="text" id='title' name='title' value={formData.title} onChange={handleInputChange} placeholder='Inserisci il titolo del post' />
                        </div>
                        {/* Content */}
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Contenuto del post</label>
                            <textarea className="form-control" id="description" rows="3" name='content' value={formData.content} onChange={handleInputChange} placeholder="Inserisci il contenuto del post"></textarea>
                        </div>
                        {/* Image */}
                        <div className="mb-3">
                            <label htmlFor="image" className="form-label">Default file input example</label>
                            <input className="form-control" type="file" id="image" name='image' value={formData.image} onChange={handleInputChange} />
                        </div>
                        {/* Submit btn */}
                        <button type='submit' className='btn btn-danger my-3'>Invia</button>
                    </form>
                </section>
            </main>
        </>
    )
}

export default NewPost;
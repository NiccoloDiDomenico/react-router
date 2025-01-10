import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const apiURL = import.meta.env.VITE_API_URL

function PostDetails() {
    const { id } = useParams()
    const [post, setPost] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`${apiURL}/posts/${id}`).then((resp) => {
            setPost(resp.data)
        })
    }, [id])

    return (
        <main className="bg-danger-subtle">
            {/* Post details section */}
            <section className="container py-4">
                <a className="link-body-emphasis" onClick={() => navigate(-1)}>Torna alla pagina precedente</a>
                {/* {Card details} */}
                <div className="card my-4">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={`${apiURL}/${post.image}`} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{post.title}</h5>
                                <p className="card-text">{post.content}</p>
                                <p className="card-text"><small className="text-body-secondary"></small></p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Button danger */}
                <div className="container">
                    <div className="btn-toolbar d-flex justify-content-end" role="toolbar" aria-label="Toolbar with button groups">
                        <div className="btn-group me-2" role="group" aria-label="First group">
                            <Link className="btn btn-danger" to={`/Blog/Post/${post.id - 1}`}>&#8592;</Link>
                            <button type="button" className="btn btn-danger">{post.id}</button>
                            <Link className="btn btn-danger" to={`/Blog/Post/${post.id + 1}`}>&#8594;</Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default PostDetails;
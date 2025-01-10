import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const apiURL = import.meta.env.VITE_API_URL

function PostDetails() {
    const { id } = useParams();
    const [post, setPost] = useState("")

    useEffect(() => {
        axios.get(`${apiURL}/posts/${id}`).then((resp) => {
            setPost(resp.data)
        })
    }, [])

    return (
        <main className="bg-danger-subtle">
            <section className="container">
                <h1 className="py-3 m-0">Dettagli del post: {id}</h1>
            </section>
        </main>
    )
}

export default PostDetails;
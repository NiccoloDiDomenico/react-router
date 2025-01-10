import axios from 'axios'
import { useState, useEffect } from 'react'
import PostCard from "../components/PostCard"

const initialFormData = {
    id: "",
    title: "",
    content: "",
    image: ""
}

const tagsList = ["viaggi", "mare", "Italia", "estate", "cucina", "ricette", "Italia", "pasta", "tecnologia", "innovazione", "AI", "futuro", "fitness", "salute", "sport", "principianti", "libri", "lettura", "cultura", "consigli"]

const apiURL = import.meta.env.VITE_API_URL

function Blog() {
    // Variabili reattive
    const [postList, setPostList] = useState([])
    const [tags, setTags] = useState(tagsList)
    const [filter, setFilter] = useState("all")

    // Axios: index
    useEffect(() => {
        let url = `${apiURL}/posts`
        console.log(filter);

        if (filter !== "all") {
            url += `?tags=${filter}`
        }

        axios.get(url).then((resp) => {
            console.log(resp);
            setPostList(resp.data)
        })
    }, [filter]);

    // Funzioni
    function handleDelate(idToRemove) {
        // Axios: destroy
        axios.delete(`${apiURL}/posts/${idToRemove}`).then((resp) => {
            const updutePostList = postList.filter((curPost) => curPost.id !== idToRemove)
            setPostList(updutePostList)
        })
    }

    return (
        <>
            <main className='bg-danger-subtle'>
                {/* Filter section */}
                <section className='container py-4'>
                    <select name="tags" id='' className='form-select w-25' value={filter} onChange={(event) => setFilter(event.target.value)} >
                        <option value="all">Tutti i post</option>
                        {tags.map((curTag, index) => (
                            <option value={curTag} key={index}>{curTag}</option>
                        ))}
                    </select>
                </section>

                {/* Blog section */}
                <section className='container pb-4'>
                    {postList.length > 0 ? (
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 gx-0 gy-2">
                            {postList.map((curPost) => (
                                <PostCard key={curPost.id} post={curPost} onCancel={() => handleDelate(curPost.id)} />
                            ))}
                        </div>
                    ) : (
                        <h5>Completa il form per creare un post</h5>
                    )}
                </section>
            </main>
        </>
    )
}

export default Blog;
import { Link, useParams } from "react-router-dom"

const apiURL = import.meta.env.VITE_API_URL

function PostCard(props) {
    // console.log(props);
    const id = useParams()

    return (
        <div className="card">
            <img src={`${apiURL}/${props.post.image}`} className="card-img-top" alt="" />
            <div className="card-body">
                <h5 className="card-title">{props.post.title}</h5>
                <p className="card-text">{props.post.content}</p>
                <div className="d-flex justify-content-between">
                    <a className="link-danger" onClick={props.onCancel}>Cancella</a>
                    <Link className="link-body-emphasis" to={`/Blog/Post/${props.post.id}`}>Dettagli</Link>
                </div>
            </div>
        </div>
    )
};

export default PostCard
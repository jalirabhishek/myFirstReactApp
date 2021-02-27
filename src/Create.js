import { useState } from "react";
import { useHistory } from 'react-router-dom';

const Create = () => {
    const[Title, setTitle] = useState('');
    const[body, setBody] = useState('');
    const[author, setAuthor] = useState('');
    const[category, setCategory] = useState('travel')
    const[isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {Title, body, author, category};

        setIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added');
            setIsPending(false);
            history.push('/');
        });
    }

    return ( 
        <div className="create">
            <h1>Add a new blog</h1>
            <form onSubmit = {handleSubmit}>
                <label>Blog Title:</label>
                <input
                    type="text"
                    required
                    value = {Title}
                    onChange = {(e) => setTitle(e.target.value)}
                />
                <label>Blog Body:</label>
                <textarea
                    required
                    value = {body}
                    onChange = {(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog Author:</label>
                <input
                    type="text"
                    required
                    value = {author}
                    onChange = {(e) => setAuthor(e.target.value)}
                />
                <label>Blog Category</label>
                <select
                    value = {category}
                    onChange = {(e) => setCategory(e.target.value)}
                >
                    <option value="travel">Travel</option>
                    <option value="food">Food</option>
                    <option value="nature">Nature</option>
                    <option value="tech">Tech</option>
                    <option value="lifestyle">Lifestyle</option>
                    <option value="fashion">Fashion</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding blog..</button>}
            </form>
        </div>
     );
}
 
export default Create;

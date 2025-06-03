import React, { useState } from 'react'
import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import './loginShignUp.css'
import axios from 'axios'

const SignUp = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    // const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/signUp', { name, email, password })


            .then(result => {
                console.log(result);
                alert("Data has Been Stored 👍 ");
                // navigate("/login");
            })

            .catch(err => console.log(err))
    }
    return (
        <div>
            <div className="Login_body">
                <div className="body_container">
                    <form onSubmit={handleSubmit}>
                        <h1 className="form_text pt-2 pb-1 text-center">Register</h1>
                        <div className="form-group mb-3">
                            <label htmlFor="name" className="form_text">UserName :</label>
                            <input type="text" className="form-control" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="email" className="form_text">Email address :</label>
                            <input type="email" className="form-control" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your E-mail" />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="password" className="form_text">Password :</label>
                            <input type="password" className="form-control" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />
                        </div>
                        <div>
                            <label className="form_text">Already have an account? <Link to="/login">Login</Link></label>
                        </div>
                        <button type="submit" className="btn" style={{ float: "right" }}>Submit</button>
                        <button type="reset" className="btn">Reset</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp
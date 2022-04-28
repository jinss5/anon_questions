import {useState, useEffect} from 'react'
import {FaUser} from 'react-icons/fa'

function Register() {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const onChange = (e) => {
        const { target: {name, value} } = e;
        if (name === "name") {
            setName(value);
        } else if (name === "password"){
            setPassword(value);
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
    }

    return (
    <>
        <section className='heading'>
            <h1>
                <FaUser /> Register
            </h1>
            <p>please create an account</p>
        </section>

        <section className='form'>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <input type="text" 
                        className="form-control" 
                        id="name" 
                        name="name" 
                        value={name} 
                        placeholder='Enter id' 
                        onChange={onChange} 
                    />
                </div>
                <div className="form-group">
                    <input type="text" 
                        className="form-control" 
                        id="password" 
                        name="password" 
                        value={password} 
                        placeholder='Enter password' 
                        onChange={onChange} 
                    />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-block">Submit</button>
                </div>
            </form>
        </section>
    </>
    )
}

export default Register
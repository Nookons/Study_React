import React, {useState} from 'react';
import cl from "./useState.module.css";

const Form = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    })

    return (
        <div className={cl.User}>
            <div className={cl.UserInput}>
                <h3>Name :</h3>
                <input
                    value={user.name}
                    onChange={e => setUser({...user, name: e.target.value})}
                    placeholder='Name'
                    type="Name"
                />
                <h3>Email :</h3>
                <input
                    value={user.email}
                    onChange={e => setUser({...user, email: e.target.value})}
                    placeholder='Email'
                    type="Email"
                />
                <h3>Password :</h3>
                <input
                    value={user.password}
                    onChange={e => setUser({...user, password: e.target.value})}
                    placeholder='Password'
                    type="Password"
                />
            </div>

            <div className={cl.UserInputInfo}>
                <h3>INFORMATION</h3>
                <hr/>
                <h3>Name : {user.name.length
                    ?
                    <span>{user.name}</span>
                    :
                    <span style={{color: 'red'}}>...</span>
                }
                </h3>
                <hr/>
                <h3>Email : {user.email.length
                    ?
                    <span>{user.email}</span>
                    :
                    <span style={{color: 'red'}}>...</span>
                }
                </h3>
                <hr/>
                <h3>Password : {user.password.length
                    ?
                    <span>{user.password}</span>
                    :
                    <span style={{color: 'red'}}>...</span>
                }
                </h3>
            </div>
        </div>
    );
};

export default Form;
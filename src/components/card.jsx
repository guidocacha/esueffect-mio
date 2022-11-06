import React, { useState, useEffect } from 'react';


const Card = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://reqres.in/api/users")
            .then(data => data.json())
            .then(json => setUsers(json.data));
    }, []);


    return (
        <div className='conteiner'>
            {
                users.map(user => (<div className="card m-5 w-25" style={{ "width": "18rem" }}>
                    <img className="card-img-top" src={user.avatar} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{user.first_name} {user.last_name}</h5>
                        <p className="card-text"><b>E-mail:</b> {user.email}</p>
                        <a href="https://www.linkedin.com" target="_blank" className="btn btn-primary">Ver LinkedIn</a>
                    </div>
                </div>))
            }

        </div>
    )
}

export default Card;
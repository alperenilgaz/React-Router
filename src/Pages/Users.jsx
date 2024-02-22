import React from 'react'

import { useLoaderData,Link} from 'react-router-dom'
export const Users = () => {
    const user = useLoaderData()
  return (
    <div className='users'>
        {
            user.map(user => (
                <div className="card">
                <h3>
                   <i className="fa-solid fa-caret-right"></i> {user.name}
                </h3>
                   <Link key={user.id} to={user.id.toString()}>
                    <i className="fa-regular fa-square-caret-right"></i>
                   </Link>

                </div>
            ))
        }
    </div>

  )
}

export const  usersLoader = async() => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    return res.json()
}
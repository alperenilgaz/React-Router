import { useLoaderData,Link} from "react-router-dom"

export const UserDetails = () => {
    const user = useLoaderData()
    return(
        <div className="user-details">  
            <h3>
                <i className="fa-solid fa-caret-right"></i>    
                {user.name}
            </h3> 
            <ul>
                <li>{user.username}</li>
                <li>{user.email}</li>
                <li>{user.phone}</li>
                <li>{user.company.name} /{user.company.city}</li>
            </ul>
        
            <i><Link to='/users'>Back to List</Link></i>
        </div>
    )
}

export const UserDetailsLoader = async({params}) => {
    const {userId} = params
    const res = await fetch("https://jsonplaceholder.typicode.com/users/"+userId)
    return res.json()
    if(res.status === 404){
        throw new Response("Not found",{status:404})
    }
}
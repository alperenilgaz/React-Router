import { Outlet,NavLink } from "react-router-dom"

export const HelpLayout =() => {
    return(
        <div className="help-layout">
            <h2>Help</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat excepturi laudantium ad recusandae totam nobis et at quod esse quo praesentium enim nisi hic, assumenda perferendis aliquam adipisci quos doloribus?</p>
            <nav>
                <NavLink to='contact'>Contact</NavLink>
                <NavLink to='faq'>faq</NavLink>
            </nav>
            <Outlet/>
        </div>
    
    )
}
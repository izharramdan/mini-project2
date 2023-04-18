import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"


function Account() {
    const [name, setName] = useState('hhvv')

    useEffect(() => {
        if(!localStorage.getItem('token')) {
            Navigate('/login')
        }
    }, [])


    return (
        <form action="">Account</form>
    )
        
    
}

export default Account
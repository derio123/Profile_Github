import { useEffect, useState } from "react";
import { ApiServices } from "../../services/ApiServices";
import './styles.css'

export default function PosValidation() {
    const [user, setUser] = useState("derio123");

    useEffect(() => {
        ApiServices(user).then(
            (response) => setUser(response.data)
        ).catch((err) => {
            alert(`Ops usuario não existe ! ${err}`);
            console.log(`Ops! Usuario não encontrado ${err}`);
        });
    }, []);

    return ( 
    <div className = "App" >
        <img className = "photo"src = { user?.avatar_url } alt = "Foto de derio" / >
        <p className="text-login"> Login: { user?.login } </p> 
        <p className="text-bio"> Bio: { user?.bio } </p> 
        <p className="text-location"> Localização: { user?.location }</p >
        <p className="text-blog"> Blog: < a href = { user?.blog } > Blog </a> </p >
    </div>
    );
}
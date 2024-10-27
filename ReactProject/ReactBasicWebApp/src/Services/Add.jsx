import React, { useState } from "react";
import Person from '../Model/Person'; 
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './style.css';

export default function Add (){
    const [user,setUser]=useState(new Person ('','','',''))
    const navigate=useNavigate();
    const handleSubmit = event => {
        event.preventDefault();   
        user.sexe=document.getElementById('List_sexe').value
        if(user.first_name!=="" && user.last_name!=="" && user.age!=="" && user.sexe!=="" && user.sexe!=="Sexe"){
            axios.post('http://localhost:3000/users', user)
            .then(() => {
                alert("Bien ajouter");
                navigate('/Home');
            })
            .catch(err=>console.log(err))
        }
        else{
            navigate('/Home');
        }
    }
    return(
        <div className="main">
            <form onSubmit={handleSubmit}>
                <h2>Ajouter</h2>
                <input type="text" placeholder='Nom' name='nom2' value={user.first_name} onChange={e=>setUser({...user,first_name:e.target.value})}/>
                <input type="text" placeholder='Prenom' name='prenom2' value={user.last_name} onChange={e=>setUser({...user,last_name:e.target.value})}/>
                <input type="text" placeholder='Âge' name='age2' value={user.age} onChange={e=>setUser({...user,age:e.target.value})}/>
                <div className='div_List_sexe'>
                    <select id="List_sexe">
                        <option value="Sexe">Sexe</option>
                        <option value="Masculin">Masculin</option>
                        <option value="Féminin">Féminin</option>
                    </select>
                </div>
                <button >Valider</button>
            </form>
            <div className="fly_1"></div>
            <div className="fly_2"></div>
            <div className="fly_3"></div>
            <div className="fly_4"></div>
            <div className="fly_5"></div>
        </div>
    );
}

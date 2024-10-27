import { Link} from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
import './List.css';


export default function List(){
    const list_header=[]
    list_header.push(
        <div className="container_header">
            <h2>NOM</h2>
            <h2 className="modified_h2">PRENOMS</h2>
            <h2 className="age_h2">ÂGE</h2>
            <h2 className="sexe_h2">SEXE</h2>
        </div>
    )
    const [data,setData]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3000/users")
        .then(res=>setData(res.data))
        .catch(err=>console.log(err))
    },[])
    function handleDelete(id){
        const confirmation = window.confirm("Voulez vous vraiment Supprimer?");
        if(confirmation){
            axios.delete(`http://localhost:3000/users/${id}`)
            .then(()=>{
                alert("Suppression réussie")
                window.location.reload(true)
            })
        }
    }
    const list=[];
    for(let i=0;i<data.length;i++){
        const single_element=data[i]
        list.push(
            <div className="Element" key={i}>
                <div><h3>{single_element.first_name}</h3></div>
                <div><p>{single_element.last_name}</p></div>
                <div> <p>{single_element.age}</p></div>
                <div><p>{single_element.sexe}</p></div>
                <button ><Link to={`/Update/${single_element.id}`}>Modifier</Link></button>
                <button onClick={()=>handleDelete(single_element.id)}>Supprimer</button>
            </div>
        )
    }
    return(
        <div className="Main">
            {list_header}
            {list}
        </div>
    );
}
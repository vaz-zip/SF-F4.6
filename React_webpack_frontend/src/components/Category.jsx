import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";


function Category() {

    const category = useParams().category;
    const [isLoading, setLoading] = useState(true);
    const [dishes, setDishes] = useState();


    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/dishes/?category=${category}`).then(res => {
            setDishes(res.data);
            setLoading(false);
        });
    }, []);


    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    return (
        <div>
            <h1>{category}:</h1>
            <div className='recipe'>
                {dishes.map((name) => (
                <p key={name.id}><a className="r" href={`/recipe/${name.id}`}>{name.name}</a></p>
                ))}
            </div>
        </div>
    );
};

export default Category;


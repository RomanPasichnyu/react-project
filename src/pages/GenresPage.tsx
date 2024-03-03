import React, {useEffect, useState} from 'react';
import {Genres} from "../components/GenreConteiner/Genres";
import {IGenre} from "../interfaces/genresResponceInterface";
import {genresService} from "../services/genresService";

const GenresPage = () => {
    const [genres, setGenres] = useState<IGenre[]>([]);

    useEffect(() => {
        genresService.getAll().then(({data})=>{
            setGenres(data.genres);
        });

    }, []);


    return (
        <div>
            <Genres genres={genres}/>
        </div>
    );
};

export default GenresPage;
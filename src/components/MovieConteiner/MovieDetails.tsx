import React, {FC, PropsWithChildren, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {movieService} from "../../services/movieService";
import {ICardDetails} from "../../interfaces";
import {MovieDetail} from "./MovieDetail";

interface IProps extends PropsWithChildren {

}

const MovieDetails: FC<IProps> = () => {

    const {id} = useParams<{ id: string }>();

    const [info, setInfo] = useState<ICardDetails | null>(null)

    useEffect(() => {
        if (id !== undefined) {
            const idNum = +id;
            movieService.getById(idNum).then(({data}) => setInfo(data));
        }
    }, [id]);

    return (
        <div>
            {info ? (<MovieDetail card={info}/>) : (<span></span>)}
        </div>
    );
};

export {MovieDetails};
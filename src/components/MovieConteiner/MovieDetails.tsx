import React, {FC, PropsWithChildren, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {movieService} from "../../services/movieService";
import {ICardDetails} from "../../interfaces";
import {MovieDetail} from "./MovieDetail";

interface IProps extends PropsWithChildren {

}

const MovieDetails: FC<IProps> = () => {

    const {id} = useParams<{ id: string }>();

    const [info, setInfo] = useState<ICardDetails[]>([])

    useEffect(() => {
        if (id !== undefined) {
            const idNum = +id;
            movieService.getById(idNum).then(({data}) => setInfo(data))
                .catch(error => console.error('not number:', error));
        }
    }, [id]);
    console.log(info);

    return (
        <div>
            {info.map(card=><MovieDetail key={card.id} card={card}/>)}
        </div>
    );
};

export {MovieDetails};
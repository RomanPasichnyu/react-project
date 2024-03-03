import React, {FC, PropsWithChildren} from 'react';
import {IMovie} from "../../interfaces";
import StarRatings from 'react-star-ratings';
import css from './MovieCard.module.css';
import {NavLink} from "react-router-dom";

interface IProps extends PropsWithChildren {
    movie: IMovie

}

const Movie: FC<IProps> = ({movie}) => {
    const {id, poster_path, title, vote_average} = movie;
    const url = 'https://image.tmdb.org/t/p/w500'

    return (
        <NavLink to={`/details/${id}`}>
            <div className={css.Card}>
                <img className={css.img} src={url + poster_path} alt={title}/>
                <div>{title}</div>
                <StarRatings
                    rating={vote_average}
                    starDimension="20px"
                    starSpacing="5px"
                    numberOfStars={8}
                    starRatedColor="orange"
                />
            </div>
        </NavLink>


    );
};

export {Movie};
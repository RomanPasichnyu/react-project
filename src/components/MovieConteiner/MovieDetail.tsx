import React, {FC, PropsWithChildren} from 'react';
import StarRatings from "react-star-ratings";
import css from './MovieCard.module.css'
import {ICardDetails} from "../../interfaces";

interface IProps extends PropsWithChildren {
    card: ICardDetails
}

const MovieDetail: FC<IProps> = ({card}) => {
    const {id, overview, poster_path, original_title, release_date, runtime, status, vote_average } = card;
    const http = 'https://image.tmdb.org/t/p/w500'
    return (
        <div className={css.info}>
            <div>
            <img src={http + poster_path} alt={original_title}/>
            </div>
            <div>

            <div>Title: {original_title}</div>
            <div>Runtime: {runtime}</div>
            <div>Status: {status}</div>
            <div>Info: {overview}</div>
            <div>Release: {release_date}</div>
            <StarRatings
                rating={vote_average}
                starDimension="20px"
                starSpacing="5px"
                numberOfStars={8}
                starRatedColor="orange"
            />

            </div>

        </div>
    );
};

export {MovieDetail};
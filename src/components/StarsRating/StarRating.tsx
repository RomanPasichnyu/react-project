import StarRatings from 'react-star-ratings';
import {Component} from "react";

class Bar extends Component {
    render() {
        // aggregateRating = 2.35;
        return (
            <StarRatings
                rating={2.403}
                starDimension="40px"
                starSpacing="15px"
            />
        );
    }
}
import React, {FC, PropsWithChildren} from 'react';
import {ICardDetails} from "../../interfaces";

interface IProps extends PropsWithChildren {
card:ICardDetails
}

const MovieDetail: FC<IProps> = ({card}) => {
    const {original_title} = card;
    return (
        <div>
            <div>${original_title}</div>
        </div>
    );
};

export {MovieDetail};
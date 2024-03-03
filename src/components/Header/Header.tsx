import React from 'react';
import {NavLink} from "react-router-dom";
import css from './Header.module.css'
const Header = () => {
    return (
        <div className={css.Header}>
            <NavLink className={css.Link} to={'movies'}>Movies</NavLink>
            <input placeholder={'Search...'}/>
            <NavLink className={css.Link} to={'genres'}>Genres</NavLink>
            <i className="material-icons">person Roma</i>

        </div>
    );
};

export default Header;
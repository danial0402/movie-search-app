import { NavLink, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useGlobalContext } from "./Context";
import { useEffect, useState } from "react";

const SingleMovie = () => {
    const [singleMovie, setSingleMovie] = useState('');
    const { id } = useParams();
    const { movie } = useGlobalContext();
    const { isLoading, isError } = useFetch(`&i=${id}`);
    useEffect(() => {

        let SinMovie = movie.find((m) => m.imdbID === id);
        setSingleMovie(SinMovie);
        console.log(SinMovie);
    }, [id])


    return (
        <section className="movie-section">

            {
                !isLoading ?
                    <section className="movie-section ">
                        <div className="loading">Loading...</div>;
                    </section>

                    :
                    <div className="movie-card">
                        <figure>
                            <img src={singleMovie.Poster} alt="" />
                        </figure>
                        <div className="card-content">
                            <p className="title">{singleMovie.Title}</p>
                            <p className=""></p>
                            <p className="card-text">{singleMovie.Type}</p>
                            <p className="card-text">{singleMovie.Year}</p>
                                <NavLink to="/" className="back-btn">
                                    Go Back
                                </NavLink>
                            <div className="btns">
                                <NavLink to="/Watch" className="watch-btn"> Watch </NavLink>
                                <NavLink to="/Download" className="down-btn"> Download </NavLink>
                            </div>
                        </div>
                    </div>

            }

        </section>
    );
};

export default SingleMovie;
import React from 'react';
import Image from 'next/image';

const myLoader = ({ src }) => {
    return `https://image.tmdb.org/t/p/w500${src}`
}

const Card = ({title, poster_path, description, onClickDetail}) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
                <Image 
                    loader={myLoader}
                    src={poster_path}
                    alt={title}
                    width={250}
                    height={400}
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button onClick={onClickDetail} className="btn btn-primary">See Detail</button>
                </div>
            </div>
        </div>
    );
}

export default Card;

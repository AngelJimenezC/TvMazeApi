
import React from 'react';
import Header from './Header';
import {BrowserRouter, Link } from 'react-router-dom';

 const ShowResults = (props) =>{
     if (props.error !== null) {
         return <h1>An error occurred, try again later or check your internet connection.</h1>;
        }
        if (props.data === null) {
            return(
                <>
            

        <h1 className='container mt-5'>Que pelicula le gustaria ver </h1>
                {<Header />}
       
    
            </>
        )
        
        
    }
    if (props.data !== null && props.error === null) {
        if (props.data.length === 0) {
            return(
                <div className="no-results-search">   
                    <h1>We couldn't find anything that matches your search. Maybe try something else?</h1>
                </div>
            );    
        }
       else { 
        var listItem = props.data.map((element) => {
            return ( 
                // <BrowserRouter>
                    <Link to={`/details/${element.show.id}`}>
                <div key={element.show.id} className="card  m-2 mt-5" >
                <div className="row-5 justify-content-center ">

                <div className="link-container card-body text-body card-title  ">
                    <a href={element.show.url} className="text-decoration-none text-body card-title">{element.show.name}</a>
                
                <div className='text-body'>
                {element.show.image ? (<img src={element.show.image.medium} alt={element.show.name} />
                ) : (<div className="card-img-top "><a src={element.show.url}><img className='card-img-top missing-img-div' src="/src/assets/noimage.png"/></a></div>)}
                </div>
                </div>
                </div>
            </div> 
                </Link>
                // </BrowserRouter>
                
                
            )
                
            });
        }  
    }
    return (
        <ul className="list-container">
            {listItem}
        </ul>
    ); 
}
export default ShowResults

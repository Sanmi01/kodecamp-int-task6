import React from 'react'
import { Container } from 'react-bootstrap';
import Header from '../layout/Header';

const Homepage = () => {
    return (
        <>
            <Header />
            <Container className="py-3 px-5 h-100 homepage">
                <div className="row p-3 align-items-center">
                <div className="col-md-6 p-3">
                    <h1>Learn on your class schedule</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                     Voluptas odio eaque deserunt asperiores repudiandae nisi 
                    iure velit voluptatem, commodi adipisci dolore tenetur nulla
                     suscipit modi facere quia quas 
                    officia excepturi nostrum. Officia veritatis corrupti libero.</p>
                </div>
                <div className="col-md-6 p-3">
                    <img className="img-fluid" src="https://i.postimg.cc/667zCLZ8/pexels-anastasiya-gepp-1462630-removebg-preview.png" alt="student-image" />
                </div>
                </div>
            </Container>
        </>
    )
}

export default Homepage

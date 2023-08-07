import { Button, Card, Container } from 'react-bootstrap';
import { useLoaderData, useLocation, useParams, useSearchParams } from 'react-router-dom';
import RecipesDetails from '../../RecipesDetails/RecipesDetails';
import { FaChessRook, FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import LazyLoad from 'react-lazy-load';
import Loading from '../../Loading/Loading';


const ChiefDetails = () => {

    const handleLazyLoader = () => {
        // alert("working")
        Loading()
    }
    const chefRecipe = useLoaderData();
    // console.log(chefRecipe);
    const { picture, name, recipes, chef_description, experience, specialty } = chefRecipe;
    // const { } = user;

    return (
        <LazyLoad height={"100%"} onContentVisible={handleLazyLoader}>
            <Container>

                <h3 className='text-center display-4 fw-bold'>Chief Details</h3>'

                <div className='d-flex flex-lg-row flex-column  gap-5 justify-content-center  rounded-1'>

                    <img src={picture} />
                    <div>
                        <Card.Body>
                            <div>
                                <Card.Title className='display-5'>{name}</Card.Title>
                            </div>
                            <Card.Text className='text-secondary'>
                                {chef_description}
                            </Card.Text>
                            <div className='d-flex gap-5' >
                                <p className='text-success' style={{ fontSize: '20px' }}>Recipe : {chefRecipe.recipe}</p>
                                <p className='text-success' style={{ fontSize: '20px' }}> <FaChessRook /> : {experience}</p>
                            </div>

                            <div>
                                <p className='text-success' style={{ fontSize: '20px' }}> Specialty : {specialty}</p>
                            </div>
                            <div className='d-flex gap-2'>
                                <p className='text-success' style={{ fontSize: '20px' }}>Rating : {chefRecipe.rating}</p>
                                <Rating
                                    placeholderRating={chefRecipe.rating}
                                    readonly
                                    emptySymbol={<FaRegStar></FaRegStar>}
                                    placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                                    fullSymbol={<FaStar></FaStar>} />
                            </div>
                        </Card.Body>
                    </div>
                </div>
                {
                    recipes.map((recipe) => (
                        <div>

                        </div>
                    ))

                }



                <h3 className='text-center fw-bold display-3 mt-5'>Recipes Details</h3>
                <RecipesDetails chefRecipe={chefRecipe} />

            </Container>
        </LazyLoad>

    );
};

export default ChiefDetails;
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, Card } from 'react-bootstrap';
import Rating from 'react-rating';
import { FaHardHat, FaHeart, FaRegStar, FaStar } from 'react-icons/fa';

const RecipesDetails = ({ chefRecipe }) => {
    console.log(chefRecipe);
    const { recipes } = chefRecipe;

    const [isButtonDisabled, setButtonDisabled] = useState(false);

    const handleFavorite = () => {
        // console.log("btn click");
        toast.success('successfully added');

        setButtonDisabled(true);
    }

    return (
        <div>
            {
                recipes.map((recipe) => (
                    <div className='d-flex d-flex flex-lg-row flex-column sm:w-100 gap-5 mt-5'>
                        <div className='w-50'>
                            <img className='img-fluid' src={recipe.recipe_img} alt="" />
                        </div>
                        <div className='w-50 px-3'>
                            <Card >
                                <Card.Body>
                                    <Card.Title> {recipe.recipe_name}</Card.Title>
                                    <p>ingredients</p>
                                    {recipe?.ingredients.map((ingredient) => (
                                        <li>{ingredient}</li>
                                    ))

                                    }
                                    <Card.Text>
                                        {recipe.cooking_method}
                                    </Card.Text>
                                    <Rating
                                        placeholderRating={recipe.rating}
                                        readonly
                                        emptySymbol={<FaRegStar></FaRegStar>}
                                        placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                                        fullSymbol={<FaStar></FaStar>} />
                                </Card.Body>
                                <Button disabled={isButtonDisabled} onClick={() => handleFavorite(recipe)}>Add to favorites <FaHeart></FaHeart> </Button>
                                <ToastContainer />
                            </Card>
                        </div>
                    </div>
                ))
            }


        </div>
    );
};

export default RecipesDetails;
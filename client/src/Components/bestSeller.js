import React, { useState } from 'react';
import { Button, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack'
import { Tooltip } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import {Link, NavLink, useMatch } from 'react-router-dom';
import data from '../data';


function BestSeller() {
    const [section, setSection] = useState("bestSeller-men")
    const [click, setIsClicked] = useState(false);
    const product = data.product;
    const bestSeller = product.filter((item) => item.bestSeller === true && item.category === 'women');
    const bestSellermen = product.filter((item) => item.bestSeller === true && item.category === 'men');
    const trending = product.filter((item) => item.trending === true);
    const handleSection = (selected) => {
        setSection(selected);
        setIsClicked(true);
 }
    return (
        <section className="best-seller container-fluid">
        <h1 className='text-center mt-5'>Best Seller</h1>
        <div className='nav-bar'>
          <Link className={click? 'active': 'link'} onClick={() => handleSection('bestSeller-men')}>Men</Link>
          <Link  className={click? 'active': "link"} onClick={() => handleSection('bestSeller-women')}>Women</Link>
          <Link   className={click? 'active': "link"} onClick={() => handleSection('bestSeller-trending')}>Trending</Link>
            </div>
            {section === "bestSeller-women" &&
                <section className='women'>
                <div className="row-container">
                    {bestSeller.map((item) => (
                        <div className="card-container" key={item.id}>
                          <Link to='/' className='product-link'> 
                            <div className="card">
                                <div className='card-image'>
                                    <img src={item.image} alt={item.name} />
                                </div>
                                <div className="card-body">
                                    <span>{item.brand}</span>
                                    <h5 className='card-title'>{item.name}</h5>
                                    <span className='text-center'>{item.price} FCFA</span>
                                    <Stack spacing={2}>
                                        <div className='rating'>
                                            <Rating name="size-large" defaultValue={item.rating} precision={0.5} readOnly />
                                            <span>{item.numReview} Reviews</span>
                                        </div>
                                    </Stack><br />
                                    <div className='bttons'>
                                        <Button variant="contained" color="primary" >
                                            ADD TO CARD
                                            </Button>
                                    <Tooltip title="Wishlist" placement="bottom">    
                                    <IconButton className='whistlist'>
                                    <FavoriteIcon className='whistlist' />
                                     </IconButton>
                                    </Tooltip>  
                                    <Tooltip title="Quick View" placement="bottom">    
                                    <IconButton className='whistlist'>
                                    <VisibilityIcon className='whistlist' />
                                     </IconButton>
                                     </Tooltip>       
                                    </div>
                                </div>
                                </div>
                                </Link>        
                        </div>
                    ))}
                    </div><br />
                    <div className='seeMore-container'>
                    <Button variant='contained' color="primary" className="btn-slider see-more">SEE MORE</Button>
                    </div>
               </section> 
            }
          {section === "bestSeller-men" &&
                <section className='men'>
                <div className="row-container">
                    { bestSellermen.map((item) => (
                        <div className="card-container" key={item.id}>
                          <Link to='/' className='product-link'> 
                            <div className="card">
                                <div className='card-image'>
                                    <img src={item.image} alt={item.name} />
                                </div>
                                <div className="card-body">
                                    <span>{item.brand}</span>
                                    <h5 className='card-title'>{item.name}</h5>
                                    <span className='text-center'>{item.price} FCFA</span>
                                    <Stack spacing={2}>
                                        <div className='rating'>
                                            <Rating name="size-large" defaultValue={item.rating} precision={0.5} readOnly />
                                            <span>{item.numReview} Reviews</span>
                                        </div>
                                    </Stack><br />
                                    <div className='bttons'>
                                        <Button variant="contained" color="primary" >
                                            ADD TO CARD
                                            </Button>
                                    <Tooltip title="Wishlist" placement="bottom">    
                                    <IconButton className='whistlist'>
                                    <FavoriteIcon className='whistlist' />
                                     </IconButton>
                                    </Tooltip>  
                                    <Tooltip title="Quick View" placement="bottom">    
                                    <IconButton className='whistlist'>
                                    <VisibilityIcon className='whistlist' />
                                     </IconButton>
                                     </Tooltip>       
                                    </div>
                                </div>
                                </div>
                                </Link>        
                        </div>
                    ))}
                    </div><br />
                    <div className='seeMore-container'>
                    <Button variant='contained' color="primary" className="btn-slider see-more">SEE MORE</Button>
                    </div>
               </section> 
            } 
          {section === "bestSeller-trending" &&
                <section className='trending'>
                <div className="row-container">
                    { trending.map((item) => (
                        <div className="card-container" key={item.id}>
                          <Link to='/' className='product-link'> 
                            <div className="card">
                                <div className='card-image'>
                                    <img src={item.image} alt={item.name} />
                                </div>
                                <div className="card-body">
                                    <span>{item.brand}</span>
                                    <h5 className='card-title'>{item.name}</h5>
                                    <span className='text-center'>{item.price} FCFA</span>
                                    <Stack spacing={2}>
                                        <div className='rating'>
                                            <Rating name="size-large" defaultValue={item.rating} precision={0.5} readOnly />
                                            <span>{item.numReview} Reviews</span>
                                        </div>
                                    </Stack><br />
                                    <div className='bttons'>
                                        <Button variant="contained" color="primary" >
                                            ADD TO CARD
                                            </Button>
                                    <Tooltip title="Wishlist" placement="bottom">    
                                    <IconButton className='whistlist'>
                                    <FavoriteIcon className='whistlist' />
                                     </IconButton>
                                    </Tooltip>  
                                    <Tooltip title="Quick View" placement="bottom">    
                                    <IconButton className='whistlist'>
                                    <VisibilityIcon className='whistlist' />
                                     </IconButton>
                                     </Tooltip>       
                                    </div>
                                </div>
                                </div>
                                </Link>        
                        </div>
                    ))}
                    </div><br />
                    <div className='seeMore-container'>
                    <Button variant='contained' color="primary" className="btn-slider see-more">SEE MORE</Button>
                    </div>
               </section> 
            }   
      </section>
    );
}

export default BestSeller;

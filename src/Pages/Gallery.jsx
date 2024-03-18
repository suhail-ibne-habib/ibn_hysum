import { Box, Card, CardContent, IconButton, ImageList, ImageListItem, ImageListItemBar, Modal } from '@mui/material'
import React, { useState } from 'react'
import { IoInformationCircleOutline } from "react-icons/io5";

import { Gallery1, Gallery2, Gallery3, Gallery4, Gallery5, Gallery6, Gallery7, Gallery8, Gallery9, Gallery10, Gallery11, Gallery12, Gallery13 } from '../assets'

const images = [
    {
        image: Gallery1,
    },
    {
        image: Gallery2
    },
    {
        image: Gallery3
    },
    {
        image: Gallery4
    
    },
    {
        image: Gallery5
    
    },
    {
        image: Gallery6
    
    },
    {
        image: Gallery7
    
    },
    {
        image: Gallery8
    
    },
    {
        image: Gallery9
    
    },
    {
        image: Gallery10
    },
    {
        image: Gallery11
    },
    {
        image: Gallery12
    },
    {
        image: Gallery13
    }
]

function Gallery() {

    const [image, setImage] = useState()

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '50vw',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };


    const handleClick = (e)=>{
        console.log(e.target.currentSrc)
        setImage(e.target.currentSrc)
    }

    const handleClose = ()=>{
        setImage(false)
    }

  return (
    <div>
        <div className="container">

            <Card>
                <CardContent>
                    <ImageList
                        variant="masonry"
                        cols={4}
                    >

                        {
                            images.map(({image}, idx)=>(
                                <ImageListItem onClick={handleClick} key={idx}>
                                    <img src={image} alt=''/>
                                    <ImageListItemBar
                                        title="Image Title"
                                        subtitle="Image SubTitle"
                                        actionIcon={
                                        <IconButton
                                            sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                            aria-label={`info about image`}
                                        >
                                            <IoInformationCircleOutline />
                                            
                                        </IconButton>
                                        }
                                    />
                                </ImageListItem>
                            ))
                        }
                        
                    </ImageList>
                </CardContent>
            </Card>

            <div style={{position: 'relative'}}>

            
                <Modal
                    open={image? true:false}
                    onClose={handleClose}
                >
                    
                    <Box sx={style}>
                        <div className='image-gallery-wrapper'>
                            <img src={image} alt='gallery_image' />
                        </div>
                    </Box>
                    
                </Modal>
            </div>
        </div>
    </div>
  )
}

export default Gallery
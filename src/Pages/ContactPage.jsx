import React from 'react'
import { BreadCrumb } from '../components'
import { FaPhone } from "react-icons/fa6";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


function ContactPage() {
  return (
    <div>
        <BreadCrumb />
        
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>

                <Grid item xs={12} sm={3}>
                    
                </Grid>
                <Grid item xs={12} sm={6}>
                    <div className="contact-wrapper background">
                        <h2 className="title">Our Contacts</h2>
                        <ul>
                            <li>
                                <h3>For admission:</h3>
                                <div className='flex'>
                                    <span><FaPhone /></span>
                                    <span>54654651351</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </Grid>
                <Grid item xs={12} sm={3}>
                    
                </Grid>
                
            </Grid>
        </Box>
    </div>
  )
}

export default ContactPage
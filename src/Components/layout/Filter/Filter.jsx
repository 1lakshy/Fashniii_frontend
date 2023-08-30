import React from 'react'
import "./filter.css"
import { Slider } from '@mui/material'

const Filter = () => {
  return (
    <>
    <div className="filterBox">
        <div className="filterSubBox">
            <h2 className='subHeading'>
                Filter
            </h2>
        </div>
        <div className="filterSubBox">
        <h2 className='subHeading-1'>
        CATEGORIES
            </h2>
        </div>
        <div className="filterSubBox"><h2 className='subHeading-1'>
        GENDER
            </h2></div>
        <div className="filterSubBox">
        <h2 className='subHeading-1'>
        PRICE
            </h2>
            <Slider/>
        </div>
        <div className="filterSubBox"><h2 className='subHeading-1'>
        BRAND
            </h2></div>
        <div className="filterSubBox">
        <h2 className='subHeading-1'>
        CUSTOMER RATINGS
            </h2>
        </div>
        <div className="filterSubBox">
        <h2 className='subHeading-1'>
        AVAILABILITY
            </h2>
        </div>
    </div>
    </>
  )
}

export default Filter
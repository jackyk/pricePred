import React from 'react'

const PriceInfo = props => (
    <div className='price__info'>
        {
            props.month && <p className='price__key'>Month : 
                <span className='price__value'> {props.month} </span>
            </p>
        }
        {
            props.year && <p className='price__key'>Year :  
                <span className='price__value'> {props.year} </span>
            </p>  
        }
          {
            props.price && <p className='price__key'>Price : 
                <span className='price__value'> {props.price} </span>
            </p> 
        }
        {
            props.error && <p className='price__key'>{props.error}</p>

        }

    </div>
)

export default PriceInfo

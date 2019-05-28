import React from 'react'

const PriceInfo = props => (
    <div className='price_info'>
        {
            props.month && <p>Month : 
                {props.month}
            </p>
           }
           {
            props.year && <p>Year :  
                {props.year}
            </p>
            
        }
          {
            props.price && <p>Price : 
                {props.price}
            </p>
            
        }

    </div>
)

export default PriceInfo

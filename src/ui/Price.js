import React  from 'react'

const Price = props =>(
    <form onSubmit={props.getPrice}>
            {/* <label>Month :</label> */}
            <input  name='month' type="text" placeholder="Month(Numbers only)"/>
            {/* <label>Year :</label> */}
            <input  name='year' type="text" placeholder="Year"/>
            <button> Check</button> 
    </form>

)
export default Price
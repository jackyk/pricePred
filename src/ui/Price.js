import React  from 'react'

const Price = props =>(
    <form onSubmit={props.getPrice}>
            {/* <label>Month :</label> */}
            <input  name='month' type="text" placeholder="1"/>
            {/* <label>Year :</label> */}
            <input  name='year' type="text" placeholder="1970"/>
            <button> Check</button> 
    </form>

)
export default Price
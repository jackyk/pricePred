import React, { Component } from 'react'
import './App.css'

import Price from './ui/Price'
import PriceInfo from './ui/PriceInfo'
import Title from './ui/Title'

export class App extends Component {

state={
    month: undefined,
    year: undefined,
    error: undefined,
    price: undefined
  }

getPrice = async(e)=>{

  e.preventDefault()
    
    const month = e.target.elements.month.value
    const year = e.target.elements.year.value

  const apiCall = await fetch(`https://yfarmapi.herokuapp.com/price/v1?month=${month}&year=${year}`)
  const data = await apiCall.json()
  console.log(data)

  if(month && year){
    console.log(data)
    this.setState({
      month: data.month,
      year: data.year,
      price: data.price,
      error: "" 
    })
  
  }else{
    this.setState({
      month: undefined,
      year: undefined,
      price: undefined,
      error: "Please Enter the value"
    })
  }

}

  render() {
    return (
      <div>
       <div className="wrapper">
       	<div className="main">
       		<div className="container">
       			<div className="row">
       				<div className="col-xs-5 title-container">
       					<Title />
                 <div class="col-xs-7 form-container">
                 <Price getPrice={this.getPrice} />   
                  <PriceInfo  month={this.state.month}
                      year={this.state.year}
                      price={this.state.price}
                      error={this.state.error}
                    /> 
                      </div>
                    </div>
                  </div>
              </div>
            </div>
        </div>
      </div>
    )
  }
}

export default App



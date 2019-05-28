import React, { Component } from 'react'
import './App.css'

import Price from './ui/Price'
import PriceInfo from './ui/PriceInfo'

export class App extends Component {

  state={
    month:undefined,
    year:undefined,
    price:undefined
  }

getPrice = async(e)=>{

  e.preventDefault()
    
    const month = e.target.elements.month.value
    const year = e.target.elements.year.value

  const apiCall = await fetch(`https://yfarmapi.herokuapp.com/price/v1?month=${month}&year=${year}`)
  const data = await apiCall.json()
  console.log(data)
  if(month && year){
    this.setState({
      month:data.month,
      year:data.year,
      price:data.price
    })
  
  }else{
    this.setState({
      month:undefined,
      year:undefined,
      price:undefined
    })
  }

}



  render() {
    return (
      <div>
          <Price getPrice = {this.getPrice} />   
          <PriceInfo  month= {this.state.month}
                      year = {this.state.year}
                      price = {this.state.price}
            /> 
            
      </div>
    )

  }
}

export default App



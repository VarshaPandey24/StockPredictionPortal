import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Button from './Button'

const Main = () => {
  return (
    <>
    <Header/>
    <div className='container' >
      <div className='p-5 text-center bg-light-dark rounded'>
        <h1 className='text-light'> Stock Prediction Portal</h1>
          <p className='text-light lead'>
            This stock prediction application utilizes machine learning techniques,specifically employing Keras, and LSTM model,integrated
            within django framework.It forecasts future stock prices by analyzing 100-day and 200-day morning averages
            ,essential indicatores widely used by stock analysts to inform trading and investment decisions.
            
          </p>
           <Button  text= "Login" class ="btn-info"/>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Main
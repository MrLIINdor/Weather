import React from "react";
import './Weat.css'

class Weat extends React.Component{
    // constructor(){
    //     super()
    //     this.state = {
    //         nameCity: "",
    //         dataCiti: {}

    //       };
    // }

    // Change(text){
    //     this.setState({nameCity: text})
    // }

    // Search(evt){
    //    if(evt.KEY === "Enter"){
        
    //    }
    // }

    // componentDidMount() {
    //     const KEY = "44d87eb6df8f7bea872ffa698ae283e1",
    //         URL_BASE = "http://api.openweathermap.org/data/2.5/"


    //     fetch(`${URL_BASE}weather?q=${this.state.nameCity.value}&units=metric&APPID=${KEY}`)
    //         .then(res => res.json())
    //         .then(result => {
    //             this.setState.dataCiti(result);
    //             console.log(this.state.dataCiti)
    //             this.setState.nameCity.value = "";
    //         })

    // }

    render(){
        return(
        <div className="main-container">
            {/* onChange={event => this.Change(event.target.value)} onKeyPress={this.Search} */}
            <input type="text" className="search" placeholder="Поиск..."  />
                <div className="city">
                    <h2 className="city-name">
                        <span>New York</span>
                        <sup>US</sup>
                    </h2>

                    <div className="city-temp">
                    {Math.round(5)}
                        <sup> °C</sup>
                    </div>

                    <div className="info">
                        {/* <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} /> */}
                        <p>Cloud</p>
                    </div>
                </div>
        </div>
        )}

}

export default Weat
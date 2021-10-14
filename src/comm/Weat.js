import React from "react";
import './Weat.css'

class Weat extends React.Component{
    constructor(){
        super()
        this.state = {
            nameCity: "",
            dataCiti: {}  
          };
    }
    
    Deg(deg){
        if(deg > 1 && deg <= 45){
            return "Направление ветра: CВ"
        }else if(deg > 45 && deg <= 90){
            return "Направление ветра: В"
        } else if(deg > 90 && deg <= 135){
            return "Направление ветра: ЮВ"
        } else if(deg > 135 && deg <= 180){
            return "Направление ветра: Ю"
        } else if(deg > 180 && deg <= 225){
            return "Направление ветра: ЮЗ"
        } else if(deg > 225 && deg <= 270){
            return "Направление ветра: З"
        } else if(deg > 270 && deg <= 315){
            return "Направление ветра: СЗ"
        } else if(deg > 315 && deg <= 360){
            return "Направление ветра: С"
        }
    }


    dataCiti(data){
        this.setState({dataCiti: data})

    }

    Change(text){
        this.setState({nameCity: text})
    }

    Search = (evt) => {
       if(evt.key === 'Enter'){
        this.Change(evt.target.value)
        this.Ran()
        console.log(this.state.nameCity)
       }
    }
    

    Ran(){
        const KEY = "ffab31f93b27f5216d5b88a6e908a6e7",
            URL_BASE = "http://api.openweathermap.org/data/2.5/"
            

        fetch(`${URL_BASE}weather?q=${this.state.nameCity}&units=metric&APPID=${KEY}`)
            .then(res => res.json())
            .then(result => {
                this.dataCiti(result);
                console.log(this.state.dataCiti)
            })
    }

    // componentDidMount() {
    //     this.Ran()
    // }

    render(){

        return(
        <div className="main-container">
            <input type="text" className="search" placeholder="Поиск..."  onChange={(e) => this.Change(e.target.value)} onKeyPress={this.Search}/>
            
                <div className="city">
                    <h2 className="city-name">
                        <span>{this.state.dataCiti?.name}</span>
                        <sup>{this.state.dataCiti.sys?.country}</sup>
                    </h2>

                    <div className="city-temp">
                        {(this.state.dataCiti.main?.temp !== undefined) ? Math.round(this.state.dataCiti.main?.temp) : ""} 
                        <sup> °C</sup>
                    </div>

                    <div className="info">
                        <img className="city-icon" src={`https://openweathermap.org/img/wn/${this.state.dataCiti.weather?.[0].icon}@2x.png`} alt="" />
                        <p>{this.state.dataCiti.weather?.[0].description}</p>
                        <p>{(this.state.dataCiti.main?.humidity !== undefined) ? `Влажность: ${this.state.dataCiti.main?.humidity}%` : ""}</p>
                        <p>{(this.state.dataCiti.wind?.speed !== undefined) ? `Скорость ветра: ${this.state.dataCiti.wind?.speed} метр/сек` : ""}</p>
                        <p>{this.Deg(this.state.dataCiti.wind?.deg)}</p>
                    </div>
                </div>   
        </div>
        )}

}

export default Weat
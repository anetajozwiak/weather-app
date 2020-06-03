import React from 'react';
// import './scss/main.scss';
import { Component } from 'react';
import {Line} from 'react-chartjs-2';

import Rain from './image/rain.jpg';
import Clear from './image/sun.jpg';
import Snow from './image/snow.jpg';
import Mist from './image/mist.jpg';
import Clouds from './image/cl.jpg';
import Cloud from './image/cloud.jpg';

//Klucz do API - pogoda na dzisiaj
const APIKey = 'c17ed5bdc28b8f728c431b00dbd45bfa';
const apiDay = "bb5f6e757d923edbbe90f2c818ac0ac3";

class Form extends Component {
    render() {
        return (
            <>
            <div className={"search-box"}>
                <div className={"search"}>
                <h1 className={"formH1"}>Weather Up</h1>
                <form onSubmit={this.props.submit}>
                    <input className={"search-bar"}
                    type="text" 
                    value={this.props.value}
                    placeholder="Search..."
                    onChange={this.props.change}
                    />
                    <button className={"formBtn"}>Search</button>
                </form> 
                </div>
            </div>
            </>
        )
    }
}

class Result extends Component {
    //Formatujemy zegar
    dateBuilderTime = (t) => {
        let hour = t.getHours();
        let minut = t.getMinutes();
        let second = t.getSeconds();

        t.toDateString();
        t.toLocaleDateString();
        t.toLocaleString();
        t.toString();

        if (minut < 10) minut = "0" + minut;
        if (second < 10) second = "0" + second;
        if (hour < 10) hour = "0" + hour;

        return `${hour} : ${minut} : ${second}`
    }

    //Tworzymy datę
    Calender = (d) => {
        let months = ["January", "February", "March", "April", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${month} ${year} ${date} ${day}`
    }
        render() {
        const {city, sunrise, sunset, temp, pressure, wind, cloud, visibility, humidity, feel, main, err} = this.props.weather;
        let content = null;
        let content2 = null;
        //Jeśli nie będzie błędu utworzony zostanie widok z pogodą
        if(!err && city) {
           //Przetwarzamy wartości
            const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
            const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();
            content = (
                <>
                <div className={"resultDiv"}>

                    <div className={'resultIcon'}>
                        <h4 className={"resultH4"}>Real feel {feel}</h4>
                        <div className={"feelImg"}></div>

                        <h4 className={"resultH4"}>Humidity {humidity} %</h4>
                        <div className={"humidityImg"}></div>

                        <h4 className={"resultH4"}>Clouds {cloud} %</h4>
                        <div className={"cloudImg"}></div>
                        
                        <h4 className={"resultH4"}>Wind {wind} m/s</h4>
                        <div className={"windImg"}></div> 
                    </div>

                    <div className={'resultCity'}>
                        <div className={"calender"}>{this.Calender(new Date())}</div>
                        <div className= {"resultDate"}>{this.dateBuilderTime(new Date())}</div>

                        <h3 className={"resultCityH3"}>{city}</h3>

                        <div className={"divTemp"}>
                            <div className={"resultTempIcon"}></div>
                            <h2 className={"resultTempH2"}>{temp} &#176;C</h2>
                        </div> 

                        <h3 className={"mainH3"}>{main}</h3>
                    </div>

                    <div className={'resultIcon2'}>
                        <h4 className={"resultH4"}>Pressure {pressure} hPa</h4>
                        <div className={"pressureImg"}></div>

                        <h4 className={"resultH4"}>Visibility {visibility} km</h4>
                        <div className={"visibilityImg"}></div>

                        <h4 className={"resultH4"}>Sunrise {sunriseTime}</h4> 
                        <div className={"sunriseImg"}></div>
                        
                        <h4 className={"resultH4"}>Sunset {sunsetTime}</h4> 
                        <div className={"sunsetImg"}></div>
                    </div>
 
                </div>
                </>
            )
            
            //Zmiana tła przy zmianie opisu pogody
            const app = document.querySelector("#root");
     
            if(main === "Rain") {
                app.style.backgroundImage = `url(${Rain})`;
            }
            else if(main === "Clear" && temp > -5) {
                app.style.backgroundImage = `url(${Clear})`;
            }
            else if(main === "Snow") {
                app.style.backgroundImage = `url(${Snow})`;
            }
            else if(temp < -5) {
                app.style.backgroundImage = `url(${Snow})`;
            }
            else if(main === "Mist") {
                app.style.backgroundImage = `url(${Mist})`;
            }
            else if(main === "Clouds") {
                app.style.backgroundImage = `url(${Clouds})`;
    
            }else {
                app.style.backgroundImage = `url(${Cloud})`;
            }
        //Jeśli będzie błąd utworzona zostanie informacja 
        }else {
            content2 = (
                <div className={"errors"}>Is not in the database: {city}</div>
            )
           
        }
        return (
            <div className="result">
            {err ? content2 : content}
            </div>
        )
    }
}

class App  extends Component {
    //Stany początkowe, które będą aktualizowane
    state = {
        value: '',
        date: '',
        city: '',
        sunrise: '',
        sunset: '',
        temp: '',
        pressure: '',
        wind: '',
        cloud: '',
        visibility: '',
        humidity: '',
        feel: '',
        main: '',
        latitude: '',
        longitude: '',
        err: false,
        //day
            day1: '',
            day2: '',
            day3: '',
            day4: '',
            day5: '',
            temp1: '',
            temp2: '',
            temp3: '',
            temp4: '',
            temp5: ''
    }

    handleInputChange = e => {
        this.setState({
            value: e.target.value
        })
    }

    handleCitySubmit = e => {
        e.preventDefault();
        //Pobieranie danych z API z aktualną pogodą
        const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=${APIKey}&units=metric`;
        
        //Jeśli dostanie odpowiedź z servera odpowiedź jest pozytywna, jeśli nie to negatywna. Pozytywna odp przekaze obiekt response
        fetch(API)
        .then(response => {
            if(response.ok) { //ok czyli true, jesli blad to false
                return response
            }
            //jesli jest blad to wyłapiemy błąd i zatrzymamay dalsze działanie
            throw Error("Nie udało się")
        })
        .then(response => response.json())
        .then(data => {
            //Tworzymy aktualną godzinę
            const time = new Date().toLocaleTimeString();
            //Uzywajac wartosci korzystamy z funkcji zwracajacej obiekt. Korzystamy wtedy z aktualnych wartości state
            this.setState(state => ({
                err: false,
                date: time,
                sunrise: data.sys.sunrise,
                sunset: data.sys.sunset,
                temp: data.main.temp,
                pressure: data.main.pressure,
                wind: data.wind.speed,
                cloud: data.clouds.all,
                visibility: data.visibility,
                humidity: data.main.humidity,
                feel: data.main.feels_like,
                main: data.weather[0].main,
                city: state.value,
            }))
        })
        //pokazuje informacje o bledzie
        .catch(err => {
            console.log(err);
            this.setState(prevState => ({
                err: true,
                city: prevState.value
            }))
        }) 

        // Pobieranie danych z API z prognozą pogody
        const APIDay = `https://api.openweathermap.org/data/2.5/forecast?q=${this.state.value}&APPID=${apiDay}`;
        fetch(APIDay)
        .then(response => {
            if(response.ok) {
                return response
            }
            throw Error("Nie udało się z air")
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            this.setState(state => ({
                err: false,
                day1: data.list[9].dt_txt,
                day2: data.list[15].dt_txt,
                day3: data.list[23].dt_txt,
                day4: data.list[31].dt_txt,
                day5: data.list[39].dt_txt,
                temp1: data.list[7].main.temp,
                temp2: data.list[15].main.temp,
                temp3: data.list[23].main.temp,
                temp4: data.list[31].main.temp,
                temp5: data.list[39].main.temp,
                city: state.value,
            }))
        })
        .catch(err => {
            console.log(err);
            this.setState(prevState => ({
                err: true,
                city: prevState.value
            }))
        }) 

        
    }
    render() {
        return (
            <div className={"header"}>   
                <main className={"main"}>
                    <Form 
                        value={this.state.value} 
                        change={this.handleInputChange}
                        submit={this.handleCitySubmit}
                    />
                    <Result weather={this.state}/>
                </main>
                
                <div className={"sectionSecond"}>
                   <div className={"chartApp"}>
                        <ResultDay weatherDay={this.state} />
                    </div>  
                </div>
                   
            </div>  
            
        )
    }
}


class ResultDay extends Component {
    render() {
        const {city, day1, day2, day3, day4, day5, temp1, temp2, temp3, temp4, temp5, err} = this.props.weatherDay;
        let content = null;
        let content2 = null;
        //Przeliczanie na Celcjusza
        const tem1 = temp1 - 273.15;
        const temFix1 = (tem1.toFixed(2));
        const tem2 = temp2 - 273.15;
        const temFix2 = (tem2.toFixed(2));
        const tem3 = temp3 - 273.15;
        const temFix3 = (tem3.toFixed(2));
        const tem4 = temp4 - 273.15;
        const temFix4 = (tem4.toFixed(2));
        const tem5 = temp5 - 273.15;
        const temFix5 = (tem5.toFixed(2));
        if(!err && city) {
            content = (
                <>
                <div className={"chartLine"}> 
                    <div style={{width: "1200px", height: "700px", marginTop: "30px"}}>
                        <Line data={{
                            labels: [`${day1}`, `${day2}`, `${day3}`, `${day4}`, `${day5}`],
                            datasets: [{
                            label: 'weather forecast',
                            data: [`${temFix1}`, `${temFix2}`, `${temFix3}`, `${temFix4}`, `${temFix5}`],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)'
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)'
                            ],
                            
                            borderWidth: 2
                            }]
                        }}/>
                    </div>
                </div>
                </>
            ) 
        }
        else {
            content2 = (
                <div></div>
            )
        }
        return (
        <div className={"chartReturn"}>
        {err ? content2 : content}
        </div>
        )
    }
}


export default App;


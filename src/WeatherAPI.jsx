
import React from 'react';
import Display from './WeatherReportDisplay';
import {LinearProgress} from '@mui/material';

const API_KEY ="bdce5743574556d0b51a77a46d0b9319" 
const UNITS = "Metric"
const LANG = "en"

class WeatherAPI extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            weatherReport : null,
            isLoading : true,
            error : null
        }
    }
    componentDidUpdate() {
    // var URL = "http://api.openweathermap.org/data/2.5/weather?q=" + this.props.city
    //                     + "&lang=" + LANG + "&appid=" + API_KEY + "&units="+ UNITS
    var URL = `https://api.openweathermap.org/data/2.5/weather?q=${this.props.city}&appid=${API_KEY}&units=${UNITS}`
    console.log(URL);
    fetch(URL).then(response =>{
        if(response.ok) {return response.json() }
        else { throw new Error("SOMETHING WENT WRONG")}})
            .then(data => this.setState(
                { weatherReport : data,
                    isLoading: false }))
            .catch(error => this.setState( {error, isLoading : true }));
    }
    render() {

        if(this.state.isLoading) {
            if(this.props.city != null) {
                return (
                    <div>
                        <LinearProgress  />
                    </div>
                    )
            }
            else return null;
        }
        else {
            return(
                <Display weatherReport = {this.state.weatherReport}/>
            )
        }
    }
}

export default WeatherAPI;

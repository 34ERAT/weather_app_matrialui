import {Card, CardContent, Grid2, TextField } from "@mui/material"
import React from "react"
import WeatherAPI from "./WeatherAPI"
// import makeStyles from "@mui/material"
import { makeStyles } from '@mui/styles';
import bgImg from './img/bg_img.jpeg'

const style = makeStyles((theme)=>({
  root:{
    marginTop:50,
    display:"flex",
    width:550,
    height:250,
  },
  cardcss:{
    backgroundImage:`url(${bgImg})`,
    backgroundPosition:"center"
  }
}))
function App(){
  const classes =style();
  const [city,setCity] = React.useState(null)
  return(
  <Grid2 className={classes.root } alignItems="center">
      <Card className={classes.cardcss}></Card>
      <CardContent>
        <TextField autoFocus label="city Name" onChange={(e)=>{
          setCity(e.target.value)
        }}></TextField>
      </CardContent>
      <WeatherAPI city={city}/>
    </Grid2>
  )
}
export default App

import { React } from "react";
import { Button, TextField } from '@mui/material';
import '../src/index.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useState } from "react";
import axios from 'axios';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";


function Homepage() {

  const apiKey = "f56f24967aaf51182d1d4df628297c6d";

  const handleSearchKolkata = () =>{
    getWetherDetails("kolkata")
  }

  const handleSearchHyderabad = () =>{
    getWetherDetails("hyderabad")
  }

  const handleSearchMumbai = () =>{
    getWetherDetails("mumbai")
  }

  const handleSearchChennai = () =>{
    getWetherDetails("chennai")
  }

  const handleSearchNewDelhi = () =>{
    getWetherDetails("New Delhi")
  }

  const handleSearchBangalore = () =>{
    getWetherDetails("Bangalore")
  }

  const getWetherDetails = (cityName) => {
    if (!cityName) return
    const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey
    axios.get(apiURL).then((res) => {
      console.log("response", res.data)
      setData(res.data)
    }).catch((err) => {
      console.log("err", err)
    })
  }

  const handleSearch = (e) => {
    getWetherDetails(city, wind)
    // setWind('')
    setCity('')

  }

  const handleChange = (e) => {
    setCity(e.target.value)
  }

  const handleReset = (e) => {
    // e.preventDefault()
    setCity('')
    setData('')
  }

  const [city, setCity] = useState('');
  const [data, setData] = useState({})
  const [wind, setWind] = useState('');

  return (
    <>
      <AppBar position="static">
        <Toolbar>
         
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          

          <Typography variant="h6"
            component="div" sx={{ flexGrow: 1 }}>
            WEATHER APP
          </Typography>
          <Button onClick={handleSearchKolkata} color="inherit">Kolkata</Button>
          <Button onClick={handleSearchChennai} color="inherit">Chennai</Button>
          <Button onClick={handleSearchNewDelhi} color="inherit">New Delhi</Button>
          <Button onClick={handleSearchMumbai} color="inherit">Mumbai</Button>
          <Button onClick={handleSearchHyderabad} color="inherit">Hyderabad</Button>
          <Button onClick={handleSearchBangalore} color="inherit">Bangalore</Button>
        </Toolbar>
      </AppBar>
     <br></br> <br></br>

      <div className="card1" >
        <Card sx={{ maxWidth: 400 }}>
          <CardMedia
            component="img"
            alt="card-image"
            height="250"
            image="https://i.pinimg.com/originals/75/16/ea/7516ea5454d6ebb256d2ecb34b66a95c.gif"
          />


          <CardContent>
            {/* <input  placeholder="Enter City..."></input> */}
            <TextField sx={{ marginRight: 3 }} value={city} onChange={handleChange} id="outlined" label="Search City" variant="outlined" />
            <Button sx={{ height: 55 }} onClick={handleSearch} variant="contained">Search</Button>
            <br></br><br></br>

            {Object.keys(data).length > 0 &&
              <div>
                <Typography gutterBottom variant="h5" component="div">
                  {data?.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">Temerature :
                  {(data?.main?.temp - 273.15).toFixed(2)}°C
                </Typography>
                <Typography variant="body2" color="text.secondary"> Wind Speed :
                  {(data?.wind?.speed)} Km/hr
                </Typography>
                <br></br><br></br>

                <Button onClick={handleReset} sx={{ height: 55 }} variant="contained">Reset</Button>


              </div>
            }
          </CardContent>
        </Card>
      </div>


    </>
  );
}

export default Homepage;

import React, { useEffect, useState } from "react";
import "./App.css";
import axios from 'axios';
import Header from './components/Header';
import Image from './components/Image';
import Placecard from './components/Placecard';

const URL = 'https://api.nasa.gov/planetary/apod';
const API_Key = 'Fd3QXHXHFMSOWMjAte30yzb1lysOj7rUP8ofhgHB';
function App() {
  const dateForm = new Date() 

  const [date, setDate] = useState(
    dateForm.getFullYear() + "-" +
      ("0" + (dateForm.getMonth() + 1)).slice(-2) +
      "-" +
      ("0" + dateForm.getDate()).slice(-2)
  );


  const [ nasaData, setNasaData ] = useState([]);

  useEffect(() => {
    axios
    .get(`${URL}?api_key=${API_Key}&date=${date}`)
    .then(res => {setNasaData(res.data)})
    .catch(err => {console.log('error fetching data')})
  }, [])

  return (
    <div className="App">
      <Header nasaData = {nasaData} />
      <Image nasaData = {nasaData} />
      {/* <Placecard nasaData = {nasaData} /> */}
    </div>
  );
}
export default App;
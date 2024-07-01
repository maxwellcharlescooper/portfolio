import axios from "axios";

const fetchMoonPhase = async (cityOrZip: string, today: string) => {
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityOrZip}/${today}?unitGroup=us&key=DEFKTDKY4L3XQ47YQT4WMPF3V&include=days&elements=datetime,moonphase,moonrise,moonset`;

  try {
    const response = cityOrZip && (await axios.get(url));
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
};

const fetchMoonImage = async (
  today: string,
  hours: string,
  minutes: string
) => {
  const url = `https://svs.gsfc.nasa.gov/api/dialamoon/${today}T${hours}:${minutes}`;

  try {
    const response = today && (await axios.get(url));
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
};

const calls = { fetchMoonPhase, fetchMoonImage };

export default calls;

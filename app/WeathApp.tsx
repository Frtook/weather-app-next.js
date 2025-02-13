import { IWeather } from "@/type";
import {
  Cloud,
  Thermometer,
  Wind,
  Droplet,
  Sunrise,
  Sunset,
  Gauge,
  Eye,
  CloudSnow,
  Compass,
  Search,
} from "lucide-react";

const WeatherApp = ({ data }: { data: IWeather }) => {
  const weatherData = data;
  console.log(weatherData.data[0].city_name);

  const formatTime = (timestamp: string | number | Date) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-500 mt-10">
      <div className="max-w-4xl mx-auto bg-white/60 backdrop-blur-lg rounded-2xl p-8 shadow-xl">
        {/* Main Weather Card */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-800">
              {weatherData.data[0].city_name}
            </h1>
            <p className="text-gray-600">{weatherData.data[0].datetime}</p>
            <p className="text-2xl mt-2">
              {weatherData.data[0].weather.description}
            </p>
          </div>
          <div className="flex items-center mt-4 md:mt-0">
            <Cloud size={64} className="text-gray-700 mr-4" />
            <div>
              <span className="text-3xl md:text-6xl font-bold">
                {weatherData.data[0].temp}°C
              </span>
              <p className="text-gray-600">
                Feels like {weatherData.data[0].app_temp}°C
              </p>
            </div>
          </div>
        </div>

        {/* Weather Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white/20 p-4 rounded-xl">
            <Wind className="inline-block mr-2" />
            <span>{weatherData.data[0].wind_spd} m/s</span>
            <p className="text-sm text-gray-600">
              {weatherData.data[0].wind_cdir_full}
            </p>
          </div>
          <div className="bg-white/20 p-4 rounded-xl">
            <Droplet className="inline-block mr-2" />
            <span>{weatherData.data[0].rh}% Humidity</span>
          </div>
          <div className="bg-white/20 p-4 rounded-xl">
            <Gauge className="inline-block mr-2" />
            <span>{weatherData.data[0].pres} hPa</span>
          </div>
          <div className="bg-white/20 p-4 rounded-xl">
            <Eye className="inline-block mr-2" />
            <span>{weatherData.data[0].vis} km Visibility</span>
          </div>
          <div className="bg-white/20 p-4 rounded-xl">
            <CloudSnow className="inline-block mr-2" />
            <span>{weatherData.data[0].clouds}% Cloudiness</span>
          </div>
          <div className="bg-white/20 p-4 rounded-xl">
            <Compass className="inline-block mr-2" />
            <span>UV Index {weatherData.data[0].uv}</span>
          </div>
        </div>

        {/* Minutely Forecast */}
        <div className="bg-white/20 p-6 rounded-xl">
          <h2 className="text-xl font-bold mb-4">Hourly Forecast</h2>
          <div className="flex overflow-x-auto pb-4">
            {weatherData.minutely.map((minute, index) => (
              <div key={index} className="flex flex-col items-center px-4">
                <span className="text-sm">
                  {formatTime(minute.timestamp_local)}
                </span>
                <Thermometer className="my-2" />
                <span className="font-bold">{minute.temp}°C</span>
                <span className="text-sm text-gray-600">{minute.precip}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sunrise/Sunset */}
        <div className="grid md:grid-cols-2 gap-4 mt-8">
          <div className="bg-white/20 p-4 rounded-xl flex items-center">
            <Sunrise className="mr-4" />
            <div>
              <p className="font-bold">Sunrise</p>
              <p>{weatherData.data[0].sunrise}</p>
            </div>
          </div>
          <div className="bg-white/20 p-4 rounded-xl flex items-center">
            <Sunset className="mr-4" />
            <div>
              <p className="font-bold">Sunset</p>
              <p>{weatherData.data[0].sunset}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;

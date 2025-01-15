import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "../reducers/weatherSlice";

const WeatherUpdate = () => {
  const [isOpen, setIsOpen] = useState(true); // State to control visibility
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.weather);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        dispatch(fetchWeather({ latitude, longitude }));
      },
      (error) => console.error("Error fetching location:", error),
      { enableHighAccuracy: true }
    );
  }, [dispatch]);

  const toggleWeather = () => setIsOpen(!isOpen);

  return (
    <div
      className={`fixed bottom-10 right-0 z-10 w-full max-w-xs mx-auto mb-6 bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 transition-all duration-300 ease-in-out ${
        isOpen ? "transform translate-y-0" : "transform translate-y-full"
      }`}
    >
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white text-center mb-2">
          Weather Update
        </h2>
        <button
          onClick={toggleWeather}
          className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 focus:outline-none"
        >
          {isOpen ? "−" : "+"}
        </button>
      </div>

      {loading && (
        <div className="mt-2 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">Loading...</p>
        </div>
      )}

      {error && (
        <div className="mt-2 text-center">
          <p className="text-sm text-red-500">Error: {error}</p>
        </div>
      )}

      {data && isOpen && (
        <div className="mt-2 text-center">
          <h3 className="text-lg font-medium text-gray-700 dark:text-white">
            {data.location.name}, {data.location.region}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {data.current.condition.text}
          </p>
          <p className="text-2xl font-semibold text-gray-800 dark:text-white">
            {data.current.temp_c}°C
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Humidity: {data.current.humidity}%
          </p>
        </div>
      )}
    </div>
  );
};

export default WeatherUpdate;

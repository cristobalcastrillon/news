import React from "react";

function WeatherCard(props) {
    let data = props.data
    let currentWeather = data.current
    let icon = `http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`
    return(
        <div className='max-w-2xl border mb-4 rounded overflow-hidden shadow-lg p-3 flex flex-col'>
            <h1 className='font-bold text-lg text-center'>
                El tiempo en Cali, Colombia
            </h1>
            <img src={icon} alt='Weather icon' className="object-none"/>
            <h1 className="text-center"> {currentWeather.weather[0].main} — {currentWeather.weather[0].description} </h1>
            <table className="table-auto table-fixed">
                <tbody>
                    <tr>
                        <td className="font-bold">
                            Zona horaria
                        </td>
                        <td>
                            {data.timezone}
                        </td>
                    </tr>
                    
                    {/* Si se quiere, se puede desplegar la info de las coordenadas exactas de la medición. */}
                    {/* <tr>
                        <td className="font-bold">
                            Latitud
                        </td>
                        <td>
                            {data.lat}
                        </td>
                    </tr>
                    <tr>
                        <td className="font-bold">
                            Longitud
                        </td>
                        <td>
                            {data.lon}
                        </td>
                    </tr> */}
                    
                    <tr>
                        <td className="font-bold">
                            Nubosidad
                        </td>
                        <td>
                            {currentWeather.clouds}
                        </td>
                    </tr>
                    <tr>
                        <td className="font-bold">
                            Viento
                        </td>
                        <td>
                            {currentWeather.wind_speed} — {currentWeather.wind_deg}º
                        </td>
                    </tr>
                    <tr>
                        <td className="font-bold">
                            Amanecer
                        </td>
                        <td>
                            {Intl.DateTimeFormat('en-US', {hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(currentWeather.sunrise)}
                        </td>
                    </tr>
                    <tr>
                        <td className="font-bold">
                            Atardecer
                        </td>
                        <td>
                            {Intl.DateTimeFormat('en-US', {hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(currentWeather.sunset)}
                        </td>
                    </tr>
                    <tr>
                        <td className="font-bold">
                            Índice UV
                        </td>
                        <td>
                            {currentWeather.uvi}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default WeatherCard;
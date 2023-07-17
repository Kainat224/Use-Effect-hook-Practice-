import React, { useEffect, useState } from 'react'

const PrayerTimingsAPI = () => {

    const [prayersTiming, setPrayersTiming] = useState([]);

    const getTimings = async () => {
        const result = await fetch('https://api.aladhan.com/v1/calendar/2023/8?latitude=31.5204&longitude=74.3587&method=2');
        // setPrayersTiming(await result.json());
        const jsonData = await result.json();
        setPrayersTiming(jsonData.data);
        // console.log(jsonData.data);
    }

    useEffect(() => {
        getTimings();
    }, [])

  return (
    <>

    <h2 className='text-center'>Prayer Timings Lahore</h2>
      <div className='container-fluid my-4'>
        <div className="row">
            {
                 prayersTiming.map((curEle) => {
                    return (
                        <div className="col-md-4" key={curEle.date.timestamp}>
                        <table className="table prayerTableDesign" >
                            <thead>
                                <tr>
                                <th scope="col">Date</th>
                                <th scope="col">Fajar</th>
                                <th scope="col">Zuhar</th>
                                <th scope="col">Asar</th>
                                <th scope="col">Magrib</th>
                                <th scope="col">Isha</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th scope="row">{curEle.date.readable}</th>
                                <td>{curEle.timings.Fajr}</td>
                                <td>{curEle.timings.Dhuhr}</td>
                                <td>{curEle.timings.Asr}</td>
                                <td>{curEle.timings.Maghrib}</td>
                                <td>{curEle.timings.Isha}</td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                    )
                 })
            }
            </div>
        </div>
    </>
  )
}

export default PrayerTimingsAPI

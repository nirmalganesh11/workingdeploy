import React, { useState } from 'react';
import axios from 'axios';
import TrainScheduleTable from './TrainScheduleTable';


function App() {
  const [trainSchedule, setTrainSchedule] = useState([]);

  const fetchTrainSchedule = async () => {
    try {
      const response = await axios.get(
        'http://localhost:8000/train/schedule'
      );
      setTrainSchedule(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <h1>Train Schedule</h1>
      <button onClick={fetchTrainSchedule}>Fetch Train Schedule</button>
      <TrainScheduleTable trainSchedule={trainSchedule} />
    </div>
  );
}

export default App;

import React from 'react';

function TrainScheduleTable({ trainSchedule }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Train Name</th>
          <th>Train Number</th>
          <th>Departure Time</th>
          <th>Seats Available</th>
          <th>Price</th>
          <th>Delayed By</th>
        </tr>
      </thead>
      <tbody>
        {trainSchedule.map((train) => (
          <tr key={train.trainNumber}>
            <td>{train.trainName}</td>
            <td>{train.trainNumber}</td>
            <td>
              {train.departureTime.Hours}:{train.departureTime.Minutes}:
              {train.departureTime.Seconds}
            </td>
            <td>
              Sleeper: {train.seatsAvailable.sleeper} | AC: {train.seatsAvailable.AC}
            </td>
            <td>
              Sleeper: {train.price.sleeper} | AC: {train.price.AC}
            </td>
            <td>{train.delayedBy} minutes</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TrainScheduleTable;

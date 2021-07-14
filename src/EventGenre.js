import React, { useEffect, useState } from 'react';
import { PieChart, Pie, ResponsiveContainer, Cell } from 'recharts';

const EventGenre = ({ events }) => {

  const [data, setData] = useState([]);
  // eslint-disable-next-line
  useEffect(() => { setData(() => getData()); }, [events]);

  const getData = () => {
    const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];
    const summary = events.map((event) => {
      const eventSummary = event.summary;
      return { eventSummary };
    });

    const data = genres.map((genre) => {
      const name = genre;

      const value = summary.filter((summary) =>
        summary.eventSummary.split(' ').includes(name)
      ).length;
      return { name, value };
    });

    return data.filter((data) => data.value >= 1);
  };

  const colors = ['#fffff', '#552c0c', '#7f4514', '#b98f68', '#fffff'];

  return (
    <ResponsiveContainer height={400} width='90%'>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx={200}
          cy={200}
          labelLine={false}
          outerRadius={80}
          fill="#fffff"
          dataKey="value"
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
        >
          {
            data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index]} />
            ))
          }
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}

export default EventGenre;

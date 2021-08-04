import React, { useState, useEffect } from 'react';
const Detail = [
  {
    id: 1,
    name: 'Faizan',
    age: 22,
    Mnumber: 1111,
    DOB: 1996,
  },
  {
    id: 2,
    name: 'Ali',
    age: 19,
    Mnumber: 2222,
    DOB: 2001,
  },
  {
    id: 3,
    name: 'Umer',
    age: 53,
    Mnumber: 3333,
    DOB: 1999,
  },
];

function App() {
  const [data, setData] = useState([]);
  const [sortType, setSortType] = useState('');

  useEffect(() => {
    const sortArray = type => {
      const types = {
        name: 'name',
        age: 'age',
        Mnumber: 'Mnumber',
        formed: 'DOB',
      };
      const sortProperty = types[type];
      const sorted = [...Detail].sort((a, b) => a[sortProperty] - b[sortProperty]);
      setData(sorted);
    };

    sortArray(sortType);
  }, [sortType]);

  return (
    <div className="sorting">
      <select onChange={(e) => setSortType(e.target.value)}>
        <option value='sort by' disabled>sort by</option>
        <option value="name">Name</option>
        <option value="age">Age</option>
        <option value="Mnumber">Mobile No</option>
        <option value="formed">DOB</option>
      </select>

      {data.map(band => (
        <div key={band.id} style={{ margin: '30px' }}>
          <table><tr>
            <td>Namee</td>
            <td>Age</td>
            <td>number</td>
            <td>Birth year</td>
          </tr>
            <tr>
              <td>{` ${band.name}`}</td>
              <td>{` ${band.age}`}</td>
              <td>{`${band.Mnumber}`}</td>
              <td>{`${band.DOB}`}</td>
            </tr>
          </table>
        </div>
      ))}
    </div>
  );
}

export default App;

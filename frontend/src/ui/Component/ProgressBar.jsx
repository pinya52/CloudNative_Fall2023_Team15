import React, { useState, useEffect } from 'react';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './ProgressBar.css';

const INITIAL_INFO = {
  available: 0,
  capacity: 0,
  percentage: 0,
}

function ProgressBar({ locations = [
  {
    name: 'No PKLot Error',
    remain: 0,
    capacity: 100,
    priority: true,
  }
] }) {

  const [info, setInfo] = useState(INITIAL_INFO);
  useEffect(() => {
    const available = locations.reduce((acc, cur) => acc + cur.remain, 0);
    const capacity = locations.reduce((acc, cur) => acc + cur.capacity, 0);
    const occupied = capacity - available;
    const percentage = Math.round(occupied / capacity * 100);
    if (info.occupied !== occupied || info.capacity !== capacity) {
      setInfo({
        occupied: occupied,
        capacity: capacity,
        percentage: percentage,
      });
    }
  }, [locations, info.occupied, info.capacity]);

  return (
    <div className="ProgressBar-Container-Outer">
      <div className="ProgressBar-Container">
        <ChangingProgressProvider values={[0, info.percentage]}>
          {percentage => (
            <CircularProgressbarWithChildren value={percentage} strokeWidth={2} counterClockwise>
              <div className='ProgressTitle'> {`${info.occupied} (${percentage}%)`} </div>
              <div className='ProgressSubTitle'> {`out of ${info.capacity} parking spots used`} </div>
            </CircularProgressbarWithChildren>
          )}
        </ChangingProgressProvider>
        {/* <CircularProgressbar value={percentage} text={`${percentage}%`} strokeWidth={2} counterClockwise />; */}
      </div>
    </div>
  );
}

class ChangingProgressProvider extends React.Component {
  static defaultProps = {
    interval: 1000
  };

  state = {
    valuesIndex: 0
  };

  componentDidMount() {
    setInterval(() => {
      if (this.state.valuesIndex === this.props.values.length - 1) {
        return;
      }
      this.setState({
        valuesIndex: (this.state.valuesIndex + 1) //  % this.props.values.length
      });
    }, this.props.interval);
  }

  render() {
    return this.props.children(this.props.values[this.state.valuesIndex]);
  }
}

export default ProgressBar;
import React, { useEffect, useState } from 'react';

import type { MemberType } from '../../../types/Global';

const Timer: React.FC<{ members: MemberType[] }> = ({ members }) => {
  const [queue, setQueue] = useState<number>(1);
  const [timer, setTimer] = useState<string>('00:02:00');

  const countDown = () => {
    setTimer((time) => {
      let [hours, minutes, seconds] = time.split(':');
      if (time === '00:00:00') {
        setQueue((value) => {
          let num = value === members.length ? 1 : ++value;
          localStorage.setItem('queue', `${num}`);
          return num;
        });

        return '00:02:00';
      } else if (seconds === '00') {
        return `${hours}:${+minutes > 0 ? '0' + (+minutes - 1) : '02'}:${
          +minutes === 0 ? '00' : 59
        }`;
      } else if (+seconds > 0) {
        return `${hours}:${minutes}:${+seconds <= 10 ? '0' + (+seconds - 1) : +seconds - 1}`;
      } else {
        return time;
      }
    });
  };

  useEffect(() => {
    let [minutes, seconds]: string[] = ((new Date().getTime() / 1000 / 60) % 2)
      .toString()
      .split('.');

    seconds = `${(60 - 60 * +`0.${seconds}`).toFixed(0)}`;
    seconds = +seconds < 10 ? `0${seconds}` : seconds === '60' ? `00` : seconds;
    seconds === '00' && minutes === '0' ? (minutes = '02') : (minutes = `0${minutes}`);

    setTimer(`00:${minutes}:${seconds}`);
  }, []);

  useEffect(() => {
    if (members.length === 0) return;
    let id = setInterval(countDown, 1000);
    return () => clearTimeout(id);
  }, []);

  useEffect(() => {
    let num = (members.length * ((new Date().getTime() / 1000 / 120 / members.length) % 1) - 0.5)
    setQueue(Math.ceil(num < 0 ? 5 : num));
  }, []);

  return (
    <tr>
      <th className="table__header">ХОД</th>
      {members.map((member: MemberType, index) => (
        <td key={member.name} className="timer" data-current-member={queue === index + 1}>
          {queue === index + 1 && timer}
        </td>
      ))}
    </tr>
  );
};

export default Timer;

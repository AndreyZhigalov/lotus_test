import React from 'react';

import type { MemberType } from '../../../types/Global';

const Members: React.FC<{ members: MemberType[] }> = ({ members }) => {
  return (
    <tr>
      <th className="table__header">ПАРАМЕТРЫ И ТРЕБОВАНИЯ</th>
      {members.map((member: MemberType, index) => (
        <td key={member.name}>
          <tr>
            <th className="table__header">{`УЧАСТНИК №${index + 1}`}</th>
          </tr>
          <tr>
            <td>{member.name}</td>
          </tr>
        </td>
      ))}
    </tr>
  );
};

export default Members;

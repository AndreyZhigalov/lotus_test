import React from 'react';

import type { MemberType } from '../../../types/Global';

const Actions: React.FC<{members: MemberType[]}> = ({members}) => {
  return (
    <tr className="row">
      <td>Действия</td>
      {members.map((member) => (
        <td key={member.name}>{member.actions}</td>
      ))}
    </tr>
  );
};

export default Actions;

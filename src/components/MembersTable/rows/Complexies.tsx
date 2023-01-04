import React from 'react';

import type { MemberType } from '../../../types/Global';

const Complexies: React.FC<{ members: MemberType[] }> = ({ members }) => {
  return (
    <tr className="row">
      <td>Наличие комлекса мероприятий, повышающих стандарты качества изготовления</td>
      {members.map((member: MemberType) => (
        <td key={member.name}>{member.complexies}</td>
      ))}
    </tr>
  );
};

export default Complexies;

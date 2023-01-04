import React from 'react';

import type { MemberType } from '../../../types/Global';

const Garanties: React.FC<{ members: MemberType[] }> = ({ members }) => {
  return (
    <tr className="row">
      <td>Гарантийные обязательства, мес</td>
      {members.map((member: MemberType) => (
        <td key={member.name}>{member.garanty_months}</td>
      ))}
    </tr>
  );
};

export default Garanties;

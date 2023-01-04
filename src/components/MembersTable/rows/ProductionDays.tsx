import React from 'react';

import type { MemberType } from '../../../types/Global';

const ProductionDays: React.FC<{ members: MemberType[] }> = ({ members }) => {
  return (
    <tr className="row">
      <td>Срок изготовления лота, дней</td>
      {members.map((member: MemberType) => (
        <td key={member.name}>{member.production_days}</td>
      ))}
    </tr>
  );
};

export default ProductionDays;

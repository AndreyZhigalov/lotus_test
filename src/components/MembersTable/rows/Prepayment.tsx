import React from 'react';

import type { MemberType } from '../../../types/Global';

const Prepayment: React.FC<{ members: MemberType[] }> = ({ members }) => {
  return (
    <tr className="row">
      <td>Условия оплаты</td>
      {members.map((member: MemberType) => (
        <td key={member.name}>{`${member.prepayment}%`}</td>
      ))}
    </tr>
  );
};

export default Prepayment;

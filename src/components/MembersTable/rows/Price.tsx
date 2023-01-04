import React from 'react';

import type { MemberType } from '../../../types/Global';

const Price: React.FC<{ members: MemberType[] }> = ({ members }) => {
  return (
    <tr className="row">
      <td>Стоимость изготовления лота, руб (без НДС)</td>
      {members.map((member: MemberType) => (
        <td className="pricies" key={member.name}>
          <tr>
            <td>{`${member.price.full} руб`}</td>
          </tr>
          <tr>
            <td>{`-${member.price.discount} руб`}</td>
          </tr>
          <tr>
            <td>{`${member.price.full - member.price.discount} руб`}</td>
          </tr>
        </td>
      ))}
    </tr>
  );
};

export default Price;

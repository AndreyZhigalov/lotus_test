import React from 'react';

import Members from './rows/Members';
import Timer from './rows/Timer';
import Actions from './rows/Actions';
import Complexies from './rows/Complexies';
import ProductionDays from './rows/ProductionDays';
import Garanties from './rows/Garanties';
import Prepayment from './rows/Prepayment';
import Price from './rows/Price';

import members from '../../assets/members.json';

const MembersTable = () => {
  return (
    <table>
      <thead>
        <Timer members={members ?? []} />
        <Members members={members ?? []} />
      </thead>
      <tbody>
        <Complexies members={members ?? []} />
        <ProductionDays members={members ?? []} />
        <Garanties members={members ?? []} />
        <Prepayment members={members ?? []} />
        <Price members={members ?? []} />
        <Actions members={members ?? []} />
      </tbody>
    </table>
  );
};

export default MembersTable;

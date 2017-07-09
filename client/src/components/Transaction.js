import React from 'react';
import Divider from 'material-ui/Divider';

const Transaction = (props) => (
  <div style={{ padding: "5px"}}>
    <div style={{ padding: "5px"}}>TxHash: {props.transaction.txhash}</div>
    <div style={{ padding: "5px"}}>Block Height: {props.transaction.blockHeight}</div>
    <div style={{ padding: "5px"}}>From: {props.transaction.from}</div>
    <div style={{ padding: "5px"}}>To: {props.transaction.to}</div>
    <div style={{ padding: "5px"}}>Value: {props.transaction.value}</div>
    <Divider />
  </div>
);

export default Transaction;
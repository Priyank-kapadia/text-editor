import React from 'react'
import Alert from 'react-bootstrap/Alert';

function Alerts(props) {
  const capitalize = (word) => {
    const lower=word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
  return (
    <div style={{height:'50px'}}>
    {props.alert && <div> <Alert variant={`${props.alert.type}`}>
      <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
      </Alert>
    </div>}
    </div>
  );
}

export default Alerts

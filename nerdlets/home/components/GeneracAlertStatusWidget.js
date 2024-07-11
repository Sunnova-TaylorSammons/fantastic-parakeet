import React, { useEffect, useState } from 'react';
import { NerdGraphQuery } from 'nr1';

const ALERT_STATUS_QUERY = `
{
  actor {
    account(id: 1600356) {
      alerts {
        conditionsSearch(searchCriteria: {name: "Monitor Name"}) {
          conditions {
            name
            currentState
          }
        }
      }
    }
  }
}
`;

const AlertStatusWidget = () => {
  const [status, setStatus] = useState('green');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await NerdGraphQuery.query({ query: ALERT_STATUS_QUERY });
        const conditions = data.actor.account.alerts.conditionsSearch.conditions;

        if (conditions && conditions.length > 0) {
          const currentState = conditions[0].currentState;
          if (currentState === 'CRITICAL') {
            setStatus('red');
          } else if (currentState === 'WARNING') {
            setStatus('yellow');
          } else {
            setStatus('green');
          }
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ backgroundColor: status, padding: '20px', color: 'white' }}>
      Generac
    </div>
  );
};

export default AlertStatusWidget;



import React from 'react';

    const TasteFeedback = ({ taste }) => {
      let message = '';
      let color = '';

      if (taste === 'underextracted') {
        message = 'Dein Kaffee ist unterextrahiert! Er ist sauer und dünn.';
        color = 'text-red-500';
      } else if (taste === 'balanced') {
        message = 'Dein Kaffee ist perfekt! Er hat einen ausgewogenen Geschmack.';
        color = 'text-green-500';
      } else if (taste === 'overextracted') {
        message = 'Dein Kaffee ist überextrahiert! Er ist bitter und trocken.';
        color = 'text-yellow-500';
      }

      return (
        <div className={`mt-4 p-4 border rounded ${color}`}>
          <p>{message}</p>
        </div>
      );
    };

    export default TasteFeedback;

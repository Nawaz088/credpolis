import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const Widget = () => {
  useEffect(() => {
    // Create a script element
    const script = document.createElement('script');
    script.src = 'https://emicalculator.net/widget/2.0/js/emicalc-loader.min.js';
    script.type = 'text/javascript';
    script.async = true;

    // Append the script to the document body
    document.body.appendChild(script);

    // Clean up the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      {/* Use Helmet to add a title */}
      <Helmet>
        <title>EMI Calculator</title>
      </Helmet>

      {/* Your component content */}
      {/* ... */}
    </div>
  );
};

export default Widget;

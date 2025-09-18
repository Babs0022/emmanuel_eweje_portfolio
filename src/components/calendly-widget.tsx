
'use client';

import React, { useEffect } from 'react';

interface CalendlyWidgetProps {
  url: string;
}

const CalendlyWidget: React.FC<CalendlyWidgetProps> = ({ url }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget w-full h-[700px] min-w-[320px]"
      data-url={url}
    ></div>
  );
};

export default CalendlyWidget;


'use client';

import React from 'react';

interface CalendlyWidgetProps {
  url: string;
}

const CalendlyWidget: React.FC<CalendlyWidgetProps> = ({ url }) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: `
      <!-- Calendly inline widget begin -->
      <div class="calendly-inline-widget" data-url="${url}" style="min-width:320px;height:700px;"></div>
      <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
      <!-- Calendly inline widget end -->
    `}} />
  );
};

export default CalendlyWidget;

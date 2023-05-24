import * as React from 'react';

const MyComponent = () => {
    return (
      <a style={{fontSize: 50, display: 'flex', justifyContent: 'center', alignItems: 'center'}} href={`${process.env.PUBLIC_URL}/stock_info.html`} rel="noopener noreferrer">
        Click to get today's news
      </a>
    );
  };
  
export default MyComponent;
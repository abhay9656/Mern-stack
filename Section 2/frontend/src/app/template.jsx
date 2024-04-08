'use client'
import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Template = ({children}) => {
    useEffect(() => {
        require('bootstrap/dist/js/bootstrap.bundle.min.js')

    }, []);

  return (
    <div>
    {children}
    </div>
  );
}

export default Template;

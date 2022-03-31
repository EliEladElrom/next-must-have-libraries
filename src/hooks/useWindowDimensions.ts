/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/hooks/WindowDimensions.tsx

Implement:

import useWindowDimensions from '../../hooks/WindowDimensions'
const { height, width } = useWindowDimensions()

*/

import { useState, useEffect } from 'react';

import isSSR from '../utils/isSSR';

function getWindowDimensions() {
  if (isSSR()) {
    return { height: 0, width: 0 };
  }

  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export default function useWindowDimensions() {
  const isServer = isSSR();
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    if (isServer) {
      return () => {};
    }

    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isServer]);

  return windowDimensions;
}

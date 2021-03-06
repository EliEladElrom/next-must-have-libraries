/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
*/

import React from 'react';
import { TemplateNameDiv } from './TemplateName.css';

const TemplateName = (props: TemplateNameProps) => {
  const { ...other } = props;
  return <TemplateNameDiv {...other} />;
};

TemplateName.defaultProps = {
  // TODO
};

export interface TemplateNameProps {
  // TODO
}

export default TemplateName;

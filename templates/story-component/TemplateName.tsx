import styled, { css } from 'styled-components';

const VARIANT_STYLES = {
  primary: {
    // TODO
  },
} as const;

export const styles = (variant: TemplateNameProps['variant'] = 'primary') => css`
  // TODO
`;

const TemplateName = styled.div<TemplateNameProps>`
  ${(props) => styles(props.variant)}
`;

export interface TemplateNameProps {
  variant: 'primary';
}

export default TemplateName;

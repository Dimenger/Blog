import styled from "styled-components";

const iconContainer = ({ className, id }) => (
  <div className={className}>
    <i className={`fa ${id}`} aria-hidden="true"></i>
  </div>
);

export const Icon = styled(iconContainer)`
  font-size: ${({ size = "24px" }) => size};
  margin: ${({ margin = "0" }) => margin};
`;

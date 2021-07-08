import styled from "styled-components";
import { FlexColumn, FlexRow } from "../../App.Styles";

export const CartBox = styled(FlexRow)`
  background: #f2f2f2 0% 0% no-repeat padding-box;
  border-radius: 16px;
  height: 242px;
  justify-content: space-between;
  width: 1226px;
  
`;

export const Image = styled("img")`
  width: 38%;
  min-width: 200px;
  object-fit: cover;
  margin-right: 20px;
`;

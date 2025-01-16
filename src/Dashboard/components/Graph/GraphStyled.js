import styled from "styled-components";

export const GraphContainerStyled = styled.div`
  padding: 1rem;
  background-color: #ffffff;
  border-radius: 2rem;
  width: 100%;
`;

export const GraphHeaderStyled = styled.div`
  text-align: left;
  margin: 1rem 2rem;
`;

export const GraphHeaderTitle = styled.p`
    font-size: 1.25rem;
    font-weight: 500;
    font-family: 'Poppins';
    color: #393939;
    margin: 0;
    margin-bottom: 2rem;
`;

export const GraphHeaderLegend = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;

  h3 {
    font-size: 18px;
    font-weight: 600;
    color: #393939;
    margin: 0 .5rem 0;
    margin-right: 3rem;
  }

  div {
    font-size: 1.5rem;
    font-weight: 600;
    color: #333;
    display: flex;
    align-items: baseline;

    span {
    }

    span:last-child {
      color: green;
      font-size: 1rem;
    }
  }
`;

export const GraphBarChartStyled = styled.div`
  .recharts-wrapper {
    border-radius: .5rem;
  }

  .recharts-cartesian-axis-tick-value {
    font-size: .75rem;
    color: #666;
  }

  .recharts-legend-wrapper {
    display: none;
  }

  .recharts-tooltip-wrapper {
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .recharts-tooltip-label {
    font-size: 14px;
    font-weight: bold;
  }

  .recharts-tooltip-item {
    font-size: .75rem;
    color: #555;
  }
`;
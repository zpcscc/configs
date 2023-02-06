import type { StyledComponent } from '@emotion/styled';
import styled from '@emotion/styled';

export const Wrapper: StyledComponent<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = styled.div`
  text-align: center;

  .App-logo {
    height: 40vmin;
    pointer-events: none;
  }
  .App-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    color: white;
    font-size: calc(10px + 2vmin);
    background-color: #282c34;
  }

  .App-link {
    color: #61dafb;
  }
`;

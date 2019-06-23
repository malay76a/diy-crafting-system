import { css } from 'lit-element';

export const common = css`
  :host {
    width: 330px;
    height: 456px;
    display: block;
    position: relative;
    z-index: 0;
  }

  article {
    width: 100%;
    height: 100%;
    border-radius: 4px;
    box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.07);
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 30px;
    box-sizing: border-box;
    overflow: hidden;
  }

  :host([multiple])::after,
  :host([multiple])::before {
    content: '';
    border-radius: 4px;
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.07);
    background-color: #ffffff;
    position: absolute;
  }

  :host([multiple])::after {
    width: 310px;
    height: 459px;
    top: 12px;
    left: 10px;
    z-index: -1;
  }

  :host([multiple])::before {
    width: 290px;
    height: 474px;
    z-index: -2;
    top: 12px;
    left: 20px;
  }

  header {
    width: 330px;
    height: 300px;
    border-radius: 4px;
    position: relative;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  header::after {
    display: block;
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to bottom, rgba(72, 78, 92, 0), #484e5c);
    z-index: 1;
    top: 0;
    left: 0;
  }
  header > * {
    z-index: 2;
  }

  button {
  }

  footer {
    display: flex;
    justify-content: center;
    align-items: center;
  }


  

  

  h2,
  .sum {
    font-size: 18px;
    font-weight: 500;
    color: #ffffff;
    margin: 0;
  }

  .header-text {
    font-size: 14px;
    color: #ffffff;
  }

  .header-line {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }

  .header-line + .header-line {
    margin-top: 10px;
  }

  .more {
    position: relative;
    cursor: pointer;
    align-self: center;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .dot {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #cdd5df;
    display: inline-block;
  }
  .dot + .dot {
    margin-left: 4px;
  }
`;

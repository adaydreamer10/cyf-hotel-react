import React from "react";

const Footer = props => {
  return (
    <footer>
      <ul>
        {props.list.map(item => (
          <li>{item}</li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;

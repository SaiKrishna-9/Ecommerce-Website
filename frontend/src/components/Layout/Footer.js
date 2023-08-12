import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <h5 className="text-center">All Rights Reserved &copy; Ecom</h5>
      <p className="text-center mt-3">
        <Link to="/about">About</Link> | <Link to="/contact">Contact</Link> | 
        <Link to="/policy">PrivacyPolicy</Link>
      </p>
    </div>
  );
};

export default Footer;
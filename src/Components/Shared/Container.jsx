/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */

const Container = ({ children, className }) => {
  return <div className={`w-full max-w-[1380px] mx-auto ${className}`}>{children}</div>;
};

export default Container;

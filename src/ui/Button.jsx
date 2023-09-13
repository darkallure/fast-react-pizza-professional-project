import React from "react";
import { Link } from "react-router-dom";
function Button({ children, disabled, to, type }) {
  const base = `focus:bg inline-block rounded-full bg-yellow-400 font-semibold uppercase tracking-wide 
  text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:outline-none focus:ring 
  focus:ring-yellow-300 focus:ring-offset-2 active:bg-transparent disabled:cursor-not-allowed disabled:bg-slate-300`;
  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    small: base + " px-2 py-1 sm:px-3 sm:py-2 text-xs",
  };
  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );
  return (
    <div disabled={disabled} className={styles[type]}>
      {children}
    </div>
  );
}

export default Button;

import { Link } from "react-router-dom";
import ButtonSvg from "../assets/svg/ButtonSvg";

const Button = ({
  className,
  href,
  onClick,
  children,
  px,
  white,
  external,
}) => {
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${
    px || "px-7"
  } ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;

  const spanClasses = "relative z-10";

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );

  const renderLink = () => {
    // Si la URL comienza con '/' o no tiene protocolo, usar React Router Link
    const isInternalLink = href && (href.startsWith('/') || (!href.startsWith('http') && !href.startsWith('#')));
    
    if (isInternalLink) {
      return (
        <Link to={href} className={classes}>
          <span className={spanClasses}>{children}</span>
          {ButtonSvg(white)}
        </Link>
      );
    }
    
    return (
      <a
        href={href}
        className={classes}
        target={external ? "_blank" : "_self"}
        rel={external && "noreferrer noopener"}
      >
        <span className={spanClasses}>{children}</span>
        {ButtonSvg(white)}
      </a>
    );
  };

  return href ? renderLink() : renderButton();
};

export default Button;

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
  aiButton, // Nueva prop para el botón especial de IA
}) => {
  // Clases especiales para el botón de IA
  const aiClasses = `
    relative inline-flex items-center justify-center h-14 px-8 font-bold text-white
    bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 
    bg-size-200 animate-gradient-xy
    rounded-full overflow-hidden
    transform transition-all duration-300 hover:scale-110 hover:shadow-2xl
    before:absolute before:inset-0 before:bg-gradient-to-r 
    before:from-transparent before:via-white/20 before:to-transparent
    before:translate-x-[-100%] before:animate-shimmer
    shadow-lg shadow-purple-500/50
    border-2 border-transparent
    hover:border-white/30
    group
  `;

  const normalClasses = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${
    px || "px-7"
  } ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;

  const classes = aiButton ? aiClasses : normalClasses;
  const spanClasses = aiButton ? "relative z-10 group-hover:animate-pulse" : "relative z-10";

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      {!aiButton && ButtonSvg(white)}
      {aiButton && (
        <>
          <span className="ml-2 animate-bounce">🚀</span>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-spin-slow"></div>
        </>
      )}
    </button>
  );

  const renderLink = () => {
    const isInternalLink = href && (href.startsWith('/') || (!href.startsWith('http') && !href.startsWith('#')));
    
    if (isInternalLink) {
      return (
        <Link to={href} className={classes}>
          <span className={spanClasses}>{children}</span>
          {!aiButton && ButtonSvg(white)}
          {aiButton && (
            <>
              <span className="ml-2 animate-bounce">🚀</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-spin-slow"></div>
            </>
          )}
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
        {!aiButton && ButtonSvg(white)}
        {aiButton && (
          <>
            <span className="ml-2 animate-bounce">🚀</span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-spin-slow"></div>
          </>
        )}
      </a>
    );
  };

  return href ? renderLink() : renderButton();
};

export default Button;

/*
@copyright 2024 by AKS
@license <Apache-2.0 
*/

/*
Node modules
*/
import PropTypes from "prop-types";

/*
Primary Button
*/
const ButtonPrimary = ({
  href,
  target = '_self',
  label,
  icon,
  classes=""
}) => {
    if (href) {
        return (
          <a href={href}
          target={target}
            className={"btn btn-primary " +classes}       
          >
            {label}
            {icon ?
                <span className="material-symbols-rounded"
                aria-hidden ="true">
                    {icon}
                </span>
                : undefined
            }

          </a>  
        )
    }else{
        return(
           <button className={"btn btn-primary " +classes}>
                {label}
                {icon ?
                <span className="material-symbols-rounded"
                aria-hidden ="true">
                    {icon}
                </span>
                : undefined
            }
           </button>
        )
    }
  
}

ButtonPrimary.propTypes = {
  href: PropTypes.string,
  target: PropTypes.string,
  label: PropTypes.string.isRequired,
  icon: PropTypes.string,
  classes: PropTypes.string
}


/*
Outline Button
*/
const ButtonOutline = ({
    href,
    target = '_self',
    label,
    icon,
    classes=""
  }) => {
      if (href) {
          return (
            <a href={href}
            target={target}
              className={"btn btn-outline " +classes}       
            >
                {label}
                {icon ?
                    <span className="material-symbols-rounded"
                    aria-hidden ="true">
                        {icon}
                    </span>
                    : undefined
                }
           
            </a>  
          )
      }else{
          return(
             <button className={"btn btn-outline " +classes}>
                  {label}
                  {icon ?
                  <span className="material-symbols-rounded"
                  aria-hidden ="true">
                      {icon}
                  </span>
                  : undefined
              }
             </button>
          )
      }
    
  }
  
  ButtonOutline.propTypes = {
    href: PropTypes.string,
    target: PropTypes.string,
    label: PropTypes.string.isRequired,
    icon: PropTypes.string,
    classes: PropTypes.string
  }

  
export {
    ButtonPrimary,
    ButtonOutline
} 
import PropTypes from 'prop-types';

const CustomLink = ({ href, className, children }) => {
    const linkStyles = "text-[15px font-medium text-gray-600 cursor-pointer list-none]";

    return (
            <a 
                href='' 
                    className={({ isActive }) => 
                        isActive 
                            ? `${className} ${linkStyles} text-primary-green`
                            : `${className} ${linkStyles}`}>
            {children}
        </a>
    );
};

export { CustomLink};

CustomLink.propTypes = {
    href: PropTypes.isRequired,
    className: PropTypes.isRequired,
    children: PropTypes.isRequired,
};
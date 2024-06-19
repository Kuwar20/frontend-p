import PropTypes from "prop-types";

const CustomLink = ({ href, className, children }) => {
    const linkStyles =
        "text-[15px font-medium text-gray-600 cursor-pointer list-none]";

    return (
        <a
            href=""
            className={({ isActive }) =>
                isActive
                    ? `${className} ${linkStyles} text-primary-green`
                    : `${className} ${linkStyles}`
            }
        >
            {children}
        </a>
    );
};

const Badges = ({ color, children }) => {
    return (
        <div
            className={`w-[18px] h-[18px] ${color} rounded-full text-[12px] flex justify-center text-white`}
        >
            {children}
        </div>
    );
};

export { CustomLink, Badges };

CustomLink.propTypes = {
    href: PropTypes.isRequired,
    className: PropTypes.isRequired,
    children: PropTypes.isRequired,
};

Badges.propTypes = {
    color: PropTypes.isRequired,
    children: PropTypes.isRequired,
};

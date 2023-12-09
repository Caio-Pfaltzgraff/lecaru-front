import { Link } from "react-router-dom";

interface Props {
    component: 'button' | 'Link';
    children: React.ReactNode;
    to?: string
    type?: 'button' | 'submit' | 'reset'
}

const Button = ({component, children, to, type = 'button'} : Props) => {
    const hasButton = component === 'button';
    const style = 'bg-azul-escuro text-gray-200 lg:text-lg py-2 px-3 lg:py-3 lg:px-4 rounded-lg transition-transform duration-500 hover:scale-105 '

    return (
        <>
            {hasButton && 
                <button type={type} className={style}>{children}</button> 
                || 
                <Link className={style} to={to!}>{children}</Link>
            }
        </>
    )
}

export default Button
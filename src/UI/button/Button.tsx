import styles from './Button.module.css'

export enum ButtonType {
    submit = 'submit',
    button = 'button',
    reset = 'reset'
}

export const Button = ({children, type, customClass, value, onClick}: {children: React.ReactNode, type?: ButtonType, customClass?: string, value?: string, onClick?: React.MouseEventHandler<HTMLButtonElement>}) =>{
    const customisedClass = `${styles.buttonContent} ${customClass} `
    return (
        <button type={type} className={customisedClass} value={value} onClick={onClick}>{children}</button>
    )
}

export default Button
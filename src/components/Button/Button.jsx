import styles from './Button.module.scss';

function Button({ className = '', onClick, text}) {
    return (
		<button 
		className={`${styles.base} ${className}`}
		onClick={onClick}
		>{text}</button>
	 );
	 
}

export default Button;

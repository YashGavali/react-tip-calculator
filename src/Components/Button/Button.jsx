import styles from './Button.module.css'

const Button=( {addtoListHandler})=>{
return (<button className= {styles.buttonContainer} onClick={addtoListHandler}>Add Customer</button>)
};

export default Button;
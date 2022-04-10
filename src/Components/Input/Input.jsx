const Input = ({ billInputChangeHandler, serviceInputChangeHandler, customerInputChangeHandler }) =>{
return (
    <div style={{display:'flex',flexDirection:'column',margin:0,padding:10}}>
    <h2>Enter Your Bill Amount</h2>
    <input type='text' placeholder="Enter Bill Amount" onChange={billInputChangeHandler}/>
    <div style={{margin:50}}>
        <label htmlFor="Service">How was the service</label>
    <select onChange={serviceInputChangeHandler}>
    <option value="none" selected disabled hidden>Select an Option</option>
    <option value="0.2">Excellent</option>
    <option value="0.1">Moderate</option>
    <option value="0.05">Bad</option>
    </select>
  <input type='text' placeholder="Customer Name" style={{margin:10}} onChange={customerInputChangeHandler} />
    </div>
    </div>
)
};

export default Input;
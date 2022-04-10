import { useState } from "react";
import Button from "../Button/Button";
import CustomerList from "../CustomerList/CustomerList";
import Input from "../Input/Input";
import TotalTip from "../TotalTip/TotalTip";

const TipCalculator = ()=>{

    const [customerdataList,setcustomerdataList] = useState([]);
const[customerData, setCustomerData] = useState({
    bill:'',
    service:'',
    customerName:'',
})
console.log(customerData);
console.log(customerdataList);
return (
<>
<h1>Tip Calculator</h1>
<Input billInputChangeHandler={(event)=>{
    let updatedBill = {};
    updatedBill = {bill:event.target.value};
    setCustomerData((customerData)=>({
        ...customerData,
        ...updatedBill
    }));
    
}}
serviceInputChangeHandler={(event)=>{
    let updatedService = {};
    updatedService = {service:event.target.value};
    setCustomerData((customerData)=>({
        ...customerData,
        ...updatedService
    }));   
}}
customerInputChangeHandler={(event)=>{
    let updatedCustomer = {};
    updatedCustomer = {customerName:event.target.value};
    setCustomerData((customerData)=>({
        ...customerData,
        ...updatedCustomer
    }));
}}   
/>
<Button addtoListHandler={()=>{
   const {bill, service, customerName } = customerData;
   console.log(bill);
if(bill&&service&&customerName){
const items = [...customerdataList];
items.push(customerData);
setcustomerdataList(items);
}else alert('Please enter all the details of customer');

}
}
/>
<CustomerList customerdataList={customerdataList} />
<TotalTip  customerdataList = {customerdataList}/>
</>
)
};

export default TipCalculator;
import styles from './TotalTip.module.css'

const TotalTip = ({customerdataList}) =>{
const totalTipValue = customerdataList.reduce((total,obj)=>{
return total + (obj.bill*obj.service);
},0)

    return(
    <div className = {styles.footerContainer}>
        <button className = {styles.buttoncontainer}>Calculate Tip and Customer</button>
        <table>
            <th>Total Customer</th>
            <th>Total Tip</th>
            <tr>
                <td>{customerdataList.length}</td>
                <td>{totalTipValue}</td>
            </tr>
        </table>
    </div>
)
};

export default TotalTip;
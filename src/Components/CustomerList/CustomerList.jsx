import styles from './CustomerList.module.css'

const CustomerList = ( {customerdataList} ) =>{
    
    const listItem = customerdataList.map((item,index)=>{
        const {service, bill} = item;
return (<li key={index}>{`${item.customerName} is offering a tip of ${service*bill} rupee `}</li>)
    })
    
    return (
        <div>
            <ul className={styles.listContainer}>
                {listItem}
            </ul>
        </div>
    )
};

export default CustomerList;
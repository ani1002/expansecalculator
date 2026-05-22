import React, {useEffect} from 'react'
import { InnerLayout } from '../../styles/MainLayout'

import IncomeItem from '../Itemindividual/IncomeItem'
import styled from 'styled-components'
import ExpanseForm from '../Form/ExpanseForm'
import { useGlobalContext } from '../../context/Globalcontext'

const Expanse = () => {
  const {incomes,getIncome,deleteIncome,totalIncome,expenses,getExpanse,addExpanse,totalExpanse,deleteExpanse} = useGlobalContext();  
   //const {addIncome,incomes, getIncomes, deleteIncome, totalIncome} = useGlobalContext()
   useEffect(() =>{
    getExpanse()
}, [])
  
   return (
    <IncomeStyled>
        <InnerLayout>
        <h2>Expanse </h2>
        <h2 className='total-income'>Total Expanse :<span>${totalExpanse()}</span></h2>
        
        <div className='income-content'>
            <div className='form-container'> 
           
        <ExpanseForm/>
      </div>
        <div className='incomes'>
        
                
{expenses.map((income)=>{
        const {_id,title,amount,date,category,description,type} = income;
        return <IncomeItem 
          key= {_id}
          id = {_id}
          title= {title}
          description= {description}
          amount= {amount}
           date= {date}
           type= {type}
           category= {category}
           indicatorColor="var(--color-green)" 
           deleteItem={deleteExpanse}
        />

       })}
        </div>
        </div>
        </InnerLayout>
        </IncomeStyled>
  )

}

const IncomeStyled = styled.div`
display:flex;
overflow:auto;
.total-income{
        display: flex;
        justify-content: center;
        align-items: center;
        background: #FCF6F9;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        border-radius: 20px;
        padding: 1rem;
        margin: 1rem 0;
        font-size: 2rem;
        gap: .5rem;
        span{
            font-size: 2.5rem;
            font-weight: 800;
            color: red;        }
    }

.income-content{
  display:flex;
  gap:2rem;
  .income{
    flex:1;
  }
}
`;



export default Expanse

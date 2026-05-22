import React from 'react'
import { useGlobalContext } from '../context/Globalcontext'
import styled from 'styled-components'

const History = () => {

    const {transactionhistory} = useGlobalContext();

    const [...totalhistory] = transactionhistory();  

  return (
    <HistoryStyled>
   <h2>History</h2>

   {totalhistory.map((cur)=>{
       const {_id,title,amount,type} = cur;
       return (
        <div key={_id} className='history-item'>
            <p style={{color:type==='income'? 'var(---color-green)':'red'}}>{title}</p>
            <p style={{color:type==='income'? 'var(---color-green)':'red'}}>{type==='income'? `+${amount}`:`-${amount}`}</p>
        
        </div>
       )
      })

      }



    </HistoryStyled>
  )
}

const HistoryStyled = styled.div`

display: flex;
    flex-direction: column;
    gap: 1rem;
    .history-item{
        background: #FCF6F9;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        padding: 1rem;
        border-radius: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

`;

export default History

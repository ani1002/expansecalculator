import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [incomes, setIncomes] = useState([]);
    const [expenses, setExpenses] = useState([]);
    const [error, setError] = useState(null);

    const Base_Url = 'http://localhost:3000/api/v1/'; // Replace with your actual API URL

    const getIncome = async () => {
        try {
            const response = await axios.get(`${Base_Url}get-income`);
            setIncomes(response.data);
            console.log(response.data);
        } catch (error) {
            setError(error.message);
        }
        totalIncome();
    };

    useEffect(() => {
        getIncome();
        getExpanse();
    }, []);

    const addIncome = async (income) => {
        try {
            const response = await axios.post(`${Base_Url}add-income`, income);
            setIncomes([...incomes, response.data]);
        } catch (error) {
            setError(error.message);
        }
    };


    const deleteIncome = async(id) =>{
        const response  = await axios.delete(`${Base_Url}delete-income/${id}`);
        getIncome()
    }

    const totalIncome = () => {
        let totalIncome = 0;
        incomes.forEach((item)=>{
            totalIncome+= item.amount;
        })
        return totalIncome;
    }

    const deleteExpanse = async(id) =>{
        const response  = await axios.delete(`${Base_Url}delete-expanse/${id}`);
        getExpanse()
    }

    const getExpanse = async () => {
        try {
            const response = await axios.get(`${Base_Url}get-expanse`);
            setExpenses(response.data);
            console.log(response.data);
        } catch (error) {
            setError(error.message);
        }
        totalExpanse();
    };


    const totalExpanse = () => {
        let totalIncome = 0;
        expenses.forEach((item)=>{
            totalIncome+= item.amount;
        })
        return totalIncome;
    }

    const addExpanse = async (expanse) => {
        try {
            const response = await axios.post(`${Base_Url}add-expanse`, expanse);
            setExpenses([...expenses, response.data]);
        } catch (error) {
            setError(error.message);
        }
    };


    const totalbalance = ()=>{
        return totalIncome()- totalExpanse();
    } 




const transactionhistory = () =>{
    const totalhistory = [...incomes,...expenses];
    totalhistory.sort((a,b)=> new Date(b.createdAt) - new Date(a.createdAt))

    return totalhistory.slice(0,3);
}










    return (
        <GlobalContext.Provider value={{transactionhistory ,addIncome, incomes, expenses, error, setError, getIncome,deleteIncome,totalIncome,getExpanse,addExpanse,totalExpanse,deleteExpanse,totalbalance }}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(GlobalContext);
};

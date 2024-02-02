import axios from "axios"
import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"
import { useEffect, useState } from "react"

export const Dashboard =  () => {
    const [balance, setBalance]= useState(0);
    const getBalance= async ()=>{
        const response = await axios.get("https://pay-tm-app-api.vercel.app/api/v1/account/balance", {
                            headers: {
                                Authorization: "Bearer " + localStorage.getItem("Paytm")
                            }
        });
        console.log(response.data);
        setBalance( response.data.balance);
    }
    useEffect (()=>{
        getBalance();
    })
    return <div>
        <Appbar />
        <div className="m-8">
            <Balance value={balance} />
            <Users />
        </div>
    </div>
}
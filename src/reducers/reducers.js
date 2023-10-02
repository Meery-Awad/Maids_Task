import {  useState } from "react";
import axios from "axios";


const reminders = (state = [], action) => {

    //  here we should replace all this data by data from backEnd

    const useShareState = () => {
        const [users, setUsers] = useState([]);
        const [searchBox,setSearchBox]=useState("");
        const [userId,setUserId]=useState(-1);
       
        if (users.length==0) {
            axios.get('https://reqres.in/api/users?page={page}', {
                headers: {
                    // 'Authorization': 'Bearer ' + token,
                    "Content-Type": "application/json;charset=UTF-8"
                }
            })
                .then((response) => {
                    // handle success
                
                    setUsers(response.data.data);
            
                   
                })
                .catch((err) => {
                    // handle error
                   
                })
        }
        return {
            users,
            searchBox,setSearchBox,
            userId,setUserId
        }
        
    }

    const data = {

        useShareState,
    }




    return data;

}

export default reminders
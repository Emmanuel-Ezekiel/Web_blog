import React, { useState, useEffect } from 'react'
import axios from 'axios'

const HomePage = () => {
    const [ data, setData ] = useState([])

     const compoundId = '96f583d7-7395-412d-bb7c-5f6747ab479b'

    const getDriver = async () => {
        let res;
        try {
        res = await axios.get(`https://demoapi.remis.ng/Drivers/All?count=true&companyId=${compoundId}`)
        console.log(res)
        } catch (e) {
            console.log(e);
        }
    }
    
    useEffect(() => {
        getDriver()
        console.log(token)
    })

  return (
    <div>
        { data.map((user) => {
            <div>

            </div>
        }
        )}
    </div>
  )
}

export default HomePage
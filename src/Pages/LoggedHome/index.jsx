import React from 'react'
import { useEffect } from 'react'
import { getAccount } from '../../services/api/api'
import { useSelector } from 'react-redux'

function LoggedHome() {
    const { token } = useSelector(state => {
        return state.userReducer
    })

    const fetchData = async () => {
        try{
            const accountData = await getAccount(token)
            console.log(accountData)
        }catch(err){
            console.error(err)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

  return (
    <div>index</div>
  )
}

export default LoggedHome
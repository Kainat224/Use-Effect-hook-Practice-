import React, { useEffect, useState } from 'react';
import Loading from './shortFiles/Loading';
import GitHubUsersAPI from './shortFiles/GitHubUsersAPI';

const UseEffectApi = () => {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true)

  const getUsers = async () => {
  try{
    setLoading(false);
    const response = await fetch ('https://api.github.com/users');
    setUsers(await response.json());
    // console.log(data);

  }catch(error){
    setLoading(false);
    console.log('You have done a typing mistake' + error)
  } 
  }

  useEffect(() => {
    getUsers();
  }, [])

  if(loading){
    return <Loading/>
  }

    return (
      <>
        <GitHubUsersAPI users={users}/>
      </>
    )
  
}

export default UseEffectApi;

import React, {useState, useEffect} from 'react'

const CardAPI = () => {
    
        const [users, setUsers] = useState([])
        const getUsers = async () => {
            const response =await fetch('https://api.github.com/users');
            setUsers(await response.json());
            console.log(setUsers)
        }

        useEffect(() => {
            getUsers();
        }, [])
    
  return (
    <div>
    {/* {UseEffectAPI()} */}
        <h2>List of GitHub Users</h2>
        <div className='container-fluid mt-5'>
            <div className="row text-center">

            {
                users.map((curElem) => {
                    return (
                        <div className="col-10 col-md-4 mt-5">
                <div className=" card p-2">
                    <div className="d-flex align-items-center">
                        <div className="image"> 
                            <img src={curElem.avatar_url} className="rounded" width="155" /> 
                        </div>
                        <div className="ml-3 w-100">
                            <h4 className="mb-0 mt-0 textLeft">{curElem.login}</h4> <span className="textLeft">Web developer</span>
                            <div className="p-2 mt-2 bg-warning d-flex justify-content-between align-items-center rounded text-white stats">
                            <div className="d-flex">&nbsp; &nbsp; &nbsp;<a href={curElem.html_url} target="_blank">Visit Profile</a></div>
                                {/* <div className="d-flex flex-column"> <span className="articles">Articles</span> <span className="number1">38</span></div>
                                <div className="d-flex flex-column"> <span className="followers">Followers</span> <span className="number2" >{curElem.followers_url}</span></div>
                                <div className="d-flex flex-column"> <span className="rating">Rating</span> <span className="number3">8.9</span> </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                    )
                })

            }
                
         </div>
        </div>
    </div>
  )
}

export default CardAPI
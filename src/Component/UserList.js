import React from 'react'
import { Spinner,Button} from 'react-bootstrap'
import Users from "./Users"

const UserList = ({users, loadUsers}) => {
  console.log(users)
    return (
        <div style={{display:"flex", flexWrap:"wrap"}}  >
            {
               loadUsers? (
                <Button variant="Success" disabled>
                <Spinner
                  as="span"
                  animation="grow"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
                Loading...
              </Button>
               ):(
                   users.map((el)=> <Users user={el} key={el.id}/> )
    )
         } 
        </div>
    )
    }

export default UserList;
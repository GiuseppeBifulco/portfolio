import React, { useState } from "react";
import { users } from "../MOCK_DATA";

export default function Pagination() {
    const [page, setPage] = useState(1)
    const recordForPage = 20;
    const lastIndex = page * recordForPage
    const firstIndex = lastIndex - recordForPage
    const records = users.slice(firstIndex, lastIndex)
    const num_page = Math.ceil(users.length / recordForPage)
    const numbers = [...Array(num_page + 1).keys()].slice(1)


    const pagePrev = () => {
        if(page !== 1 ) {
            setPage(page -1)
        }
    }
    const changePage = (num) => {
        setPage(num)
    }
    
    const pageNext = () => {
        if(page !== num_page){
            setPage(page + 1)
        }
    }

  return (
    <div>
      <table className="table-fixed">
        <thead>
          <tr>
            <th>ID</th>
            <th>FirstName</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Ip Address</th>
          </tr>
        </thead>
        <tbody>
          {records.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
              <td>{user.ip_address}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav>
        <ul>
            <li>
                <a onClick={pagePrev} href="">Prev</a>
            </li>
            {
                numbers.map((num, i ) => (
                    <li key={i} className={`${page === num ? 'active' : ''}`}>
                        <a onClick={() =>changePage(num)}>{num}</a>
                    </li>
                ))
            }
            <li>
                <a onClick={pageNext} href="">Next</a>
            </li>
        </ul>
      </nav>
    </div>
  );
}





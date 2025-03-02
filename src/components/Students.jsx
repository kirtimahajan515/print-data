import React from 'react'
import Body from './Body';

const Students = () => {

    const students = [
        {rollNo:101, name:"Aarav Sharma"},
        {rollNo:102, name:"Ishita Patil"},
        {rollNo:103, name:"Roshan Gupta"},
        {rollNo:104, name:"Neha Varma"},
        {rollNo:105, name:"Kunal Mehta"},
        {rollNo:106, name:"Simran Shah"},
        {rollNo:107, name:"Aadity Rao"},
        {rollNo:108, name:"Priya Iyer"},
        {rollNo:109, name:"Varun Joshi"},
        {rollNo:110, name:"Kalpesh Nakta"},
      ]


  return (
    students.map((student) => (
        <Body key={student.id} name={student.name} rollNo={student.rollNo}/>
   ))
  )
}

export default Students;
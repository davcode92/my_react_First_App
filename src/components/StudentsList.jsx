import React from "react";

const StudentsList = () => {
  let students = [
    {
      id: Math.random(),
      name: "Killian",
      attendance: "is Present",
      url:"https://www.creativefabrica.com/wp-content/uploads/2022/11/21/Black-Boy-Retro-Charming-Avatar-47769583-1.png",
    },
    {
      id: Math.random(),
      name: "Isis",
      attendance: "is Present",
      url: "https://www.shutterstock.com/image-vector/black-woman-smiling-portrait-vector-600nw-2281497689.jpg",
    },

    {
      id: Math.random(),
      name: "Yvon",
      attendance: "is Present",
      url:"https://as1.ftcdn.net/v2/jpg/05/71/35/08/1000_F_571350807_CpzPdIH64mtVOJ935wPI0wjdr45VQmKo.webp",
    },
  ];

  return (
  <div>
    {students.map((el) =>(
    <div style={{
        backgroundColor:"blue",
        border:"2px solid black",
        borderRadius:"10px",
        margin:"25px",
        }}>
     <img src={el.url} width={"150px"} alt="imageStudents"/>
     <h1>{el.name}</h1>
     <p>{el.attendance}</p>
     <p>{el.id}</p>
    </div>
    ))}
    </div>
    );
};

export default StudentsList;

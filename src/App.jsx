import React from 'react'
import Section from './component/Section1/Section1'
import Section2 from './component/Section2/Section2'

const App = () => {
  
  const cardsData = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmVzc2lvbmFsfGVufDB8fDB8fHww",
    number: "1",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae magnam soluta tempora incidunt at provident!",
    status: "Satisfied",
  },
  {
    id: 2,
    image:
      "https://media.istockphoto.com/id/1827291486/photo/a-dedicated-mentor-is-explaining-mentees-importance-of-project-while-sitting-at-the-boardroom.webp?a=1&b=1&s=612x612&w=0&k=20&c=3PCse04HxmDXn6LsY1MuQsh01AflW_wR0jwF4tYZ8QY=",
    number: "2",
    description:
      "Building clean and responsive user interfaces with modern tools.",
    status: "Happy",
  },
  {
    id: 3,
    image:
      "https://media.istockphoto.com/id/2208637349/photo/smiling-latin-hispanic-female-marketing-manager-professional-it-specialist-working-browsing.webp?a=1&b=1&s=612x612&w=0&k=20&c=U6KESKXkWqx2U2gYsDDFD9ZpDqs-_tMS-PlQeVARO0M=",
    number: "3",
    description:
      "Focused on delivering scalable and maintainable frontend solutions.",
    status: "Approved",
  },
  {
    id: 4,
    image:
      "https://plus.unsplash.com/premium_photo-1661497872795-527c059a7bdb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG9mZmljZSUyMHdvcmtpbmclMjBwcm9mZXNpb25hbHxlbnwwfHwwfHx8MA%3D%3D",
    number: "4",
    description:
      "Collaborating with teams to build user-centric products.",
    status: "Excellent",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1657727534676-cac1bb160d64?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8b2ZmaWNlJTIwd29ya2luZyUyMHByb2Zlc2lvbmFsfGVufDB8fDB8fHww",
    number: "5",
    description:
      "Turning ideas into beautiful and functional digital experiences.",
    status: "Satisfied",
  },
];


  return (
    <div className=''>
      <Section users={cardsData}/>
      
    </div>
  )
}

export default App

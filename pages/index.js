import Head from 'next/head';
import styled from 'styled-components';
import Image from 'next/image'


const Display = styled.div`
  height: 80vh;
  display: flex;
  justify-content: left;
  align-items: center;
  background: #C0C0C0;
`;

const Name  = styled.h1`
  color: #00008B;
  font-size: 11rem;
  font-weight:50;
`;
const sto = styled.div`
justify-content: right;
align-items: right
`


export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Display>
      <Name>bb</Name>
      <p>This is Bongani Bulunga, A graduate from the University of Johannesburg
         who abtained a BSc Computer Science and Informatics. Back in 2016 I was appointed as a mentor
         by Resolution Cycle were  I mentored almost 13 Jozi Digital Ambassodors, teaching them how to make
         use of the internet by accessing the Jozi free Wi-fi and making use of the services available.
         This project helped me to develop leadership skills, time management and sharing ideas by providing
         a positive direction to others. In 2020 I was an Audio Visual  Unit assitant at the University of Johannesburg,
         were My duties were to help with audio and digital devices by ensuring that they are connected to the internet
         before the begining of a lecture, by doing so the love for coding and technology grew in me.
         <br></br>
         <br></br>
          WHY SovTec? <br></br>
          I truly believe that SovTec will help me grow the neccessary skills to build my career by adding on 
          what I have already aquired through the course of my studies and i can be great asset to the company.</p>
      <Image src ="/bulunga.jpg" width ={900} height ={1200}/>
      </Display>
    </>

  );
}
import React, { useState } from 'react'
import Example3_ from './../component/Example3'
import { styled } from 'styled-components'

const Content = styled.div`
  display: flex;
  width: 500px;
  justify-content: space-between;

`
const ContentItem = styled.div`
  display: flex;
  justify-content: space-between;
  width:500px;
`

const Count = styled.div`
  display: flex;
  width: 500px;
  justify-content: space-between;
  
`
function Example3() {
    let [ data, setData] = useState(Example3_)
    let [animal, setAnimal] = useState("전체")
    const [gender, setGender] = useState("전체")

    const dataFilter = data.filter(e=>{
      if(animal === "전체"){
        return e.animal
      }else{
        return e.animal === animal
      }
    })
  
const animaltype = [...new Set(data.map(e=>e.animal))]
   console.log(animaltype)
  return (
   <Content>
    <ul>
      <li onClick={()=>{setAnimal("전체")}}>전체</li>
      {
        animaltype.map((e,i)=>{
          return(
            <ContentItem>
            <li key={i} onClick={()=>setAnimal(e)}>{e}</li>
            </ContentItem>
          )
        })
      }
    </ul>
    <Count>
      {
        dataFilter.map((el,i)=>{
          return(
            <>
            <p key={i}>{el. height}</p>
            <p>{el.gender}</p>
            </>
          )
        })
      }
      </Count>
   </Content>

  )
}
export default Example3
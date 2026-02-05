import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import  orange from  "./assets/juice img/background/orange.png" 
import  orangeGlass from "./assets/juice img/bottle img/orangeGlass.png"
import  red from  "./assets/juice img/background/red.png" 
import  redCan from "./assets/juice img/bottle img/redCan.png"
import  green from  "./assets/juice img/background/green.png" 
import  greenCan from "./assets/juice img/bottle img/greenCan.png"
// check it by not using routing and use key prop instead with usestate
import './App.css'
function juiceDetails(currentJuice){
  const [orangeDetail,redDetail,greenDetail]=[{name:'Orange',juiceImg:orangeGlass,backgroundImage:orange,themeLine:'100% freshness and nutrients to keep you going '},{name:'Red',juiceImg:redCan,backgroundImage:red,themeLine:'100% freshness and nutrients to keep you going '},{name:'Green',juiceImg:greenCan,backgroundImage:green,themeLine:'100% freshness and nutrients to keep you going '}]
if (currentJuice==='green'){return greenDetail}
else if(currentJuice==='red'){return redDetail}
else{return orangeDetail }
}
function Home() {
  const {juice}=useParams()
  console.log(juice)
  
  const juiceDetail = juiceDetails(juice)
  return (<>
  <div key={juice} className={'backgroundDiv '} style={{backgroundImage:`url(${juiceDetail.backgroundImage})`}}>
     <div className='headTextDiv'>
    <h3 className='headText'>Juise lab  </h3><div className='juiceNameDiv'>
    <p className='juiceName'>{juiceDetail.name}</p>
    </div>
    </div>
    <div className='juiceImgDiv'>
    <img className='juiceImg' src={juiceDetail.juiceImg} alt="" />
   
   </div>
    <div className='themeLineDiv'>
    <p className='themeLine'>100% freshness and nutrients to keep you going </p>
     <button className='seeMore'>See more</button>
    </div>
    <nav className='mainNav'>
      
     <Link to='/red'> <div className= {(juice==='red')?'juiceNav selected':'juiceNav' } ><img className='juiceNavImg' src={redCan}></img></div></Link>
    <Link to='/'>  <div className={(juice==='orange')?' juiceNav selected  ':'juiceNav'} ><img className='juiceNavImg' src={orangeGlass}></img></div></Link>
     <Link to='/green'> <div className={(juice==='green')?'juiceNav selected':'juiceNav'} ><img className='juiceNavImg' src={greenCan}></img></div></Link>
    </nav>
  </div>
  </>)
}

export default Home

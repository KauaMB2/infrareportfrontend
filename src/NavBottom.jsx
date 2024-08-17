import searchGrayIcon from './images/navigationBarIcons/GrayIcons/Search.png'
import reportListGrayIcon from './images/navigationBarIcons/GrayIcons/Reports.png'
import exitGrayIcon from './images/navigationBarIcons/GrayIcons/Exit.png'
import filterGrayIcon from './images/navigationBarIcons/GrayIcons/Filter.png'

import searchBlueIcon from './images/navigationBarIcons/BlueIcons/Search.png'
import reportListBlueIcon from './images/navigationBarIcons/BlueIcons/Reports.png'
import exitBlueIcon from './images/navigationBarIcons/BlueIcons/Exit.png'
import filterBlueIcon from './images/navigationBarIcons/BlueIcons/Filter.png'

import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import "./styles/NavBottom.css"
import { useState, useEffect } from "react"

const NavBottom = ({ setCep, setMarkerPoints, loggedIn, setLoggedIn, userEmail, userPassword, showSearchModal, showFilterModal, setEmail, setPassword, setShowSearchModal, setShowFilterModal }) => {
  const [isReportsClicked, setIsReportsClicked] = useState(true)
  const navigate = useNavigate()
  useEffect(()=>{
    console.log(isReportsClicked)
  },[])
  const logout = () => {
    setLoggedIn(false)
    localStorage.setItem('isLoggedIn', false)
    localStorage.setItem('email', "")
    localStorage.setItem('password', "")
    localStorage.setItem('cep', "")
    setEmail("")
    setPassword("")
    setCep("")
    setMarkerPoints([])
    navigate('/login/citizen')
  }
  useEffect(() => {
    if (isReportsClicked===true) {//When isReportsClicked is true...
      navigate('/')//Redirect it to the Map page
    }
  }, [isReportsClicked])
  const handleReportsClick = () => {
    setIsReportsClicked((currentValue) => !currentValue)//Toggle the isReportsClicked value
  }
  return (
    <>
      <nav className="bottomNavBar">
        <div className="searchBtn bottomNavBar_Div" onClick={() => { setShowSearchModal(true) }}>
          <img src={showSearchModal ? searchBlueIcon: searchGrayIcon} className="searchGrayIcon iconSVG" alt="searchGrayIcon" />
          <label className={showSearchModal && 'clicked'}>Pesquisar</label>
        </div>
        <div className="filterDiv bottomNavBar_Div" onClick={() => { setShowFilterModal(true) }}>
          <img src={showFilterModal ? filterBlueIcon : filterGrayIcon} className="searchGrayIcon iconSVG" alt="searchGrayIcon" />
          <label className={showFilterModal && 'clicked'}>Filtrar</label>
        </div>
        <Link to="/reports" className={`reportListDiv bottomNavBar_Div`} onClick={handleReportsClick}>
          <img src={!isReportsClicked ? reportListBlueIcon : reportListGrayIcon} className="reportListGrayIcon iconSVG" alt="reportListGrayIcon"/>
          <label className={!isReportsClicked && 'clicked'}>Reportes</label>
        </Link>
        <div className="exitDiv bottomNavBar_Div" onClick={logout}>
          <img src={exitGrayIcon} className="exitGrayIcon iconSVG" alt="reportListGrayIcon"/>
          <label>Sair</label>
        </div>
      </nav>
    </>
  )
}
export default NavBottom
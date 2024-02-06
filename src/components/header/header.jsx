import React from 'react'
import styles from './header.module.css'
import location from '../../assets/images/location.svg'
import arrow from '../../assets/images/arrowDown.svg'
import search from  '../../assets/images/search.svg'
import profile from  '../../assets/images/profile.svg'
import bag from  '../../assets/images/bag.svg'
export const Header= ({isSearchOpen,setSearchStatus}) => {
  return (
    <>
    <header>
        <div className={styles.timingHeader}>Timings For The Ordering Are 2:00 pm - 2:00 am!</div>
        <div className={styles.headerRest}>
            <div className={styles.headerFirst}>
                <div className={styles.headerLocation}>
                    <img src={location} alt="" />
                </div>
                <div className={styles.headerLocationDetails}>
                    <div className={styles.headerCurrentLocation}>
                        <div className={styles.hCLtext}>Current Location</div>
                        <img src={arrow} alt="" className={styles.hCLimg} />
                    </div>
                    <div className={styles.headerNearestBranch}>DHA</div>
                </div>
            </div>
            <div className={styles.headerSecond}>
                <img src="" alt="" />
            </div>
            <div className={styles.headerThird}>
                <div className={`${styles.headerSearchBar} ${isSearchOpen ? styles.headerSearchBarOpen : styles.headerSearchBarClosed}`}>
                    <input placeholder='Search for Product' type="text" />
                </div>
                <div className={styles.headerOptions}>
                    <div className={styles.headerSearch} onClick={()=>{setSearchStatus(!isSearchOpen)}}>
                        <img src={search} alt="" />
                    </div>
                    <div className={styles.headerProfile}><img src={profile} alt="" /></div>
                    <div className={styles.headerBag}>
                        <img src={bag} alt="" />
                        <div className={styles.headerBagAbsolute}>9</div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    </>
  )
}

import React from 'react';
import "../Qualification/qualification.css";
import { FaUserGraduate , FaCalendar } from 'react-icons/fa';

function Qualification() {
  return (
    <div className='qualification'>
        <h2 className='qualification-header'>Qualification</h2>
        <div className='qualification-container'>
            <div className='qualification-tabs'>
                <div className='qualification-button'>
                    <span><FaUserGraduate/></span>Education
                </div>
            </div>
            <div className='qualification-section'>
                <div className='qualification-content'>
                    <div className='qualification-data'>
                        <div className='qualification-table'>
                            <h3 className='qualification-title'>B.E (Computer Science & Engineering)</h3>
                            <span className='qualification-subtitle'>Thane, Mumbai</span>
                            <div className='qualification-date'>
                                <span className='degree'><FaCalendar/></span>"2018 - 2022"
                            </div>
                        </div>
                        <div>
                            <span className='qualification-rounder'></span>
                            <span className='qualification-line'></span>
                        </div>
                    </div>
                    <div className='qualification-data'>
                        <div></div>
                        <div>
                            <span className='qualification-rounder'></span>
                        </div>
                        <div>
                            <h3 className='qualification-title'>H.S.C</h3>
                            <span className='qualification-subtitle'>Mumbai,Maharashtra</span>
                            <div className='qualification-date'>
                                <span className='college'><FaCalendar/></span>"2016 - 2017"
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Qualification
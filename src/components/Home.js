import React from 'react'
import '../css/home.css'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className="main-container">
            <div className="wrapper">
                <Link to='/apply' className="apply-btn">
                    <div>
                        Apply For Letter
                    </div>
                </Link>
                <div className="applied">
                    <h1>Students Applied For Letter</h1>
                    <table className='table'>
                        <tbody>
                            <tr className='tr'>
                                <th className='th'>Name</th>
                                <th className='th'>Symbol number</th>
                            </tr>
                            <tr>
                                <td className='td'>'.$row['name'].'</td>
                                <td className='td'>'.$row['symbol_num'].'</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="confirmed">
                    <h1>Confirmed Students</h1>
                    <table className='table'>
                        <tbody>
                            <tr className='tr'>
                                <th className='th'>Name</th>
                                <th className='th'>Symbol number</th>
                            </tr>
                            <tr className='tr'>
                                <td className='td'>'.$row['name'].'</td>
                                <td className='td'>'.$row['symbol_num'].'</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div >
        </div >
    )
}

export default Home

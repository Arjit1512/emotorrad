import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { PieChart, Pie, Cell } from 'recharts';
import '../styling/Home.css';
import { useMyContext } from './Context';

const Dashboard = () => {
    const activityData = [
        { week: 'Week 1', User: 500, Guest: 400 },
        { week: 'Week 2', User: 350, Guest: 450 },
        { week: 'Week 3', User: 200, Guest: 300 },
        { week: 'Week 4', User: 400, Guest: 350 },
    ];

    const productData = [
        { name: 'Basic Tees', value: 35 },
        { name: 'Custom Short Pants', value: 31 },
        { name: 'Super Hoodies', value: 34 },
    ];

    const COLORS = ['#4ade80', '#facc15', '#f87171'];
    const { userProfile, setUserProfile } = useMyContext();

    const [showPopup, setShowPopup] = useState(false);
    console.log('USER: ',userProfile);


    return (
        <div className="dashboard">
            <div className="sidebar">
                <h1 className="logo">Board.</h1>
                <nav className="nav-menu">
                    <a className="nav-item active">Dashboard</a>
                    <a className="nav-item">Transactions</a>
                    <a className="nav-item">Schedules</a>
                    <a className="nav-item" onClick={() => setShowPopup(true)}>Users</a>
                    <a className="nav-item">Settings</a>
                </nav>
            </div>

            {showPopup && (
                <>
                    <div className="overlay" onClick={() => setShowPopup(false)} />
                    <div className='pop-up'>
                        <h1>Add New Profile</h1>
                        <button className="close-btn" onClick={() => setShowPopup(false)}>×</button>

                        <div>
                            <label>Enter Name*</label>
                            <input placeholder='Eg. John Doe' />
                        </div>

                        <div>
                            <label>Enter Email*</label>
                            <input placeholder='Eg. John@xyz.com' />
                        </div>

                        <div>
                            <label>Enter Phone*</label>
                            <input placeholder='Eg. 9123456789' />
                        </div>

                        <button className="next-btn">Next</button>
                    </div>
                </>
            )}

            <div className="main-content">
                <header className="header">
                    <h2>Dashboard</h2>
                    <div className="header-right">
                        <input type="search" placeholder="Search..." className="search-input" />
                        <button className="notification-btn">🔔</button>
                        <div className="profile-pic">
                            <img
                                src={userProfile.picture || 'https://th.bing.com/th/id/OIP.dCpgPQ0i-xX2gZ-yonm54gHaHa?w=185&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7'}
                                alt="Profile"
                                className="profile-pic"
                                style={{
                                    width: '35px',
                                    height: '35px',
                                    borderRadius: '50%',
                                    objectFit: 'cover'
                                }}
                            />
                        </div>
                    </div>
                </header>

                <div className="stats-grid">
                    <div className="stat-card">
                        <div className="stat-icon">💰</div>
                        <div className="stat-info">
                            <h3>Total Revenues</h3>
                            <p className="stat-value">$2,129,430</p>
                            <span className="stat-change">+2.5%</span>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon">🛒</div>
                        <div className="stat-info">
                            <h3>Total Transactions</h3>
                            <p className="stat-value">1,520</p>
                            <span className="stat-change">+1.7%</span>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon">👥</div>
                        <div className="stat-info">
                            <h3>Total Users</h3>
                            <p className="stat-value">9,721</p>
                            <span className="stat-change">+1.4%</span>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon">👥</div>
                        <div className="stat-info">
                            <h3>Total Users</h3>
                            <p className="stat-value">9,721</p>
                            <span className="stat-change">+4.2%</span>
                        </div>
                    </div>
                </div>

                <div className="chart-card">
                    <h3>Activities</h3>
                    <p className="chart-date">May - June 2021</p>
                    <div className="chart-container">
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={activityData}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                <XAxis dataKey="week" />
                                <YAxis />
                                <Bar className='bar' dataKey="User" fill="#4ade80" radius={[4, 4, 0, 0]} />
                                <Bar className='bar' dataKey="Guest" fill="#f87171" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="bottom-grid">
                    <div className="chart-card cc">
                        <h3>Top products</h3>
                        <p className="chart-date">May - June 2021</p>
                        <div className="pie-container">
                            <div className="pie-chart-wrapper">
                                <ResponsiveContainer width="60%" height={200}>
                                    <PieChart>
                                        <Pie
                                            data={productData}
                                            innerRadius={60}
                                            outerRadius={80}
                                            paddingAngle={5}
                                            dataKey="value"
                                        >
                                            {productData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                            ))}
                                        </Pie>
                                    </PieChart>
                                </ResponsiveContainer>
                                <div className="pie-legend">
                                    {productData.map((entry, index) => (
                                        <div key={entry.name} className="legend-item">
                                            <div className="legend-color" style={{ backgroundColor: COLORS[index] }}></div>
                                            <div className="legend-info">
                                                <p className="legend-name">{entry.name}</p>
                                                <p className="legend-value">{entry.value}%</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="add-profile-card">
                        <button className="add-profile-btn">
                            <span className="plus-icon">+</span>
                            <p>Add Profile</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
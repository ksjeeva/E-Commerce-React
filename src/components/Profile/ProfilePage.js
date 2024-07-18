import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProfilePage = () => {
    const [userData, setUserData] = useState({});
    const [orderHistory, setOrderHistory] = useState([]);
    const [savedItems, setSavedItems] = useState([]);

    useEffect(() => {
        // Fetch user data
        axios.get('/profile')
            .then(response => {
                setUserData(response.data);
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
            });

        // Fetch order history
        axios.get('/orders')
            .then(response => {
                setOrderHistory(response.data);
            })
            .catch(error => {
                console.error('Error fetching order history:', error);
            });

        // Fetch saved items
        axios.get('/saved-items')
            .then(response => {
                setSavedItems(response.data);
            })
            .catch(error => {
                console.error('Error fetching saved items:', error);
            });
    }, []);

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Profile Information</h5>
                            <p><strong>Name:</strong> {userData.name}</p>
                            <p><strong>Email:</strong> {userData.email}</p>
                            <p><strong>Joined:</strong> {new Date(userData.joinedDate).toLocaleDateString()}</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="card mb-4">
                        <div className="card-body">
                            <h5 className="card-title">Order History</h5>
                            {orderHistory.length > 0 ? (
                                <ul className="list-group">
                                    {orderHistory.map(order => (
                                        <li key={order.id} className="list-group-item">
                                            Order #{order.id} - {order.status} - {new Date(order.date).toLocaleDateString()}
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p>No orders found.</p>
                            )}
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Saved Items</h5>
                            {savedItems.length > 0 ? (
                                <div className="row">
                                    {savedItems.map(item => (
                                        <div key={item.id} className="col-md-4 mb-3">
                                            <div className="card">
                                                <img src={item.image} className="card-img-top" alt={item.name} />
                                                <div className="card-body">
                                                    <h6 className="card-title">{item.name}</h6>
                                                    <p className="card-text">${item.price}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p>No saved items found.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;

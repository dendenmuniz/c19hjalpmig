import React from 'react';

function UserProfileWorkInfo({user,onEditClick}) {
    return (
        <div className="card text-white bg-secondary mb-3">
        <div className="card-body text-secondary bg-light hight">
            <h4 className="card-title" >Work Info</h4>
            <div className="form-group">
                <label>Job Titel:</label>
                <p>{user.jobTitel}</p>
                <label>Job Position</label>
                <p>{user.responsibility}</p>
                <label>CompanyName:</label>
                <p>{user.companyName}</p>

            </div>
            

            <button class="btn btn-secondary" onClick={onEditClick}>Edit</button>
        </div>
    </div>
    );
}

export default UserProfileWorkInfo;
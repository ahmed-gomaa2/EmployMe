import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getCurrentProfile} from '../../actions/profile';
import Spinner from "../layout/Spinner";
import {Link} from "react-router-dom";
import DashboardAction from "./DashboardAction";
import Experience from "./Experience";
import Education from "./Education";
import {deleteAccount} from "../../actions/profile";

const Dashboard = ({auth: {user},deleteAccount, getCurrentProfile, profile: {profile, loading}}) => {

    React.useEffect(() => {
        console.log('render')
        getCurrentProfile();
    }, [getCurrentProfile])

    return loading && profile === null ? <Spinner /> : <Fragment>
        <h1 className={'large text-primary'}>Dashboard</h1>
        <p>
            <i className={'fas fa-user'} /> Welcome {user && user.name}
        </p>

        {profile !== null ? <Fragment>
            <DashboardAction />
            <Experience experience={profile.experience} />
            <Education education={profile.education} />
            <div className={'my-2'} >
                <button onClick={() => deleteAccount()} className={'btn btn-danger'}>
                    <i className={'fas fa-user-minus'}></i> Delete Account
                </button>
            </div>
        </Fragment> : <Fragment>
            <p>You have not yet setup a profile, please add some info</p>
            <Link to={'/create-profile'} className={'btn btn-primary my-1'}>
                Create Profile
            </Link>
        </Fragment>}
    </Fragment>
};

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
    deleteAccount: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
})

export default connect(mapStateToProps, {deleteAccount, getCurrentProfile}) (Dashboard);
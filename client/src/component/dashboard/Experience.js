import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect } from 'react-redux';
import Moment from "react-moment";
import {deleteExp} from "../../actions/profile";

const Experience = ({experience, deleteExp, profile}) => {
    const experiences = experience.map(exp => (
        <tr key={exp._id}>
            <td>{exp.company}</td>
            <td className={'hide-sm'}>{exp.title}</td>
            <td>
                <Moment format={'YYYY/MM/DD'}>{exp.from}</Moment> - {
                exp.to === null ? (
                    ' Now'
                ) : (
                    <Moment format={'YYYY/MM/DD'}>{exp.to}</Moment>
                )
            }
            </td>
            <td>
                <button className={'btn btn-danger'} onClick={() => {
                    deleteExp(exp._id);
                    console.log(profile)
                }}>Delete</button>
            </td>
        </tr>
    ));
    return (
        <Fragment>
            <h2 className={'my-2'}>Experience Credentials</h2>
            <table className={'table'}>
                <thead>
                <tr>
                    <th>Company</th>
                    <th className={'hide-sm'}>Title</th>
                    <th className={'hide-sm'}>Years</th>
                </tr>
                </thead>
                <tbody>{experiences}</tbody>
            </table>
        </Fragment>
    );
};

Experience.propTypes = {
    experience: PropTypes.array.isRequired,
    deleteExp: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    // experience: state.profile.experience
    profile: state.profile
})

export default connect(mapStateToProps, {deleteExp}) (Experience);
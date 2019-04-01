import React, { Component } from 'react'
import PropTypes  from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Spinner from '../common/Spinner'
import { getHodHome } from '../../actions/hodActions'
import FacultyFeed from './FacultyFeed'

class HODDashboard extends Component {

  componentDidMount () {
    this.props.getHodHome(this.props.match.params.id);
    console.log("Called");
  }
  render () {
    const { home, loading,faculty} = this.props.hod
    let dashboardContent
    if ((home === null) || loading ) {
      dashboardContent = <Spinner/>
    } else {
      if(!faculty) {
        dashboardContent = (
          <div className="col-md-12">
            <div className="desc">
              <h1 style={{boxShadow: '0 4px 8px 0 rgba(0, 0, 100, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}
                  className="rounded border bg-dark text-light p-1 pl-3 pr-5">Department of Computer Science
                Engineering</h1>
              <h3 className='text-center'>{home.noFaculty}</h3>
            </div>
          </div>
        )
      }else {
        dashboardContent = (
          <div className="col-md-12">
            <div className="desc">
              <h1 style={{boxShadow: '0 4px 8px 0 rgba(0, 0, 100, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}
                  className="rounded border bg-dark text-light p-1 pl-3 pr-5">Department of +{home.department.departmentName}</h1>
              <h3>&nbsp;Faculty</h3>

              <table  className="tableGrid rounded border"
                     style={{boxShadow: '0 4px 8px 0 rgba(0, 0, 100, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',width : '100%'}} border="0">
                <tbody>
                <tr>
                  <td>
                    <strong style={{fontFamily: 'Arial', fontSize: '14pt'}}>Faculty Name</strong>
                  </td>
                  <td>
                    <strong style={{fontFamily: 'Arial', fontSize: '14pt'}}>Email Address </strong>
                  </td>
                  <td>
                    <strong style={{fontFamily: 'Arial', fontSize: '14pt'}}>Personal Website</strong>
                  </td>
                </tr>
                <FacultyFeed faculty = {home.faculty}/>
                </tbody>
              </table>
            </div>
          </div>
        )
      }

    }

    return (
      <div className="container hodDashboard">
        <div className="row">
          {dashboardContent}
          </div>
        </div>
    )
  }
}

HODDashboard.propTypes = {
  getHodHome: PropTypes.func.isRequired,
  hod: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  hod: state.hod,
})

export default connect(mapStateToProps, { getHodHome })(HODDashboard)

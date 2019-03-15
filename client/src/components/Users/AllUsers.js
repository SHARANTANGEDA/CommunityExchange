import React, { Component } from 'react'
import PropTypes  from 'prop-types'
import { connect } from 'react-redux'
import Spinner from '../common/Spinner'
import UserRowFeed from './UserRowFeed';
import {getAllProfiles} from '../../actions/profileActions'

class AllUsers extends Component {

  componentDidMount () {
    this.props.getAllProfiles(this.props.match.params.id);
    console.log("Called DidMount in All Users");
  };


  render () {
    const { profiles, loading} = this.props.profile;
    console.log({StateOfAllUsers: loading,Prof: profiles});
    let allUserContent;
    if (profiles === null || loading ) {
      allUserContent = <Spinner/>
    } else {
      let chunkCreate= (arr, len) => {
        let chunks = [],
          i = 0,
          n = arr.length;
        while (i < n) {
          chunks.push(arr.slice(i, i += len));
        }
        return chunks;
      };
      let chunkArray=chunkCreate(profiles,2);
      allUserContent = (
    //    <h1>Does not Load</h1>
        <UserRowFeed users={chunkArray}/>
      )
    }

    return (
      <div className='/allProfiles' style={{width:'100%'}}>
      <div id="content" className="snippet-hidden" style={{position: "relative"}}>
        <h1 style={{position: "relative"}}>All Users:</h1>
        <div className="container" style={{position: "relative", width: "90%",minWidth: "81%", height: "86%",border:'2px'}}>
          {allUserContent}
      </div>
      </div>
      </div>
      )
  }
}

AllUsers.propTypes = {
  getAllProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  profile: state.profile
})

export default connect(mapStateToProps, { getAllProfiles })(AllUsers)

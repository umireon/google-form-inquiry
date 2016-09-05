import React from 'react'
import { RouterContext } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as Actions from '../actions'

class LoaderContainer extends React.Component {
  render() {
    return (
      <div>
        { this.props.children }
        { this.props.isLoading ?
          <div className='loader'>
            <div>
              <i className='fa fa-refresh fa-spin fa-3x fa-fw'></i>
              <span className='sr-only'>Loading...</span>
            </div>
          </div>
          : null
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    isLoading: state.loading.get('isLoading'),
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LoaderContainer)

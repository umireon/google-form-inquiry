import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { FormControl } from 'react-bootstrap'

import * as Actions from '../actions'
import NotifyConfig from '../components/NotifyConfig'
import ReplyConfig from '../components/ReplyConfig'
import MailConfig from '../components/MailConfig'

class TemplateContainer extends React.Component {
  componentWillMount() {
    this.props.changeLoading({ isContentReady: false })
    this.props.loadConfig()
  }

  render() {
    const { updateSettings } = this.props
    const settings = this.props.settings.toObject()
    return this.props.isContentReady ? (
      <form action='#'>
        <FormControl
          componentClass='textarea'
          value={this.props.settings.get('notifyTemplate')}
          onChange={e => this.props.updateSettings({ notifyTemplate: e.target.value })}
          onBlur={e => this.props.saveConfig(this.props.settings)}
          children={this.props.settings.get('notifyTemplate')}
        />
        <p>
          {this.props.settings.get('notifyTemplate')}
        </p>
      </form>
    ) : null
  }
}

function mapStateToProps(state) {
  return {
    settings: state.settings,
    isContentReady: state.loading.get('isContentReady'),
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TemplateContainer)

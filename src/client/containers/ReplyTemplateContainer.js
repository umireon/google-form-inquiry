import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { FormControl } from 'react-bootstrap'

import * as Actions from '../actions'
import NotifyConfig from '../components/NotifyConfig'
import ReplyConfig from '../components/ReplyConfig'
import MailConfig from '../components/MailConfig'

class ReplyTemplateContainer extends React.Component {
  componentWillMount() {
    this.props.changeLoading({ isContentReady: false })
    this.props.loadConfig()
  }

  onSubmit(e) {
    e.preventDefault()
    this.props.saveConfig(this.props.settings)
    this.props.history.goBack()
  }

  render() {
    const { updateSettings } = this.props
    const settings = this.props.settings.toObject()
    return this.props.isContentReady ? (
      <form action='#'>
        <FormControl
          componentClass='textarea'
          onChange={e => this.props.updateSettings({ replyTemplate: e.target.value })}
          onBlur={e => this.props.saveConfig(this.props.settings)}
        >
          {this.props.settings.get('replyTemplate')}
        </FormControl>
        <pre>
          {this.props.settings.get('replyTemplate')}
        </pre>
        <FormControl
          type='submit'
          value='戻る'
          onClick={this.onSubmit.bind(this)}
        />
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

export default connect(mapStateToProps, mapDispatchToProps)(ReplyTemplateContainer)

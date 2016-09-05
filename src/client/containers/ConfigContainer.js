import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { FormControl, Form } from 'react-bootstrap'

import * as Actions from '../actions'
import NotifyConfig from '../components/NotifyConfig'
import ReplyConfig from '../components/ReplyConfig'
import MailConfig from '../components/MailConfig'

class ConfigContainer extends React.Component {
  componentWillMount() {
    this.props.loadConfig()
  }

  onSave(e) {
    if (e.target.form.checkValidity()) {
      e.preventDefault()
      this.props.saveConfig(this.props.settings)
    }
  }

  onNotifyTest() {
    this.props.sendNotify({})
  }

  render() {
    const { updateSettings } = this.props
    const settings = this.props.settings.toObject()
    return this.props.isContentReady ? (
      <Form action='#'>
        <NotifyConfig
          isEnabled={settings.notifyEnabled}
          templateFile={settings.notifyTemplateFile}
          toEmail={settings.notifyToEmail}
          toName={settings.notifyToName}
          onChangeEnabled={e => updateSettings({ notifyEnabled: e })}
          onChangeTemplateFile={e => updateSettings({ notifyTemplateFile: e.target.value })}
          onChangeToEmail={e => updateSettings({ notifyToEmail: e.target.value })}
          onChangeToName={e => updateSettings({ notifyToName: e.target.value })}
          onClickSubmitTest={this.onNotifyTest.bind(this)}
        />
        <ReplyConfig
          items={settings.items}
          isEnabled={settings.replyEnabled}
          templateFile={settings.replyTemplateFile}
          toEmailFieldId={settings.replyToEmailFieldId}
          toNameFieldId={settings.replyToNameFieldId}
          onChangeEnabled={e => updateSettings({ replyEnabled: e })}
          onChangeTemplateFile={e => updateSettings({ replyTemplateFile: e.target.value })}
          onChangeToEmailFieldId={e => updateSettings({ replyToEmailFieldId: e.target.value })}
          onChangeToNameFieldId={e => updateSettings({ replyToNameFieldId: e.target.value })}
        />
        <MailConfig
          isEnabled={settings.notifyEnabled || settings.replyEnabled}
          backend={settings.mailBackend}
          fromEmail={settings.mailFromEmail}
          fromName={settings.mailFromName}
          replyToEmail={settings.mailReplyToEmail}
          replyToName={settings.mailReplyToName}
          sgApiKey={settings.sgApiKey}
          onChangeBackend={e => updateSettings({ mailBackend: e.target.value })}
          onChangeFromEmail={e => updateSettings({ mailFromEmail: e.target.value })}
          onChangeFromName={e => updateSettings({ mailFromName: e.target.value })}
          onChangeReplyToEmail={e => updateSettings({ mailReplyToEmail: e.target.value })}
          onChangeReplyToName={e => updateSettings({ mailReplyToName: e.target.value })}
          onChangeSgApiKey={e => updateSettings({ sgApiKey: e.target.value })}
        />
        <FormControl type='submit' onClick={this.onSave.bind(this)} value='保存' />
      </Form>
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

export default connect(mapStateToProps, mapDispatchToProps)(ConfigContainer)

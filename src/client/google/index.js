import { fromJS, Map } from 'immutable'

let server = {
  settings: {
    notifyEnabled: true,
    notifyTemplateFile: '',
    notifyToEmail: '',
    notifyToName: '',
    replyEnabled: false,
    replyTemplateFile: '',
    replyToEmailFieldId: '',
    replyToNameFieldId: '',
    mailFromEmail: '',
    mailFromName: '',
    mailReplyToEmail: '',
    mailReplyToName: '',
    mailSgApiKey: '',
    items: [
      { id: 1, label: 'Email' }
    ],
  },
}

function saveServer() {
  console.log(server)
  localStorage.setItem('server', JSON.stringify(server))
}

function loadServer() {
  const savedServer = localStorage.getItem('server')
  console.log(savedServer)
  if (savedServer) {
    server = JSON.parse(savedServer)
  }
  console.log(server)
}

class GoogleScriptRun {
  constructor() {
    this.onSuccess = () => {}
    this.onFailure = () => {}
  }

  withSuccessHandler(handler) {
    this.onSuccess = handler
    return this
  }

  withFailureHandler() {
    this.onFailure = handler
    return this
  }

  loadConfig() {
    loadServer()
    this.onSuccess(fromJS(server.settings))
    return this
  }

  saveConfig(settings) {
    server.settings = settings
    saveServer()
    this.onSuccess()
    return this
  }
}

export const script = Object.defineProperties({}, {
  run: {
    get() {
      return new GoogleScriptRun
    }
  }
})

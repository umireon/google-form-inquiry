const PROPERTY_KEY = '3'

function loadProperties() {
  return {
    document: JSON.parse(PropertiesService.getDocumentProperties().getProperty(PROPERTY_KEY)),
    user: JSON.parse(PropertiesService.getUserProperties().getProperty(PROPERTY_KEY)),
    script: JSON.parse(PropertiesService.getScriptProperties().getProperty(PROPERTY_KEY)),
  }
}

function saveProperties(properties) {
  PropertiesService.getDocumentProperties().setProperty(PROPERTY_KEY, JSON.stringify(properties.document))
  PropertiesService.getUserProperties().setProperty(PROPERTY_KEY, JSON.stringify(properties.user))
  PropertiesService.getScriptProperties().setProperty(PROPERTY_KEY, JSON.stringify(properties.script))
}



export function loadConfig() {
  const config = loadProperties().document || {}

  const form = FormApp.getActiveForm()
  config.items = form.getItems().map(item => ({
    helpText: item.getHelpText(),
    id: item.getId(),
    index: item.getIndex(),
    title: item.getTitle(),
    type: item.getType()
  }))

  return config
}

export function saveConfig(config) {
  if (config['items']) {
    delete config['items']
  }
  saveProperties({
    document: config,
    user: {},
    script: {},
  })
}

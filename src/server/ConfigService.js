const PROPERTY_KEY = '3'

function loadProperties() {
  return {
    document: JSON.parse(PropertiesService.getDocumentProperty(PROPERTY_KEY)),
    user: JSON.parse(PropertiesService.getUserProperties(PROPERTY_KEY)),
    script: JSON.parse(PropertiesService.getScriptProperties(PROPERTY_KEY)),
  }
}

function saveProperties(properties) {
  PropertiesService.setDocumentProperty(PROPERTY_KEY, JSON.stringify(properties.document))
  PropertiesService.setUserProperty(PROPERTY_KEY, JSON.stringify(properties.user))
  PropertiesService.setScriptProperty(PROPERTY_KEY, JSON.stringify(properties.script))
}



export function loadConfig() {
  const form = FormApp.getActiveForm()
  const items = form.getItems().map(item => ({
    helpText: item.getHelpText(),
    id: item.getId(),
    index: item.getIndex(),
    title: item.getTitle(),
    type: item.getType()
  }))

  return {
    items: items
  }
}

export function saveConfig(config) {

}

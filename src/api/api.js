export default (baseUrl) => {
  const fetchCreator = method => (url,options) => fetch(`http://${baseUrl}/${url}`, {
    method,
    ...options
  }).then(data => data.json())

  return {
    get: fetchCreator('GET')

  }
}
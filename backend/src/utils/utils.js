const formatDate = (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric'}
  const formatedDate = new Date(date).toLocaleString('pt-br', options)

  return formatedDate
}

module.exports = {
  formatDate
}


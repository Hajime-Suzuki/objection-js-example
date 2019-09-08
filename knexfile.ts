module.exports = {
  development: {
    client: 'pg',
    connection:
      process.env.CONNECTION_STRING ||
      'postgres://postgres:secret@localhost:5432/postgres'
  }
}

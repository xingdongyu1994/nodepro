var userSql = {
  insert: 'INSERT INTO testuser(username,password) VALUES(?,?)',
  getUserName: 'SELECT * FROM testuser WHERE  username = ?',
  getUserAll: 'SELECT * FROM testuser'
}
module.exports = userSql
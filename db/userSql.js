var userSql = {
  // insert: 'INSERT INTO testuser(username,password) VALUES(?,?)',
  // getUserName: 'SELECT * FROM testuser WHERE  username = ?',
  // getUserAll: 'SELECT * FROM testuser'
  getUserName: 'SELECT * FROM user WHERE username = ?'
  // getUserInfo: 
}
module.exports = userSql
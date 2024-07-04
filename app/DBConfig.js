const con = require('mssql');

const config = {
  user: 'wan',
  password: '2605',
  server: 'localhost',
  database: 'coupleApp',
  options: {
    encrypt: true,
    trustServerCertificate: true
  }
};

con.connect(config, (err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }

  console.log('DB연결 완료!');


});


module.exports = con;
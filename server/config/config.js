//This file holds any configuration variables we may need
//'config.js' is typically ignored by git to protect sensitive information, such as your database's username and password

module.exports = {
  db: {
    uri: 'mongodb://tyler:password1@ds117423.mlab.com:17423/bootcamp_db', //place the URI of your mongo database here.
  },
  port: 8080
};

var logger = require("./logger.js");

module.exports = {
	database: "ntask",
	username:"",
	password:"",
	params:{
		dialect:"sqlite",
		storage:"ntask.sqlite",
		loggin: (sql) => {
			logger.info(`[${new Date()}] ${sql}`);
		},
		define:{
			underscored: true
		}
	},
	jwtSecret: "Nta$k-AP1",
	jwtSession: {session: false}

};
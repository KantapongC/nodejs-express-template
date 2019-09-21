const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { secret } = require('../../config/keys');

router.post('/', async (req, res) => {
	const { uid, email } = req.body;

	try {
		const jwtSign = await signJwtWithData(email, uid);
		res.json({ status: 'Success', token: jwtSign });
	} catch (error) {
		res.status(400).json({ status: 'Failed', errorMessage: error.toString() });
	}
});

const signJwtWithData = async (userData, username) => {
	const data = {
		username,
		userData
	};

	return jwt.sign(data, secret, {
		expiresIn: '1 days' // expires in 24 hours
	});
};

module.exports = router;

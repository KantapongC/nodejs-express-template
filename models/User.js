const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate');

const options = {
	strict: false,
	toJSON: { virtuals: true }
};

const Fullname = {
	title: { type: String },
	firstName: { type: String },
	middleName: { type: String },
	lastName: { type: String }
};

const Address = {
	houseNumber: { type: String },
	moopart: { type: String },
	road: { type: String },
	tmbpart: { type: String },
	amppart: { type: String },
	chwpart: { type: String },
	addressPart: { type: String },
	country: { type: String }
};

const Contact = {
	email: { type: String },
	homeNumber: { type: String },
	mobileNumber: { type: String }
};

const UserSchema = new Schema(
	{
		id: { type: String, required: true, index: { unique: true } },
		image: { type: String },
		fullname: Fullname,
		address: Address,
		contactInfo: Contact,
		DOB: { type: String },
		sex: { type: String },
		nationality: { type: String }
	},
	options
);

UserSchema.virtual('comments', {
	ref: 'Comment',
	localField: 'id',
	foreignField: 'id'
});

UserSchema.plugin(mongoosePaginate);

module.exports = User = mongoose.model('User', UserSchema);

const mongoose = require("mongoose");
const { Schema } = mongoose;

const NotesSchema = new Schems({
	title: {
		type: "string",
		required: true,
	},
	description: {
		type: "string",
		required: true,
	},
	tag: {
		type: "string",
		default: "general",
	},
	date: {
		type: "string",
		required: true,
	},
});

module.exports = mongoose.model("notes", NotesSchema);
import mongoose, { Schema } from "mongoose";

const newUser = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		category: {
			type: String,
			required: true,
			default: "low",
		},
		isImportant: {
			type: Boolean,
			required: true,
			default: false,
		},
	},
	{
		timestamps: true,
	}
);

const List = mongoose.models.List || mongoose.model("List", newUser);

export default List;

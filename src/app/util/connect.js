import mongoose from "mongoose";

const connectDb = async () => {
	try {
		await mongoose.connect(process.env.DATABASE_URL);
		console.log("db connected");
	} catch (error) {
		console.log("failed to connect to database", error);
	}
};
export default connectDb;

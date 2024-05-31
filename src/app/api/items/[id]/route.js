import connectDb from "@/app/util/connect";
import List from "@/app/models/model";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
	try {
		const { id } = params;
		const { title, description, isImportant, category } = await req.json();
		await connectDb();
		await List.findByIdAndUpdate(id, {
			title,
			description,
			important: isImportant,
			category,
		});
		return NextResponse.json({
			message: "data updated",
		});
	} catch (error) {
		return NextResponse.json({ message: error.message });
	}
}

export async function GET(req, { params }) {
	try {
		const { id } = params;
		await connectDb();
		const data = await List.findOne({ _id: id });
		return NextResponse.json({
			data,
		});
	} catch (error) {
		return NextResponse.json({ message: error.message });
	}
}

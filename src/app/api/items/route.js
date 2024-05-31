import List from "@/app/models/model";
import connectDb from "@/app/util/connect";
import { NextResponse } from "next/server";

export async function POST(req) {
	try {
		const { title, description, isImportant, category } = await req.json();
		if (!title || !description || !category) {
			return NextResponse.json(
				{
					message: "fill in all the  required forms",
				},
				{
					status: 400,
				}
			);
		}
		await connectDb();
		await List.create({
			title,
			description,
			isImportant,
			category,
		});
		return NextResponse.json(
			{
				message: "data created successfully",
			},
			{
				status: 201,
			}
		);
	} catch (error) {
		return NextResponse.json(
			{
				message: "error creating",
				error: error.message,
			},
			{
				status: 500,
			}
		);
	}
}

export async function GET() {
	try {
		await connectDb();
		const data = await List.find();
		if (data.length == 0) {
			return NextResponse.json({
				message: "List not found",
			});
		}

		return NextResponse.json({
			data,
		});
	} catch (error) {
		return NextResponse.json({
			message: error.message,
		});
	}
}

export async function DELETE(req) {
	try {
		const id = req.nextUrl.searchParams.get("id");
		await connectDb();
		await List.findByIdAndDelete(id);
		return NextResponse.json({
			message: "Deleted successfully",
		});
	} catch (error) {
		return NextResponse.json(
			{
				message: "failed to delete",
				error: error.message,
			},
			{
				status: 500,
			}
		);
	}
}

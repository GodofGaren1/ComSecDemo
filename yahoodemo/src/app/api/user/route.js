"use server";

import User from '../../models/user';
import { connectToDatabase } from '../../db/mongoose';

export async function POST(req) {
    await connectToDatabase();
    try {
        const body = await req.json(); // Convert the ReadableStream to JSON
        console.log("Request Body:", body);
        const record = await User.findOne({username: { "$ne": null }});

        // const { username } = body;
        // const record = await User.findOne({ username });
        if (record) {
            console.log('Record Found: ', record);
            return new Response(JSON.stringify({ record }), {
                status: 200,
                headers: { 'Content-Type': 'application/json' },
            });
        } else {
            console.log(`No record found with username: ${username}`);
            return null;
        }
    } catch (error) {
        console.log('Error finding record:', error);
    }
}
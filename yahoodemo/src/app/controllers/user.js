"use server";

import User from '../models/user';
import { connectToDatabase } from '../db/mongoose';

export async function getRecord(username) {
    await connectToDatabase();
    try {
        const record = await User.findOne({ username: username });
        // const record = await User.find();
        if (record) {
            console.log('Record Found: ', record);
            return JSON.parse(JSON.stringify(record));
        } else {
            console.log(`No record found with username: ${username}`);
            return null;
        }
    } catch (error) {
        console.log('Error finding record:', error);
    }
}
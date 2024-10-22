import mongoose, { Connection } from "mongoose";

const MONGO_URI = process.env.MONGO_URI as string;

if (!MONGO_URI) {
	throw new Error(
		"Please define the MONGO_URI environment variable inside .env.local"
	);
}

interface MongooseCache {
	conn: Connection | null;
	promise: Promise<Connection> | null;
}

let cached: MongooseCache = (global as any).mongoose;

if (!cached) {
	cached = (global as any).mongoose = { conn: null, promise: null };
}

async function dbConnect(): Promise<Connection> {
	if (cached.conn) {
		return cached.conn;
	}

	if (!cached.promise) {
		const opts = {
		bufferCommands: false,
		};

		cached.promise = mongoose
		.connect(MONGO_URI, opts)
		.then((mongoose) => mongoose);
	}

	cached.conn = await cached.promise;
	return cached.conn;
}

export default dbConnect;

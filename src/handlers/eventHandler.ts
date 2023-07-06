/** @format */

import path from 'path';
import { Client } from 'discord.js';
import getFiles from '../utils/getFiles';
export default function (client: Client) {
	const folders = getFiles(path.join(__dirname, '..', 'events'), true);
	for (const folder of folders) {
		const files = getFiles(folder);
		const event = folder.replace(/\\/g, '/').split('/').pop();
		console.log(event);
		client.on(event as string, async (args) => {
			for (const file of files) {
				const eventFunction = require(file);
				await eventFunction(client, args);
			}
		});
	}
}

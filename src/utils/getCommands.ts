/** @format */

import path from 'path';
import getFiles from './getFiles';

export default function (): any[] {
	let commands = [];
	const categories = getFiles(path.join(__dirname, '..', 'commands'), true);
	for (const cat of categories) {
		const commandFiles = getFiles(cat);
		for (const file of commandFiles) {
			const command = require(file);
			commands.push(command);
		}
	}
	return commands;
}

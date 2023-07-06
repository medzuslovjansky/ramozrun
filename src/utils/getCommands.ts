/** @format */

import path from 'path';
import getFiles from './getFiles';

export default function (): any[] {
	let commands: any = [];
	const categories = getFiles(path.join(__dirname, '..', 'commands'), true);
	for (const cat of categories) {
		const commandFiles = getFiles(cat);
		console.log(commandFiles);
	}
	return commands;
}

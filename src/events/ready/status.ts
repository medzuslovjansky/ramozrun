/** @format */

import { Client } from 'discord.js';

export = function (client: Client) {
	console.log(`${new Date().toLocaleDateString('cs')} ${new Date().toLocaleTimeString('cs')} > ${client.user?.username} is ready!`);
};

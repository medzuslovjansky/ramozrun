/** @format */

import { Client } from 'discord.js';

export default async function (client: Client, guildId?: string) {
	let applicationCommands;
	if (guildId) {
		const guild = await client.guilds.fetch(guildId);
		applicationCommands = guild.commands;
	} else {
		applicationCommands = await client.application?.commands;
	}
	await applicationCommands?.fetch();
	return applicationCommands;
}

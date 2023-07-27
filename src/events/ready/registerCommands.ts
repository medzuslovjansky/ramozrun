/** @format */

import { ApplicationCommand, Client } from 'discord.js';
import getCommands from '../../utils/getCommands';
import getApplicationCommands from '../../utils/getApplicationCommands';
import differentCommands from '../../utils/differentCommands';
export = async function (client: Client) {
	try {
		const commands: any = getCommands();
		const applicationCommands = await getApplicationCommands(client);
		for (const command of commands) {
			const { name, description, options } = commands;
			const existingCommand = await applicationCommands?.cache.find((cmd: any) => cmd.name === name);
			if (existingCommand) {
				if (command.deleted) {
					await applicationCommands?.delete(existingCommand.id);
					console.log(`Deleted command ${name}`);
					continue;
				}
			}
			if (differentCommands(existingCommand!, command)) {
				await applicationCommands!.edit(existingCommand!.id, {
					description,
					options,
				});
				console.log(`Edited command ${name}`);
			} else {
				if (command.deleted) {
					console.log(`Command ${name} is to be deleted. Not being registered.`);
					continue;
				}
				await applicationCommands!.create({ name, description, options });
				console.log(`Registered command ${name}`);
			}
		}
	} catch (error) {
		console.log(`Error: ${error}`);
	}
};

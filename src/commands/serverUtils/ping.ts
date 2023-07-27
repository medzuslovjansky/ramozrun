/** @format */

import { Client, ChatInputCommandInteraction } from 'discord.js';

export = {
	name: 'ping',
	description: 'Replies with Pong!',
	callback: (client: Client, interaction: ChatInputCommandInteraction) => {
		interaction.reply(`## ${new Date().toLocaleDateString} ${new Date().toLocaleTimeString}\nPong!`);
	},
};

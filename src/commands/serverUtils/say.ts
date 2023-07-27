/** @format */

import { Client, ChatInputCommandInteraction, ApplicationCommandType, ApplicationCommandOptionType } from 'discord.js';

export = {
	name: 'say',
	description: 'Says what you told the bot to say',
	options: [
		{
			name: 'message',
			description: 'What should I say?',
			required: true,
			type: ApplicationCommandOptionType.String,
		},
	],
	callback: (client: Client, interaction: ChatInputCommandInteraction) => {
		interaction.reply(`what`);
	},
};

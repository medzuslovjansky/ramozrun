/** @format */

import { IntentsBitField } from 'discord.js';

export let config = {
	intents: [IntentsBitField.Flags.Guilds, IntentsBitField.Flags.GuildMembers, IntentsBitField.Flags.GuildMessages, IntentsBitField.Flags.MessageContent],
	prefix: ',',
};

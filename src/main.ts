/** @format */

import { Client, IntentsBitField } from 'discord.js';
import dotenv from 'dotenv';
import { config } from './config';
import eventHandler from './handlers/eventHandler';

dotenv.config();

const client = new Client({ intents: config.intents });

client.on('ready', () => {
	console.log(`${new Date().toLocaleDateString('cs')} ${new Date().toLocaleTimeString('cs')} > Ready to work!`);
	eventHandler(client);
});

client.login(process.env.TOKEN).then((_) => {
	console.log(`${new Date().toLocaleDateString('cs')} ${new Date().toLocaleTimeString('cs')} > Logged into ${client.user?.username}`);
});

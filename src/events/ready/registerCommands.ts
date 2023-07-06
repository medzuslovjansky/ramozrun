/** @format */

import { Client } from 'discord.js';
import getCommands from '../../utils/getCommands';

export = function (client: Client) {
	const commands = getCommands();
	console.log(commands);
};

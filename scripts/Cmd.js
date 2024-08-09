module.exports = {
	config: {
			name: "Cmd.js",
			version: "1.0",
			author: "Angelic Lao",
			countDown: 5,
			role: 0,
			shortDescription: "sarcasm",
			longDescription: "sarcasm",
			category: "reply",
	},
onStart: async function(){}, 
onChat: async function({
	event,
	message,
	getLang
}) {
	if (event.body && event.body.toLowerCase() == "lf mm") return message.reply("gc");
}
};

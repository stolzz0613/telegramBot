const { Composer } = require('micro-bot')

const bot = new Composer()

bot.start((ctx) => {
    ctx.reply('Hola, mi cielo, que quieres ver hoy?')
})
module.exports = bot
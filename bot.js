const mongoose = require('mongoose');
const Phrase = require('./components/models/phrase');
const Song = require('./components/models/song');
const Image = require('./components/models/image');
const { Composer } = require('micro-bot');
const bot = new Composer();
//const { Telegraf } = require('telegraf')
//const bot = new Telegraf('2016329295:AAGQ4Y7pbMy_cakIA6jZDA1zhooSKwwjBFw')


const url = "mongodb+srv://stolzz0613:Andres0613@cluster0.hr00s.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(url)
        .then(() => console.log('conectado a la DB'))
        .catch(err => console.log('No se pudo conectar a MongoDB'));

bot.start((ctx) => {
    ctx.reply(
        'Hola, mi cielo, que quieres hacer hoy?: \n' +
        '** /frase te permite leer una frase escrita con mucho amor \n' +
        '** /cancion te enviara una cancion que me recuerda a ti \n' +
        '** /foto Te recordara un momento juntos con una foto pdt: necesitamos mas fotos juntos'
    )
})

bot.command('frase', async (ctx) => {
    Phrase.count().exec(function (err, count) {
        var random = Math.floor(Math.random() * count)
        Phrase.findOne().skip(random).exec((err, result)  =>  ctx.reply(result.text))
    })
})

bot.command('cancion', async (ctx) => {
    Song.count().exec(function (err, count) {
        var random = Math.floor(Math.random() * count)
        Song.findOne().skip(random).exec((err, result)  =>  ctx.reply(result.url))
    })
})

bot.command('foto', async (ctx) => {
    Image.count().exec(function (err, count) {
        var random = Math.floor(Math.random() * count)
        Image.findOne().skip(random).exec((err, result)  =>  ctx.reply(result.url))
    })
})
//bot.launch()
module.exports = bot
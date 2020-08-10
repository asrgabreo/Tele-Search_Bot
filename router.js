const express = require('express');
const app = express();
const router = express.Router();
const {Telegraf} = require('telegraf');
const axios = require('axios');
const cheerio = require('cheerio');
const fetch = require('node-fetch');
const { toJson } = require('unsplash-js');
const puppeteer = require('puppeteer');
global.fetch = fetch;
const Unsplash = require('unsplash-js').default;

const unsplash = new Unsplash({
    accessKey : "VNu1WiZ5gHqsZ6_gyq6Lsl8K_wZORv4ybstMKTCXh0Y",
});




router.get('/',function(req,res){

    const bot = new Telegraf('1369977925:AAEs3LrDYGD7r_mfjQ9YTybA_QeC9KeXDW4');
    bot.start((ctx) => {
        ctx.reply("bot has been started");
        });
    bot.help((ctx) => {
            ctx.reply("This can perform the following commands\n - /start - For starting the bot\n - /dog - To get a random dog image with breed\n - /search \"an image related to your search\"\n This bot is been created by https://github.com/asrgabreo for support:give a star on my github");
      });

    bot.command('dog',(ctx) =>{
        //DOG API
        url = "https://dog.ceo/api/breeds/image/random";
        axios.get(url)
        .then(function(res){
            ctx.reply(res.data.message);
        });
    })
     bot.command('search',(ctx)=>{
        //search Image using UPSPLASH API
        key = ctx.update.message.text.replace('/search ','');
        unsplash.search.photos(key,1,10,{orientation:"portrait"})
        .then(toJson)
        .then(function(json){
            res = json.results[0].urls.small;
            if(res!=undefined){
            ctx.reply(res);
            }else{
            ctx.reply('No photos found');
            }
            //console.log(json.results[0].urls.small);
        })
    

        })

 
          
      bot.launch();




    res.send("<h1>Telegram Bot</h1>");
});


module.exports = router;
const request = require('request')
const path = require('path')
const config = require('./config')
const analyze = require('./analyze')
const fs = require('fs')

function start(){
  request(config.url,function(err,res,body){
    if(!err && res){
      console.log('start')
      analyze.findImg(body,downLoad)
    }
  })
}

function downLoad(imgUrl,i){
  let ext = imgUrl.split('.').pop()
  request(imgUrl).pipe(fs.createWriteStream(path.join(config.imgDir, i + '.'+ ext),{'encoding':'utf8'}))
  console.log(i)
}

start()

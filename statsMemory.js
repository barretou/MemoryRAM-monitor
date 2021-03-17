setInterval(() => {

    const os = require('os')
    const {freemem, totalmem} = os
    //lembrado que o parseInt deixa o numero inteiro
    const mem = parseInt(freemem() / 1024 / 1024)
    const total = parseInt(totalmem() / 1024 / 1024)
    const percentage = parseInt((mem/total) * 100) 
    
    const generalStatsMem = {
        free: `${mem} MB`,
        total: `${total} MB`,
        usage: `${percentage} %`
    }
    console.clear()
    console.log(' +++ ESTADO DA RAM +++')
    console.table(generalStatsMem)


}, 1000)

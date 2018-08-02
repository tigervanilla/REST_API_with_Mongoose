const express=require('express')
const logger=require('morgan')
const errorHandler=require('errorhandler')
const bodyParser=require('body-parser')
const accountCtrl=require('./accountCtrl')

var app=express()
app.use(logger('dev'))
app.use(errorHandler())
app.use(bodyParser.json())

app.get('/accounts',accountCtrl.getAccounts)
app.post('/accounts',accountCtrl.addAccount)
app.put('/accounts/:id',accountCtrl.updateAccount)
app.delete('/accounts/:id',accountCtrl.removeAccount)

app.listen(3000)
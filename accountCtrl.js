const mongoose=require('mongoose')
const Account=require('./account')
const url='mongodb://localhost:27017/demo'
mongoose.connect(url)

module.exports={
    getAccounts:(request,response)=>{
        Account.find({}).sort('-_id').exec((error,docs)=>{
            if(error) throw error
            response.status(200).send(docs)
        })
    },
    
    addAccount:(request,response)=>{
        let newAccount=new Account({
            name:request.body.name,
            balance:request.body.balance
        })
        newAccount.save((error)=>{
            if(error) throw error
            response.status(201).send(newAccount)
        })
    },
    
    updateAccount:(request,response)=>{
        Account.findByIdAndUpdate(
            request.params.id,
            {name:request.body.name,balance:request.body.balance},
            (error,doc)=>{
                if(error) throw error
                response.status(200).send('Account Update Successful!')
            }
        )
    },

    removeAccount:(request,response)=>{
        Account.findByIdAndRemove(request.params.id,(error,doc)=>{
            if(error) throw error
            response.status(204).send('Account Delete Successful!')
        })
    }
}
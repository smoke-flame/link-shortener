import mongoose from 'mongoose'
import express from 'express'
import cors from 'cors'
import config from 'config'
import router from "./router.js"
const mongoUrl = config.get('MONGO_DB')
const port = config.get('PORT') || 3000

const app = express()
app.use(cors())

app.use('', router)

async  function main() {
   try {
       await mongoose.connect(mongoUrl, {
           autoIndex: true,
           autoCreate: true,
       });
       app.listen(port, () => console.log(`server has been started at port ${port}`))

   } catch (e) {
       console.log(e)
   }
}

main()





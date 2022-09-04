const mongoose = require('mongoose')
const mango_uri = process.env.MANGO_URI

const connectDB = async () => {
    try {
      const conn = await mongoose.connect(mango_uri)

      console.log(`mangoDB Connected: ${conn.connection.host}`.cyan.underline)
    } catch (error) {
       console.log(error)
       process.exit(1) 
    }
}
module.exports = connectDB
import 'dotenv/config' 

const Config = {
    HOST: process.env.HOST || 'localhost',
    PORT: process.env.PORT || '3000'
}

export default Config
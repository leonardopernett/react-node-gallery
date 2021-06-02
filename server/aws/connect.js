import S3 from 'aws-sdk/clients/s3'

export const s3 = new S3({
    secretAccessKey:process.env.ACCESS_KEY,
    accessKeyId:process.env.ACCESS_KEY_ID,
    region:'us-east-1'
})


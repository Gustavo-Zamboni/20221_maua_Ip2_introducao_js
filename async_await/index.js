require('dotenv').config()

const PROTOCOL = process.env.PROTOCOL
const BASE_URL = process.env.BASE_URL
const APPID = process.env.APPID
const LANGUAGE = process.env.LANGUAGE
const UNITS = process.env.UNITS
const Q = process.env.Q

// operador de desestruturação
// const {PROTOCOL,BASE_URL,APPID,LANGUAGE,UNITS} = process.env

const url = `${PROTOCOL}://${BASE_URL}?appid=${APPID}&lang=${LANGUAGE}&units=${UNITS}&q=${Q}`

console.log(url)
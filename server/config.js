import {config} from 'domtnv'
config(

);

console.log(process.env)

export default {
    port: process.env.PORT || 3000,
};
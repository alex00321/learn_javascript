const defaultConfig = './config-default.js';
const overrideConfig = './config-override.js';
const testConfig = './config-test.js';

const fs = require('fs');

var config = null;
if (process.env.NODE_ENV==='test'){
    console.log(`Loading ${testConfig}...`);
    config=require(testConfig);
}else {
    console.log(`Loading ${defaultConfig}...`);
    config=require(defaultConfig);
    try{
        if (fs.statSync(overrideConfig).isFile()){
            console.log(`Loading ${overrideConfig}...`);
            config=Object.assign(config,require(overrideConfig));
        }
    }catch (err){
        console.log(`Cannot load ${overrideConfig}.`);
    }
}

module.exports=config;
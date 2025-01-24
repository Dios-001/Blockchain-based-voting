import Web3, { HttpProvider } from "web3";
import solc from 'solc'
import path from 'path'
import fs from 'fs'

const web3 = new Web3(new HttpProvider("HTTP://127.0.0.1:7545"))

const contractName = "Token"
const fileName = `${contractName}.sol`

const constractPath =  path.join(__dirname,fileName)
const sourceCode = fs.readFileSync(constractPath, 'utf-8')

const input = {
    language:"Solidity",
    sources:{
        [fileName]:{
            content:sourceCode
        },
    },
    settings:{
        outputSelection:{
            '*':{
                '*':["*"],
            }
        }
    }
}

const compileCode = JSON.parse(solcjs)
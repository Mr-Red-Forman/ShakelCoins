'use strict'

import axios from "axios"
import {storageService} from './storage.service.js'


const rate_curr = 'RATE_CURRENT'
const rate_history = 'RATE_HISTORY'
const rate_Size = 'RATE_SIZE'

export const shakelService = {
    getRate,
    getMarketPriceHistory,
    getAvgBlockSize,
}
async function getRate() {
    try {
        let res = storageService.load(rate_curr)
        if (res) return res
        res = await axios({
            method: 'get',
            url: 'https://blockchain.info/ticker',
            params: {
            }
        })
        storageService.save(rate_curr, res.data)
        return res.data

    } catch (err) {
        console.log('issue in shakelServices getRate:')
        throw err
    }
}

async function getMarketPriceHistory() {
    try {
        let res = storageService.load(rate_history)
        if (res?.length > 0) return res
        res = await axios({
            method: 'get',
            url: 'https://api.blockchain.info/charts/transactions-per-second?timespan=5weeks&rollingAverage=8hours&format=json&cors=true',
            params: {
            }
        })
        storageService.save(rate_history, res.data)
        return (res)

    } catch (err) {
        console.log('issue in shakelServices getMarketPriceHistory:')
        throw err
    }

}

async function getAvgBlockSize() {
    try {
        let res = storageService.load(rate_Size)
        if (res?.length > 0) return res
        res = await axios({
            method: 'get',
            url: 'https://api.blockchain.info/charts/transactions-per-second?timespan=5weeks&rollingAverage=8hours&format=json&cors=true',
            params: {
            }
        })
        storageService.save(rate_Size, res.data)
        return (res)

    } catch (err) {
        console.log('issue in shakelServices getAvgBlockSize:')
        throw err
    }
}
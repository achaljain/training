import gql from 'graphql-tag'
import Client from 'aws-appsync'
import { Auth } from 'aws-amplify'

import GraphqlAPI from '../graphql'
import AWSConfig from '../configs/aws'


const client = new Client({
    url: AWSConfig.appsync.aws_appsync_graphqlEndpoint,
    region: AWSConfig.appsync.aws_appsync_region,
    auth: {
        type: AWSConfig.appsync.aws_appsync_authenticationType,
        jwtToken: async () => (await Auth.currentSession()).idToken.jwtToken,
        apiKey: AWSConfig.appsync.aws_appsync_apiKey
    },
    disableOffline: true
})

function getData(range) {
    return new Promise(function (resolve, reject) {
        if(range) {
            setTimeout(() => {
                let arr = []
                for (let i = 1; i <= parseInt(range); ++i) {
                    arr.push(i);
                }
                resolve(arr);
            }, 2000);
        } else {
            reject("range not found")
        }
    })
}

function getWordList() {
    return new Promise(function (resolve, reject) {
        client.query({
            query: gql(GraphqlAPI.listWords),
            // variables: {

            // },
            fetchPolicy: 'network-only'
        }).then((data) => {
            console.log("word data --- ", data);
            let arrItems = []
            arrItems = data.data.listMagic1S.items.map((item) => {
                return item.WORD
            })
            resolve(arrItems)
        }).catch((err) => {
            console.log("Error --- ", err);
        })
    })
}

export default {
    getData,
    getWordList
}
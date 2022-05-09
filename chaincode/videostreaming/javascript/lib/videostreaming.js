/**
* @jest-environment jsdom
*/

/*
 * Copyright IBM Corp. All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

/* 25ms */

'use strict';

const { Contract } = require('fabric-contract-api');

class VideoStreaming extends Contract {

    async initLedger(ctx) {
        console.info('============= START : Initialize Ledger ===========');
        var today = new Date();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + "," +today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();


        const videos = [
            {
               
               

                request_time:'2022-04-15T06:27:12.914Z',
                create_time:'2022-04-15T06:27:12.895Z',
                chunkhit_time:'2022-04-15T06:27:12.902Z',
                response_time:'2022-04-15T06:27:12.927Z',
                chunkdata: [{title:'md_10',chunk_size:'2.5',resolution:'4K'}],
                userdata: [{userID:'0x7207bD861761806884EbaA56D5f0022057573436',userbalance:'10 ETH'}],
                invoke:'RESPONSE',
                
            },
             {
               
               

                request_time:'2022-04-15T06:27:12.914Z',
                create_time:'2022-04-15T06:27:12.895Z',
                chunkhit_time:'2022-04-15T06:27:12.902Z',
                response_time:'2022-04-15T06:27:12.927Z',
                chunkdata: [{title:'md_10',chunk_size:'2.5',resolution:'4K'}],
                userdata: [{userID:'0x7207bD861761806884EbaA56D5f0022057573436',userbalance:'10 ETH'}],
                invoke:'RESPONSE',
                
            },
             {
               
               

                request_time:'2022-04-15T06:27:12.914Z',
                create_time:'2022-04-15T06:27:12.895Z',
                chunkhit_time:'2022-04-15T06:27:12.902Z',
                response_time:'2022-04-15T06:27:12.927Z',
                chunkdata: [{title:'md_10',chunk_size:'2.5',resolution:'4K'}],
                userdata: [{userID:'0x7207bD861761806884EbaA56D5f0022057573436',userbalance:'10 ETH'}],
                invoke:'RESPONSE',
                
            },
             {
               
               

                request_time:'2022-04-15T06:27:12.914Z',
                create_time:'2022-04-15T06:27:12.895Z',
                chunkhit_time:'2022-04-15T06:27:12.902Z',
                response_time:'2022-04-15T06:27:12.927Z',
                chunkdata: [{title:'md_10',chunk_size:'2.5',resolution:'4K'}],
                userdata: [{userID:'0x7207bD861761806884EbaA56D5f0022057573436',userbalance:'10 ETH'}],
                invoke:'RESPONSE',
                
            },
            {
               
                request_time:'2022-04-15T06:27:12.914Z',
                create_time:'2022-04-15T06:27:12.895Z',
                chunkhit_time:'2022-04-15T06:27:12.902Z',
                response_time:'2022-04-15T06:27:12.927Z',
                chunkdata: [{title:'md_10',chunk_size:'2.5',resolution:'4K'}],
                userdata: [{userID:'0x7207bD861761806884EbaA56D5f0022057573436',userbalance:'10 ETH'}],
                invoke:'RESPONSE',
                
            },
            {
                
                request_time:'2022-04-15T06:27:12.915Z',
                create_time:'2022-04-15T06:27:12.895Z',
                chunkhit_time:'2022-04-15T06:27:12.905Z',
                response_time:'2022-04-15T06:27:12.927Z',
                chunkdata: [{title:'md_10',chunk_size:'2.5',resolution:'4K'}],
                userdata: [{userID:'0x7207bD861761806884EbaA56D5f0022057573436',userbalance:'10 ETH'}],
                invoke:'RESPONSE',
                
            },
            {
                
                request_time:'2022-04-15T06:27:12.918Z',
                create_time:'2022-04-15T06:27:12.896Z',
                chunkhit_time:'2022-04-15T06:27:12.908Z',
                response_time:'2022-04-15T06:27:12.930Z',
                chunkdata: [{title:'md_10',chunk_size:'2.5',resolution:'4K'}],
                userdata: [{userID:'0x7207bD861761806884EbaA56D5f0022057573436',userbalance:'10 ETH'}],
                invoke:'RESPONSE',
                
            },
            {
             
                
                request_time:'2022-04-15T06:27:12.918Z',
                create_time:'2022-04-15T06:27:12.896Z',
                chunkhit_time:'2022-04-15T06:27:12.909Z',
                response_time:'2022-04-15T06:27:12.930Z',
                chunkdata: [{title:'md_10',chunk_size:'2.5',resolution:'4K'}],
                userdata: [{userID:'0x7207bD861761806884EbaA56D5f0022057573436',userbalance:'10 ETH'}],
                invoke:'RESPONSE',
                
            },
            {
     
              
                request_time:'2022-04-15T06:27:12.919Z',
                create_time:'2022-04-15T06:27:12.896Z',
                chunkhit_time:'2022-04-15T06:27:12.909Z',
                response_time:'2022-04-15T06:27:12.931Z',
                chunkdata: [{title:'md_10',chunk_size:'2.5',resolution:'4K'}],
                userdata: [{userID:'0x7207bD861761806884EbaA56D5f0022057573436',userbalance:'10 ETH'}],
                invoke:'RESPONSE',
                
            },
            {
            
               
                request_time:'2022-04-15T06:27:12.921Z',
                create_time:'2022-04-15T06:27:12.897Z',
                chunkhit_time:'2022-04-15T06:27:12.911Z',
                response_time:'2022-04-15T06:27:12.934Z',
                chunkdata: [{title:'md_10',chunk_size:'2.5',resolution:'4K'}],
                userdata: [{userID:'0x7207bD861761806884EbaA56D5f0022057573436',userbalance:'10 ETH'}],
                invoke:'RESPONSE',
                
            },
            {
                
                request_time:'2022-04-15T06:27:12.922Z',
                create_time:'2022-04-15T06:27:12.897Z',
                chunkhit_time:'2022-04-15T06:27:12.913Z',
                response_time:'2022-04-15T06:27:12.935Z',
                chunkdata: [{title:'md_10',chunk_size:'2.5',resolution:'4K'}],
                userdata: [{userID:'0x7207bD861761806884EbaA56D5f0022057573436',userbalance:'10 ETH'}],
                invoke:'RESPONSE',
                
            },
            {
                
                request_time:'2022-04-15T06:27:12.922Z',
                create_time:'2022-04-15T06:27:12.898Z',
                chunkhit_time:'2022-04-15T06:27:12.915Z',
                response_time:'2022-04-15T06:27:12.937Z',
                chunkdata: [{title:'md_10',chunk_size:'2.5',resolution:'4K'}],
                userdata: [{userID:'0x7207bD861761806884EbaA56D5f0022057573436',userbalance:'10 ETH'}],
                invoke:'RESPONSE',
                
            },
            {
                
               
                request_time:'2022-04-15T06:27:12.924Z',
                create_time:'2022-04-15T06:27:12.899Z',
                chunkhit_time:'2022-04-15T06:27:12.918Z',
                response_time:'2022-04-15T06:27:12.940Z',
                chunkdata: [{title:'md_10',chunk_size:'2.5',resolution:'4K'}],
                userdata: [{userID:'0x7207bD861761806884EbaA56D5f0022057573436',userbalance:'10 ETH'}],
                invoke:'RESPONSE',
                
            },
        ];

        for (let i = 1; i < videos.length; i++) {
            
            await ctx.stub.putState( 'md_10_' + i + '.m4s', Buffer.from(JSON.stringify(videos[i])));
            
            console.info('Added <--> ', videos[i]);
        }
        console.info('============= END : Initialize Ledger ===========');
    }

    async queryVideo(ctx, videoNumber) {
        const videoAsBytes = await ctx.stub.getState(videoNumber); // get the car from chaincode state
        if (!videoAsBytes || videoAsBytes.length === 0) {
            throw new Error(`${videoNumber} does not exist`);
        }
        console.log(videoAsBytes.toString());
        return videoAsBytes.toString();
    }

    async createVideo(ctx, videoNumber, request_time, create_time, chunkhit_time, response_time, Title, Chunk_size, Resolution, UserID, Userbalance, invoke) {
        console.info('============= START : Creating video chunk ===========');
       
        const video = {
            request_time,
            create_time,
            chunkhit_time,
            response_time,
            chunkdata: [{title:Title,chunk_size:Chunk_size,resolution:Resolution}],
            userdata: [{userID:UserID,userbalance:Userbalance}],
            invoke,
        };

       

        await ctx.stub.putState(videoNumber, Buffer.from(JSON.stringify(video)));
        console.info('============= END : Creating video chunk ===========');
    }

    async queryAllVideos(ctx) {
        const startKey = '';
        const endKey = '';
        const allResults = [];
        for await (const {key, value} of ctx.stub.getStateByRange(startKey, endKey)) {
            const strValue = Buffer.from(value).toString('utf8');
            let record;
            try {
                record = JSON.parse(strValue);
            } catch (err) {
                console.log(err);
                record = strValue;
            }
            allResults.push({ Key: key, Record: record });
        }
        console.info(allResults);
        return JSON.stringify(allResults);
    }

    async request(ctx, videoNumber, newtime, newinvoke) {
        console.info('============= START : change status ===========');

        const videoAsBytes = await ctx.stub.getState(videoNumber); // get the video chunk from chaincode state
        if (!videoAsBytes || videoAsBytes.length === 0) {
            throw new Error(`${videoNumber} does not exist`);
        }
        const video = JSON.parse(videoAsBytes.toString());
        video.request_time = newtime;
        video.invoke = newinvoke;

        await ctx.stub.putState(videoNumber, Buffer.from(JSON.stringify(video)));
        console.info('============= END : change status ===========');
    }
    async chunkhit(ctx, videoNumber, newtime, newinvoke) {
        console.info('============= START : Chunk Hit ===========');

        const videoAsBytes = await ctx.stub.getState(videoNumber); // get the video chunk from chaincode state
        if (!videoAsBytes || videoAsBytes.length === 0) {
            throw new Error(`${videoNumber} does not exist`);
        }
        const video = JSON.parse(videoAsBytes.toString());
        video.chunkhit_time = newtime;
        video.invoke = newinvoke;

        await ctx.stub.putState(videoNumber, Buffer.from(JSON.stringify(video)));
        console.info('============= END : Chunk Hit ===========');
    }

    async response(ctx, videoNumber, newtime, newinvoke) {
        console.info('============= START : Response ===========');

        const videoAsBytes = await ctx.stub.getState(videoNumber); // get the video chunk from chaincode state
        if (!videoAsBytes || videoAsBytes.length === 0) {
            throw new Error(`${videoNumber} does not exist`);
        }
        const video = JSON.parse(videoAsBytes.toString());
        video.response_time = newtime;
        video.invoke = newinvoke;
       

        await ctx.stub.putState(videoNumber, Buffer.from(JSON.stringify(video)));
        console.info('============= END : Response ===========');
    }


}

module.exports = VideoStreaming;
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: true });
app.use(bodyParser.json());
app.use(express.static('css'));

const { Gateway, Wallets } = require('fabric-network');
const fs = require('fs');
const path = require('path');
const { json } = require('body-parser');


app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));

//app.engine('pug', require('pug').__express)
//app.set("view engine", "jade");


app.engine('pug', require('pug').__express)
app.set("view engine", "pug");

//app.engine('html', require('ejs').renderFile);

app.get('/api/', function (req, res){
    res.render('index');
});

app.get('/api/create', function (req, res){
    res.render('createvideo');
});


app.get('/', function (req, res){
    res.render('login');
});

app.get('/api/queryallvideos', async function (req,res){
    try{
        const ccpPath = path.resolve(__dirname, '..', '..', 'test-network', 'organizations', 'peerOrganizations', 'org1.example.com', 'connection-org1.json');
        const ccp = JSON.parse(fs.readFileSync(ccpPath, 'utf8'));

        // Create a new file system based wallet for managing identities.
        const walletPath = path.join(process.cwd(), 'wallet');
        const wallet = await Wallets.newFileSystemWallet(walletPath);
        console.log(`Wallet path: ${walletPath}`);

        // Check to see if we've already enrolled the user.
        const identity = await wallet.get('appUser');
        if (!identity) {
            console.log('An identity for the user "appUser" does not exist in the wallet');
            console.log('Run the registerUser.js application before retrying');
        return;
        }
        // Create a new gateway for connecting to our peer node.
        const gateway = new Gateway();
        await gateway.connect(ccp, { wallet, identity: 'appUser', discovery: { enabled: true, asLocalhost: true } });
        // Get the network (channel) our contract is deployed to.
        const network = await gateway.getNetwork('mychannel');
        // Get the contract from the network.
        const contract = network.getContract('videostreaming');
        // Evaluate the specified transaction.
        // queryCar transaction - requires 1 argument, ex: ('queryCar', 'CAR4')
        // queryAllCars transaction - requires no arguments, ex: ('queryAllCars')
        const result = await contract.evaluateTransaction('queryAllVideos');
        console.log(JSON.parse(result));
        console.log(`Transaction has been evaluated, result is: ${result.toString()}`);
        res.render('allvideos',{list:JSON.parse(result)});
 
        // Disconnect from the gateway.
    } catch (error) {
        console.error(`Failed to evaluate transaction: ${error}`);
        res.status(500).json({error:error});
        process.exit(1);
        }
        });


app.get('/api/query/:video_index', async function(req, res){
    try{
        const ccpPath = path.resolve(__dirname, '..', '..', 'test-network', 'organizations', 'peerOrganizations', 'org1.example.com', 'connection-org1.json');
        const ccp = JSON.parse(fs.readFileSync(ccpPath, 'utf8'));

        // Create a new file system based wallet for managing identities.
        const walletPath = path.join(process.cwd(), 'wallet');
        const wallet = await Wallets.newFileSystemWallet(walletPath);
        console.log(`Wallet path: ${walletPath}`);

        // Check to see if we've already enrolled the user.
        const identity = await wallet.get('appUser');
        if (!identity) {
            console.log('An identity for the user "appUser" does not exist in the wallet');
            console.log('Run the registerUser.js application before retrying');
        return;
        }
        // Create a new gateway for connecting to our peer node.
        const gateway = new Gateway();
        await gateway.connect(ccp, { wallet, identity: 'appUser', discovery: { enabled: true, asLocalhost: true } });

        // Get the network (channel) our contract is deployed to.
        const network = await gateway.getNetwork('mychannel');

        // Get the contract from the network.
        const contract = network.getContract('videostreaming');
        // Evaluate the specified transaction.
        // queryCar transaction - requires 1 argument, ex: ('queryCar', 'CAR4')
        // queryAllCars transaction - requires no arguments, ex: ('queryAllCars')
        const result = await contract.evaluateTransaction('queryVideo',req.params.video_index);
        console.log(JSON.parse(result));
        console.log(`Transaction has been evaluated, result is: ${result.toString()}`);
        res.status(200).json({response: result.toString()});

    }
    catch (error) {
    console.error(`Failed to evaluate transaction: ${error}`);
    res.status(500).json({error:error});
    process.exit(1);
    }
    });

app.put('/api/request',async function (req, res){
        try{
            const ccpPath = path.resolve(__dirname, '..', '..', 'test-network', 'organizations', 'peerOrganizations', 'org1.example.com', 'connection-org1.json');
            const ccp = JSON.parse(fs.readFileSync(ccpPath, 'utf8'));
    
            // Create a new file system based wallet for managing identities.
            const walletPath = path.join(process.cwd(), 'wallet');
            const wallet = await Wallets.newFileSystemWallet(walletPath);
            console.log(`Wallet path: ${walletPath}`);
    
            // Check to see if we've already enrolled the user.
            const identity = await wallet.get('appUser');
            if (!identity) {
                console.log('An identity for the user "appUser" does not exist in the wallet');
                console.log('Run the registerUser.js application before retrying');
            return;
            }
            // Create a new gateway for connecting to our peer node.
            const gateway = new Gateway();
            await gateway.connect(ccp, { wallet, identity: 'appUser', discovery: { enabled: true, asLocalhost: true } });
            // Get the network (channel) our contract is deployed to.
            const network = await gateway.getNetwork('mychannel');
            // Get the contract from the network.
            const contract = network.getContract('videostreaming');
            // Evaluate the specified transaction.
            // queryCar transaction - requires 1 argument, ex: ('queryCar', 'CAR4')
            // queryAllCars transaction - requires no arguments, ex: ('queryAllCars')
    
            var today = new Date();
            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + " " +today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
            await contract.submitTransaction('request', req.body.videoNumber, req.body.request_time,req.body.invoke);
            console.log('Transaction has been submitted by User');
            res.send('Transaction has been submitted by User.');
            await gateway.disconnect();
    
        } catch (error) {
        console.error(`Failed to submit transaction: ${error}`);
        process.exit(1);
        }
        } )
    
app.post('/api/create',  urlencodedParser, async function(req, res){
    try{
        const ccpPath = path.resolve(__dirname, '..', '..', 'test-network', 'organizations', 'peerOrganizations', 'org1.example.com', 'connection-org1.json');
        const ccp = JSON.parse(fs.readFileSync(ccpPath, 'utf8'));

        // Create a new file system based wallet for managing identities.
        const walletPath = path.join(process.cwd(), 'wallet');
        const wallet = await Wallets.newFileSystemWallet(walletPath);
        console.log(`Wallet path: ${walletPath}`);

        // Check to see if we've already enrolled the user.
        const identity = await wallet.get('appUser');
        if (!identity) {
            console.log('An identity for the user "appUser" does not exist in the wallet');
            console.log('Run the registerUser.js application before retrying');
        return;
        }
        // Create a new gateway for connecting to our peer node.
        const gateway = new Gateway();
        await gateway.connect(ccp, { wallet, identity: 'appUser', discovery: { enabled: true, asLocalhost: true } });

        // Get the network (channel) our contract is deployed to.
        const network = await gateway.getNetwork('mychannel');

        // Get the contract from the network.
        const contract = network.getContract('videostreaming');
        // Evaluate the specified transaction.
        // queryCar transaction - requires 1 argument, ex: ('queryCar', 'CAR4')
        // queryAllCars transaction - requires no arguments, ex: ('queryAllCars')
        var today = new Date();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + " " +today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        


        await contract.submitTransaction('createVideo', req.body.videoNumber, req.body.request_time, req.body.create_time, req.body.chunkhit_time, req.body.response_time,req.body.title, req.body.chunk_size,req.body.resolution, req.body.userID, req.body.userbalance, req.body.invoke);
        //await contract.submitTransaction('createVideo', 'Chunk2 00', time, time, 'waiting', 'waiting',chunkdata, userdata,'CREATE');

        console.log('Transaction has been submitted by Media Server');
        
        res.send("Transaction has been submitted by Media Server");
        // Disconnect from the gateway.
        await gateway.disconnect();
        

    } catch (error) {
    console.error(`Failed to submit transaction: ${error}`);
    process.exit(1);
    }
    } )

app.put('/api/chunkhit',async function (req, res){
    try{
        const ccpPath = path.resolve(__dirname, '..', '..', 'test-network', 'organizations', 'peerOrganizations', 'org1.example.com', 'connection-org1.json');
        const ccp = JSON.parse(fs.readFileSync(ccpPath, 'utf8'));

        // Create a new file system based wallet for managing identities.
        const walletPath = path.join(process.cwd(), 'wallet');
        const wallet = await Wallets.newFileSystemWallet(walletPath);
        console.log(`Wallet path: ${walletPath}`);

        // Check to see if we've already enrolled the user.
        const identity = await wallet.get('appUser');
        if (!identity) {
            console.log('An identity for the user "appUser" does not exist in the wallet');
            console.log('Run the registerUser.js application before retrying');
        return;
        }
        // Create a new gateway for connecting to our peer node.
        const gateway = new Gateway();
        await gateway.connect(ccp, { wallet, identity: 'appUser', discovery: { enabled: true, asLocalhost: true } });
        // Get the network (channel) our contract is deployed to.
        const network = await gateway.getNetwork('mychannel');
        // Get the contract from the network.
        const contract = network.getContract('videostreaming');
        // Evaluate the specified transaction.
        // queryCar transaction - requires 1 argument, ex: ('queryCar', 'CAR4')
        // queryAllCars transaction - requires no arguments, ex: ('queryAllCars')

        var today = new Date();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + " " +today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        await contract.submitTransaction('chunkhit', req.body.videoNumber, req.body.chunkhit_time,req.body.invoke);
        console.log('Transaction has been submitted by Proxy Server');
        res.send('Transaction has been submitted by Proxy Server.');
        await gateway.disconnect();

    } catch (error) {
    console.error(`Failed to submit transaction: ${error}`);
    process.exit(1);
    }
    } )

    app.put('/api/response',async function (req, res){
        try{
            const ccpPath = path.resolve(__dirname, '..', '..', 'test-network', 'organizations', 'peerOrganizations', 'org1.example.com', 'connection-org1.json');
            const ccp = JSON.parse(fs.readFileSync(ccpPath, 'utf8'));
    
            // Create a new file system based wallet for managing identities.
            const walletPath = path.join(process.cwd(), 'wallet');
            const wallet = await Wallets.newFileSystemWallet(walletPath);
            console.log(`Wallet path: ${walletPath}`);
    
            // Check to see if we've already enrolled the user.
            const identity = await wallet.get('appUser');
            if (!identity) {
                console.log('An identity for the user "appUser" does not exist in the wallet');
                console.log('Run the registerUser.js application before retrying');
            return;
            }
            // Create a new gateway for connecting to our peer node.
            const gateway = new Gateway();
            await gateway.connect(ccp, { wallet, identity: 'appUser', discovery: { enabled: true, asLocalhost: true } });
            // Get the network (channel) our contract is deployed to.
            const network = await gateway.getNetwork('mychannel');
            // Get the contract from the network.
            const contract = network.getContract('videostreaming');
            // Evaluate the specified transaction.
            // queryCar transaction - requires 1 argument, ex: ('queryCar', 'CAR4')
            // queryAllCars transaction - requires no arguments, ex: ('queryAllCars')
    
            var today = new Date();
            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + " " +today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
            var timedata = 
            await contract.submitTransaction('response', req.body.videoNumber, req.body.response_time,req.body.invoke);
            console.log('Transaction has been submitted by User');

            res.send('Transaction has been submitted by User.');
            await gateway.disconnect();
    
        } catch (error) {
        console.error(`Failed to submit transaction: ${error}`);
        process.exit(1);
        }
        } )

app.listen(11800,"203.247.240.236");


var http = require('http');
var os = require('os');
var versions_server = http.createServer( (request, response) => {
    response.end('Versions: ' + JSON.stringify(process.versions) +
                 ' listening on' + JSON.stringify(versions_server.address()) +
                 ' interfaces are ' + JSON.stringify(os.networkInterfaces()));
    });
versions_server.listen(8000);
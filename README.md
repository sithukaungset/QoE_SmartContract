[//]: # (SPDX-License-Identifier: CC-BY-4.0)

# Smart Contract Concept for QoE Accelearator in Video Streaming

For better Quality of Experience in Video Streaming Services, Smart Contract concept is implemented between Streaming Service Provider, Proxy Server and User clients. To provide trustworthy service for Streaming Services, Smart Contracts are developed and implemented in Consortium Blockchain (Hyperledger Fabric). 


## Getting started with the Fabric samples

To use the Fabric samples, you need to download the Fabric Docker images and the Fabric CLI tools. First, make sure that you have installed all of the [Fabric prerequisites](https://hyperledger-fabric.readthedocs.io/en/latest/prereqs.html). You can then follow the instructions to [Install the Fabric Samples, Binaries, and Docker Images](https://hyperledger-fabric.readthedocs.io/en/latest/install.html) in the Fabric documentation. In addition to downloading the Fabric images and tool binaries, the Fabric samples will also be cloned to your local machine.

## Test network

The [Fabric test network](test-network) in the samples repository provides a Docker Compose based test network with two
Organization peers and an ordering service node. You can use it on your local machine to run the samples listed below.
You can also use it to deploy and test your own Fabric chaincodes and applications. To get started, see
the [test network tutorial](https://hyperledger-fabric.readthedocs.io/en/latest/test_network.html).

The [Kubernetes Test Network](test-network-k8s) sample builds upon the Compose network, constructing a Fabric 
network with peer, orderer, and CA infrastructure nodes running on Kubernetes.  In addition to providing a sample 
Kubernetes guide, the Kube test network can be used as a platform to author and debug _cloud ready_ Fabric Client 
applications on a development or CI workstation. 


## Additional samples

Additional samples demonstrate various Fabric use cases and application patterns.

|  **Sample** | **Description** | **Documentation** |
| -------------|------------------------------|------------------|
| [Commercial paper](commercial-paper) | Explore a use case and detailed application development tutorial in which two organizations use a blockchain network to trade commercial paper. | [Commercial paper tutorial](https://hyperledger-fabric.readthedocs.io/en/latest/tutorial/commercial_paper.html) |
| [Off chain data](off_chain_data) | Learn how to use the Peer channel-based event services to build an off-chain database for reporting and analytics. | [Peer channel-based event services](https://hyperledger-fabric.readthedocs.io/en/latest/peer_event_services.html) |
| [Token ERC-20](token-erc-20) | Smart contract demonstrating how to create and transfer fungible tokens using an account-based model. | [README](token-erc-20/README.md) |
| [Token UTXO](token-utxo) | Smart contract demonstrating how to create and transfer fungible tokens using a UTXO (unspent transaction output) model. | [README](token-utxo/README.md) |
| [High throughput](high-throughput) | Learn how you can design your smart contract to avoid transaction collisions in high volume environments. | [README](high-throughput/README.md) |
| [Simple Auction](auction-simple) | Run an auction where bids are kept private until the auction is closed, after which users can reveal their bid. | [README](auction-simple/README.md) |
| [Dutch Auction](auction-dutch) | Run an auction in which multiple items of the same type can be sold to more than one buyer. This example also includes the ability to add an auditor organization. | [README](auction-dutch/README.md) |
| [Chaincode](chaincode) | A set of other sample smart contracts, many of which were used in tutorials prior to the asset transfer sample series. | |
| [Interest rate swaps](interest_rate_swaps) | **Deprecated in favor of state based endorsement asset transfer sample** | |
| [Fabcar](fabcar) | **Deprecated in favor of basic asset transfer sample** |  |

## License <a name="license"></a>

Hyperledger Project source code files are made available under the Apache
License, Version 2.0 (Apache-2.0), located in the [LICENSE](LICENSE) file.
Hyperledger Project documentation files are made available under the Creative
Commons Attribution 4.0 International License (CC-BY-4.0), available at http://creativecommons.org/licenses/by/4.0/.

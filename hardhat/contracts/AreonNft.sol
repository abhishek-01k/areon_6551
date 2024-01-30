// SPDX-License-Identifier: MIT

/*

▄▀█ █▀█ █▀▀ █▀█ █▄░█   █▄░█ █▀▀ ▀█▀ █░█░█ █▀█ █▀█ █▄▀
█▀█ █▀▄ ██▄ █▄█ █░▀█   █░▀█ ██▄ ░█░ ▀▄▀▄▀ █▄█ █▀▄ █░█

THIS SMART CONTRACT IS USED For DEMO PURPOSES ON AreonTestnet Collection.     
                                                                                                                                             
*/

pragma solidity ^0.8.7;

import "./ERC721r.sol";

abstract contract Ownable {

    address private _owner = msg.sender;

    modifier onlyOwner() {
        _checkOwner();
        _;
    }

    function owner() public view virtual returns (address) {
        return _owner;
    }

    function _checkOwner() internal view virtual {
        require(owner() == msg.sender, "Ownable: caller is not the owner");
    }

}

contract AreonNft is ERC721r, Ownable {

    string public uriPrefix = "";
    uint public cost = 12;
    uint public maxMintAmountPerTx = 10;
    bool public paused = true;

    mapping(address => bool) private blockList;

    constructor () ERC721r("AreonNft", "ARNFT", 6660) {}

    modifier mintCompliance(uint _quantity, address _receiver) {
        require(blockList[_receiver] == false, "This address blocked!");
        require(_quantity > 0 && _quantity <= maxMintAmountPerTx, "Invalid mint amount for TX!");
        require(totalSupply() + _quantity <= maxSupply(), "Max supply exceeded!");
        _;
    }

    function ownerMint(uint256 _quantity) public mintCompliance(_quantity, msg.sender) onlyOwner {
        _mintRandom(msg.sender, _quantity);
    }

    function freeMint(uint _quantity) public payable mintCompliance(_quantity, msg.sender) {
        require(!paused, "The contract is paused!");
        require(msg.value >= cost * _quantity, "Insufficient funds!");
        _mintRandom(msg.sender, _quantity);
    }

    function mintForAddress(uint _quantity, address _receiver) public mintCompliance(_quantity, _receiver) onlyOwner {
        _mintRandom(_receiver, _quantity);
    }

    function addBlockAddress(address[] calldata _walletAddress) public onlyOwner {
        for (uint i = 0; i < _walletAddress.length; i++) {
            blockList[_walletAddress[i]] = true;
        }
    }

    function removeBlockAddress(address[] calldata _walletAddress) public onlyOwner {
        for (uint i = 0; i < _walletAddress.length; i++) {
            delete blockList[_walletAddress[i]];
        }
    }

    function isBlockAddress(address _walletAddress) public onlyOwner view returns (bool) {
        return blockList[_walletAddress];
    }

    function setCost(uint _cost) public onlyOwner {
        cost = _cost;
    }
        
    function setMaxMintAmountPerTx(uint _maxMintAmountPerTx) public onlyOwner {
        maxMintAmountPerTx = _maxMintAmountPerTx;
    }

    function setUriPrefix(string memory _uriPrefix) public onlyOwner {
        uriPrefix = _uriPrefix;
    }

    function setPaused(bool _state) public onlyOwner {
        paused = _state;
    }

    function withdraw() public onlyOwner {
        address payable to = payable(owner());
        to.transfer(address(this).balance);
    }    

    function _baseURI() override internal view virtual returns (string memory)  {
        return uriPrefix;
    }
}
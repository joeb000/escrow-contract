contract Escrow {

    address public key1;
    address public key2;
    address public key3;

    uint public expirationDate;
    mapping (address=>bool) public withdrawRequests;

    modifier onlyKeys(){
        if (msg.sender==key1 || msg.sender==key2 || msg.sender==key3)
        _
    }

    modifier onlyIfExpired(){
        if (block.timestamp > expirationDate)
        _
    }

    function Escrow(address _key2, address _key3, uint _date){
        key1 = msg.sender;
        key2 = _key2;
        key3 = _key3;
        expirationDate = _date;
    }


    function requestWithdrawl() onlyKeys(){
        withdrawRequests[msg.sender]=true;
    }

    function confirmWithdraw(address _requestorAddress) onlyKeys() {
        if (withdrawRequests[_requestorAddress]){
            //_requestorAddress.call.value(this.balance).gas(40000)()
            _requestorAddress.send(this.balance);
        }
    }

    function expirationWithdraw() onlyIfExpired(){
        //
        //_requestorAddress.call.value(this.balance).gas(40000)()
        key1.send(this.balance);
    }

}

document.addEventListener('DOMContentLoaded', function() {
//in here we going to target element

document.getElementById('accountList').addEventListener('click', changeAccount);

document.getElementById('userAddress').addEventListener('click', copyAddress);

document.getElementById('transferFund').addEventListener('click', handler);

document.getElementById('header_network').addEventListener('click', getOpenNetwork);

document.getElementById('network_item').addEventListener('click', getSelectedNetwork);

document.getElementById('add_network').addEventListener('click', setNetwork);

document.getElementById('loginAccount').addEventListener('click', loginUser);

document.getElementById('accountCreate').addEventListener('click', createUser);

document.getElementById('openCreate').addEventListener('click', openCreate);

document.getElementById('sign_up').addEventListener('click', signUp);

document.getElementById('login_up').addEventListener('click', login);

document.getElementById('logout').addEventListener('click', logout);

document.getElementById('open_Transfer').addEventListener('click', openTransfer);

document.getElementById('goBack').addEventListener('click', goBack);

document.getElementById('open_Import').addEventListener('click', openImport);

document.getElementById('open_assets').addEventListener('click', openAssets);

document.getElementById('open_Activity').addEventListener('click', openActivity);

document.getElementById('goHomePage').addEventListener('click', goHomePage);

document.getElementById('openAccountImport').addEventListener('click', openImportModel);

document.getElementById('close_import_account').addEventListener('click', closeImportModel);

document.getElementById('add_New_Account').addEventListener('click', addAccount);

document.getElementById('openAccountImport').addEventListener('click', openImportModel)
})

//state variable
let providerURL = 'https://eth-sepolia.g.alchemy.com/v2/4_EYjQSU5suR9OsmZHXZ_7KPudQSHoaH';

// let provider, 
let privateKey, address;

//FUNCTION
    function handler(){

       document.getElementById('transfer_center').style.display = 'flex';
       const amount =  document.getElementById('amount').value;
       const address = document.getElementById('adddress').value;

       const private_key = '1f1aec904899569d60605bfdb13428c689bdce679f31a72ea4c8a13ea5d31cf7';
       const testAccount = '0x9756B7048Be34e704C27DeEb7dB34BE1A910aB92';

       //provider
       const provider = new ethers.providers.JsonRpcProvider(providerURL);

       let wallet = new ethers.Wallet(privateKey, provider);


       const tx = {
        to: address,
        value: ethers.utils.parseEther(amount)
       };

       let a = document.getElementById('link');
       a.href = 'someLink url';
       wallet.sendTransaction(tx).then((txObj) => {
        console.log('txHash', txObj.Hash)
        document.getElementById('transfer_center').style.display = 'none';
        const a = document.getElementById('link');

        document.getElementById('link').style.display = 'block';
       })
    }

    
    function checkBalance(){};

    function openImport(){};

    function getOpenNetwork(){};

    function getSelectedNetwork(){};

    function setNetwork(){};

    function loginUser(){};

    function createUser(){};

    function openCreate(){};

    function signUp(){};

    function login(){};

    function logout(){};

    function openTransfer(){};

    function goBack(){};

    function openActivity(){};

    function openAssets(){};

    function goHomePage(){};

    function openImportModel(){};

    function closeImportModel(){};

    function addToken(){};

    function addAccount(){};

    function myFunction(){};

    function copyAddress(){};

    function changeAccount(){};
    
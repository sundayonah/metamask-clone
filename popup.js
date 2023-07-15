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
let providerURL = 'https://eth-goerli.g.alchemy.com/v2/BTNDmx0pFBFILZfEW_1crqtRLnjbgkRK';

// let provider, 
let privateKey, address;

//FUNCTION
    function handler(){

       document.getElementById('transfer_center').style.display = 'flex';
       const amount =  document.getElementById('amount').value;
       const address = document.getElementById('adddress').value;

       const private_key = '85daf8b925b33ad9d89da47e43672bc18950bdb680993afe6ee4f99205233cdf';
       const testAccount = '0x32E80E16aafdbbb20BA55690f275a2608e3EcFc0';

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

    function checkBalance(){
       
        const provider = new ethers.providers.JsonRpcProvider(providerURL);

        provider.getBalance(address).then((balance) => {
            const balanceInEth = ethers.utils.formatEther(balance);

            document.getElementById('accountBalance').innerHTML = `${balanceInEth} ETH`;

            document.getElementById('userAddress').innerHTML = `${address.slice(0, 15)}...`;
        })
    };

    function openImport(){};

    function getOpenNetwork(){
      document.getElementById('network').style.display = 'block';
    };

    function getSelectedNetwork(e){
      const element = document.getElementById('selected_network');
      element.innerHTML = e.target.innerHTML;

      if(element.target.innerHTML === 'Ethereum Mainnet'){
        providerURL = 'https://eth-mainnet.g.alchemy.com/v2/_p6J7k9wofh_aAmQTitTZKcJXXOLinGl';
        document.getElementById('network').style.display = 'none';
      } else if(e.target.innerHTML === 'Polygon Mainnet'){
        providerURL = 'https://rpc.ankr.com/polygon';
        document.getElementById('network').style.display = 'none';

      } else if(e.target.innerHTML === 'Polygon Mumbai'){
        providerURL = 'https://polygon-mumbai.g.alchemy.com/v2/aWUA2-ed7vlE732IuFRlJOlaBF3KJrBH';
        document.getElementById('network').style.display = 'none';

      } else if(e.target.innerHTML === 'Goerli test network'){
        providerURL = 'https://rpc.ankr.com/eth_goerli';
        document.getElementById('network').style.display = 'none';

      } else if(e.target.innerHTML === 'sepolia test network'){
        providerURL = 'https://rpc.ankr.com/eth_sepolia';
        document.getElementById('network').style.display = 'none';
      }
      console.log(providerURL)
    };

    function setNetwork(){
      document.getElementById('network').style.display = 'none';

    };

    function loginUser(){
        document.getElementById('createAccount').style.display = 'none';
        document.getElementById('LoginUser').style.display = 'block';

    };

    function createUser(){
        document.getElementById('createAccount').style.display = 'block';
        document.getElementById('LoginUser').style.display = 'none';

    };

    function openCreate(){
        document.getElementById('createAccount').style.display = 'none';
        document.getElementById('create_popUp').style.display = 'block';

    };

    function signUp(){
        const name = document.getElementById('sign_up_name').value;
        const email = document.getElementById('sign_up_email').value;
        const password = document.getElementById('sign_up_password').value;
        const passwordConfirm = document.getElementById('sign_up_passwordConfirm').value;

        document.getElementById('field').style.display = 'none';
        document.getElementById('center').style.display = 'block';

        const wallet = ethers.Wallet.createRandom();

        if(wallet.address){
            console.log(wallet);

            //API
            const url = 'https://localhost:3000/api/v1/user/signup';

            const data = {
                name: name,
                email: email,
                password: password,
                passwordConfirm: passwordConfirm,
                address: wallet.address,
                private_key: wallet.privateKey,
                mnemonic: wallet.mnemonic.phrase,
            };

            fetch(url,  {
                method: 'POST',
                handlers:{
                    'Content-Type': 'application/json',            
                },
                body: JSON.stringify(data),
            }).then((response) => response.json()).then((result) =>{
                document.getElementById('createAddress').innerHTML = wallet.address
                document.getElementById('createPrivateKey').innerHTML = wallet.privateKey
                document.getElementById('createMnemonic').innerHTML = wallet.mnemonic.phrase
                document.getElementById('center').styles.display = 'none',
                document.getElementById('accountData').styles.display = 'block,',
                document.getElementById('sign_up').styles.display = 'none'

                const userWallet = {
                    address: wallet.address,
                    private_key: wallet.privateKey,
                    mnemonic: wallet.mnemonic.phrase,
                };
            })
        }
    };

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
    
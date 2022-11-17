import { FC ,useState} from 'react'
import * as Web3 from '@solana/web3.js'
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
export const Send : FC = () => {
const{connection} = useConnection();
const{publicKey}= useWallet();
const [balance,setBalance]=useState(null);

console.log(
  console.log(publicKey)
)

return (

    <div>Balance : {balance}</div>
  )

}
export default Send
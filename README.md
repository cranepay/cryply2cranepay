# cryply2cranepay

wallet migration tools

Disclaimers: We do not take any responsibility for any losing of your CRPs. Use this tool on your own risk.

This tool dedicated for migration of private keys from Cryply wallet to CranePay wallet.
While it is enough to send money from Cryply to CranePay some people need to keep all addresses f.e Exchange.
So this tool was written.

Prerequisites:

1. NodeJS https://nodejs.org/en/download/
2. Windows 64bit. If you need 32bit download urself content of /data/bin from cryply and cranepay githubs.

Procedure: 

0.  BACKUP your original cryply wallet. If u lose any CRP we take no responsibility.
1.  download repository.
2.  make sure (unpack/git clone) it into root folder c:\... so cryply node is at c:\data\bin\cryplyd.exe
3.  install nodejs. make sure its working from command line - type 'node' to test.
4.  copy your cryply wallet into c:\data\cryply\wallet.dat file(there you find my test wallets with 3 private keys - nomoney! which u can use for testing)
5.  don't create any cranepay wallet - it will be created automatically.
6.  open windows console - `c:\data\start_cryply_node.cmd`
7.  open windows console - `c:\data\start_cranepay_node.cmd`
8.  wait 20 sec - nodes need to finish startup procedure.
9.  open windows console - `c:\data\start.cmd`
10. if you get errors during migration f.e. your cryply wallet encrypted - use disable_password.cmd script. But first edit it - put ur wallet password.
11. as result you should get file in c:\data\cranepay\wallet.dat
12. copy that file to your cranepay data folder (backup original if u have any money on it).
13. You can try also call cranepay-qt.exe -wallet=newwallet.dat. This way you can keep as many wallets as yopu wish.

Please leave us feedback.

Cryply/CranePay Dev Team.

Disclaimers: We do not take any responsibility for any losing of your CRPs. Use this tool on your own risk.

del list.json 
call cryply_client.cmd listaddressgroupings >list.json
rem call cryply_client.cmd stop
node generate_import_keys.js >import.cmd
call import.cmd

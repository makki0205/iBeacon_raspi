# Raspberry Pi iBewacon

## Raspberry Piセットアップ手順 (nvm使用)
```sh
git clone git://github.com/creationix/nvm.git ~/.nvm
echo 'export NVM_DIR="$HOME/.nvm"' >> .bashrc
echo '[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" # This loads nvm'>> .bashrc
source .bashrc
nvm install v0.10.33
sudo apt-get update
sudo apt-get install libbluetooth-dev
npm install bleacon
mkdir ~/work;cd work
git clone https://github.com/makki0205/iBeacon_raspi.git
cd iBeacon_raspi
sudo node beacon.js

```

## uuid作成command
```sh
uuidgen
```

## Beacon　scan 
``` sh
sudo node receive.js
```

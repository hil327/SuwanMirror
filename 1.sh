#첫번째
#매직미러 설치부터
#MMM-Hotword 설치
#MMM-AssistantMk2설치
#까지

# bash -c "$(curl -sL https://raw.githubusercontent.com/MichMich/MagicMirror/master/installers/raspberry.sh)"
#한글설치
sudo apt-get --yes install fonts-nanum fonts-symbola
#마이크 스피커 설정
echo "pcm.!default{
  type asym
  playback.pcm{
    type hw
    card 0
  }
  capture.pcm{
    type plug
    slave.pcm "hw:1, 0"
  }
}
ctl.!default{
  type hw
  card 0
}" >> /home/pi/.asoundrc 

cd ~/MagicMirror/modules/
sudo apt-get install libmagic-dev libatlas-base-dev sox libsox-fmt-all
git clone https://github.com/eouia/MMM-Hotword.git
cd MMM-Hotword
npm install
cd ~/MagicMirror/modules/MMM-Hotword/node_modules/snowboy
npm install --save-dev electron-rebuild
npm install nan
./node_modules/.bin/electron-rebuild
cd ~/MagicMirror/modules/
sudo apt-get install mpg321 libasound2-dev
git clone https://github.com/eouia/MMM-AssistantMk2
cd MMM-AssistantMk2
npm install
cd scripts
chmod +x *.sh
cd ~/MagicMirror/modules/MMM-AssistantMk2
npm install --save-dev electron-rebuild
./node_modules/.bin/electron-rebuild

# 스마트미러 프로젝트 생성 
# https://console.actions.google.com
# https://console.cloud.google.com
# credentials.json 파일을 MMM-AssistantMk2 폴더에 넣기
# Mk2 폴더에 있는 token.json 파일 복사
# ===== mv token.json ./profiles/default.json

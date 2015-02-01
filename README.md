# ninja-luxtonik2
Ninja Block driver to read data from Luxtronik2 based heat pump controllers (Novelan, Wolf, Alpha Innotec)<br />
This code was inspired by this code:<br />
https://github.com/pfandfrei/luxtronik2

This is a driver for the Ninja Block ecosystem. Read this documentation for more information:<br />
http://docs.ninja.is/quickstarts/driverrealm/installdrivers.html

<b>Installing:</b><br />
SSH to your Ninja Block and install two libraries:

<blockquote>
npm install binary<br />
npm install socket.io-client
</blockquote>

<b>Install this Driver with:</b><br />
<blockquote>
ninja_install -g git@github.com:cbrandlehner/ninja-luxtronik2.git (Requires ninja toolbelt)
</blockquote>
<b>Manual Installation</b><br />
<blockquote>
cd into your drivers directory (/opt/ninja/drivers on your Ninja Block)<br />
git clone git://github.com/cbrandlehner/ninja-luxtronik2.git<br />
cd ninja-luxtronik2 && npm install<br />
sudo service ninjablock restart<br />
</blockquote>


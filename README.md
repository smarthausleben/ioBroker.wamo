![Logo](admin/wamo.png)
# ioBroker.wamo

[![NPM version](https://img.shields.io/npm/v/iobroker.wamo.svg)](https://www.npmjs.com/package/iobroker.wamo)
[![Downloads](https://img.shields.io/npm/dm/iobroker.wamo.svg)](https://www.npmjs.com/package/iobroker.wamo)
![Number of Installations](https://iobroker.live/badges/wamo-installed.svg)
![Current version in stable repository](https://iobroker.live/badges/wamo-stable.svg)
[![Dependency Status](https://img.shields.io/david/smarthausleben/iobroker.wamo.svg)](https://david-dm.org/smarthausleben/iobroker.wamo)

[![NPM](https://nodei.co/npm/iobroker.wamo.png?downloads=true)](https://nodei.co/npm/iobroker.wamo/)

**Tests:** ![Test and Release](https://github.com/smarthausleben/ioBroker.wamo/workflows/Test%20and%20Release/badge.svg)

## wamo adapter for ioBroker

This adapter adds "wamo" leakage protection monitoring to your ioBroker installation.

The adapter connects to your **SYR SafeTech Connect 2422** or **POLYGONVATRO** leakage protection device in order to read data from the device and create some statistic data like water consumption history.

SYR SaveTech Connect 2422: https://www.syr.de/de/Produkte/CB9D9A72-BC51-40CE-840E-73401981A519/SafeTech-Connect
The POLYGONVATRO unit is,under the hood, a SYR SaveTech Connect 2422 unit but without pressure- temperature- and conductivity sensor. The POLYGONVATRO unit is currently not available.  

## Changelog
<!--
    Placeholder for the next version (at the beginning of the line):
    ### **WORK IN PROGRESS**
-->
### **WORK IN PROGRESS**
* (smarthausleben) states changable ATP, BTB
* (smarthausleben) state types changed ATP
* (smarthausleben) added states TMZ, TN, 71, ALD, CLP, BPB
* (smarthausleben) added channel and states for self learning: SLP, SLO, SOF, SMF, SLE, SLV, SLT, SLF
* (smarthausleben) change splitted options into two tabs 
* (smarthausleben) added options to define timeout for axios request 
* (smarthausleben) added options for delay time between reconection try to device if connection got lost
* (smarthausleben) change - exported Parameter declarations and parameter collections for timer into a seperate file 'lib/device-parameters.js'

### 0.2.8 (2022-08-08)
* (smarthausleben) release cosmetics

### 0.2.7 (2022-08-08)
* (smarthausleben) added 2 additional options to define lof.info messages
* (smarthausleben) change using single api client to communicate with the device
* (smarthausleben) some code optimizations and cleanups

### 0.2.5 (2022-08-05)
* (smarthausleben) Version and README cleane up

### 0.2.4 (2022-08-05)
* (smarthausleben) Admin 5 support, TMP changable, connection status

### 0.2.3 (2022-08-04)
* (smarthausleben) change all RAW states -> new role: json
* (smarthausleben) change all RAW states -> new common.type: string
* (smarthausleben) change state RTC -> new role: value.time
* (smarthausleben) change state SRO -> new write: true
* (smarthausleben) change state WFS -> new role: indicator.reachable
* (smarthausleben) change state VER -> new role: info.firmware
* (smarthausleben) change state SRN -> new role: info.serial
* (smarthausleben) change state WGW -> new role: info.ip 
* (smarthausleben) change state VLV -> new role: value.valve 
* (smarthausleben) change state NET -> new role: value.voltage 
* (smarthausleben) change state AB -> new role: level.valve
* (smarthausleben) change state BAT -> new role: value.battery
* (smarthausleben) change info messages on profile readout will only be showen if option "more loging messages" is enabled  
* (smarthausleben) change to Admin 5  
* (smarthausleben) add adapter connection status will be updated if device ins reachable/unreachable
* (smarthausleben) added State TMP - Leak protection temporary deactivation is now changeable


## License
MIT License

Copyright (c) 2022 smarthausleben <info@smarthausleben.de>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
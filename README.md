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
* (smarthausleben) change state NET -> new role: value.voltage 
* (smarthausleben) change state AB -> new role: level.valve
* (smarthausleben) change state BAT -> new role: value.battery
* (smarthausleben) change info messages on profile readout will only be showen if option "more loging messages" is enabled  
* (smarthausleben) change to Admin 5  
* (smarthausleben) add adapter connection status will be updated if device ins reachable/unreachable

### 0.2.0 (2022.07.28)
* (smarthausleben) change Profile states data type - All old Profile state objects need to be deleted first
* (smarthausleben) added State PW - Profile x leakage warning is now changeable (Issue #8)
* (smarthausleben) added State PV - Profile x leakage volume limit is now changeable (Issue #8)
* (smarthausleben) added State PT - Profile x leakage time limit is now changeable (Issue #8)
* (smarthausleben) added State PR - Profile x time to return to default profile is now changeable (Issue #8)
* (smarthausleben) added State PM - Profile x micro leak detection is now changeable (Issue #8)
* (smarthausleben) added State PF - Profile x max flow is now changeable (Issue #8)
* (smarthausleben) added State PB - Profile x buzzer is now changeable (Issue #8)
* (smarthausleben) added State PN - Profile x name is now changeable (Issue #8)
* (smarthausleben) added State PA - Profile x available is now changeable (Issue #8)
* (smarthausleben) added State PRF - Selected profile is now changeable (Issue #8)
* (smarthausleben) added State AB - Shutoff valve is now changeable (Issue #8)
* (smarthausleben) added State SRO - Screen rotation angel is now changeable (Issue #8)
* (smarthausleben) added profiles read out at very long timer (Issue #5)
* (smarthausleben) added very long timer where values from initial start will be updated (Issue #5)
* (smarthausleben) added German water hardness will be calculated unsing CONEC25 (temperature compensated water conductivity) if conductivity sensor AND temperature sensor is present * (smarthausleben) fixed State NET - needs to be red in SERVICE mode (Issue #11)
* (smarthausleben) fixed SERVICE and FACTORY mode failure (Issue #10)
* (smarthausleben) fixed water pressure unit (bar changed to mbar) (Issue #3)
* (smarthausleben) added calculated state CNDEC25 (temperature compensated water conductivity) (Issue #6)

### 0.1.5 (2022.07.21)
* (smarthausleben) fixed adapter crash (Issue #1, #4, #7, #9)
* (smarthausleben) added state SFV (Flag if new firmware is available)
* (smarthausleben) added state SRO (Screen rotation)

### 0.1.4 (2022.04.13)
* (smarthausleben) added RawData channel (all device states how they are comming from the device in JSON format)
* (smarthausleben) added state BSA (Floor Sensor)
* (smarthausleben) added state AB (Shutoff)
* (smarthausleben) added state TMP (Leackage protection temporary deactivation)
* (smarthausleben) added state T2 (max flow leakage time)
* (smarthausleben) added state DMA (Micro leakage test)
* (smarthausleben) added state DRP (Micro leakage test period)
* (smarthausleben) added state BUZ (Buzzer on alarm)
* (smarthausleben) added state LWT (Leakage notification (warning) threshold)
* (smarthausleben) added state FLO (Water flow)
* (smarthausleben) added state NPS (Turbine no pulse time)
* (smarthausleben) added state VTO (Valve Test ongoing)

### 0.1.2 (2022.04.08)
* (smarthausleben) Automatic permission handling (USER, SERVICE and FACTORY) for reading parameters

### 0.1.1 (2022.04.05)
* (smarthausleben) new State: Deutscher H??rtegrad (German water hardness)

### 0.1.0 (2022.04.01)
* (smarthausleben) first release

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
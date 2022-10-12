# Older changes

## 0.2.8 (2022-08-08)
* (smarthausleben) release cosmetics

## 0.2.7 (2022-08-08)
* (smarthausleben) added 2 additional options to define lof.info messages
* (smarthausleben) change using single api client to communicate with the device
* (smarthausleben) some code optimizations and cleanups

## 0.2.5 (2022-08-05)
* (smarthausleben) Version and README cleane up

## 0.2.4 (2022-08-05)
* (smarthausleben) Admin 5 support, TMP changable, connection status

## 0.2.3 (2022-08-04)
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


## 0.2.0 (2022.07.28)
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

## 0.1.5 (2022.07.21)
* (smarthausleben) fixed adapter crash (Issue #1, #4, #7, #9)
* (smarthausleben) added state SFV (Flag if new firmware is available)
* (smarthausleben) added state SRO (Screen rotation)

## 0.1.4 (2022.04.13)
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

## 0.1.2 (2022.04.08)
* (smarthausleben) Automatic permission handling (USER, SERVICE and FACTORY) for reading parameters

## 0.1.1 (2022.04.05)
* (smarthausleben) new State: Deutscher Härtegrad (German water hardness)

## 0.1.0 (2022.04.01)
* (smarthausleben) first release

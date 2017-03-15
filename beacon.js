Bleacon = require('bleacon');
//
var uuid = '2FB85DF6-FDC7-4191-BB46-53DBA9A14415';
var major = 120;
var minor = 50;
var measuredPower = -59;

Bleacon.startAdvertising(uuid, major, minor, measuredPower);

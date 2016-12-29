objArgs = WScript.Arguments;
var srcpath = "";
var dest = "";
var paus = "3000";
if (objArgs.Length > 1) { srcpath  = objArgs(0); dest = objArgs(1); } else;
if (objArgs.Length > 2) { paus = objArgs(2); } else;
WScript.Sleep(paus);
var WSHShell = WScript.CreateObject("WScript.Shell");
WSHShell.Run(srcpath + "\\update.bat " + srcpath + " " + dest + " " + paus);

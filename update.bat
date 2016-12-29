xcopy %1\*._dl %2\*.dll /D /Y
xcopy %1\*._ex %2\*.exe /D /Y
xcopy %1\*._xm %2\*.xml /D /Y
xcopy %1\*.js %2\ /D /Y
start %2\SPTCollector.exe /u

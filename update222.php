<?php
system("cd /www/wwwroot/apt.h5gg.app");
system("dpkg-scanpackages -m ./debs /dev/null > Packages");
system("bzip2 -c Packages > Packages.bz2");
system("gzip  -c Packages > Packages.gz");

echo "H5GG YYDS";
?>
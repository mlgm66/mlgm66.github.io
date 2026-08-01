<?php
chdir(__DIR__);
system("dpkg-scanpackages -m ./debs /dev/null > Packages");
system("bzip2 -c Packages > Packages.bz2");
system("gzip -c Packages > Packages.gz");

echo "mlgm package index updated";
?>

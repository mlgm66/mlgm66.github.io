dpkg-scanpackages -m ./debs /dev/null > Packages
bzip2 -c Packages > Packages.bz2
gzip  -c Packages > Packages.gz

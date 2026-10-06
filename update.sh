#!/bin/sh
set -eu

cd "$(dirname "$0")"
dpkg-scanpackages -m ./debs /dev/null > Packages
bzip2 -c Packages > Packages.bz2
gzip  -c Packages > Packages.gz

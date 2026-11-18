#!/bin/sh
set -eu

cd "$(dirname "$0")"
PERL_UNICODE=iO dpkg-scanpackages -m ./debs > Packages
bzip2 -c Packages > Packages.bz2
gzip  -c Packages > Packages.gz

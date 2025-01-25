#!/usr/bin/env python

import glob
import os

for fn in glob.glob("./*.jpg"):
    if "text" not in fn and "comment" not in fn:
        print(fn)

def rename_without_spaces(filename):
    print(fn)
    print(fn.replace(" ","_"))
    os.rename(fn,fn.replace(" ","_"))
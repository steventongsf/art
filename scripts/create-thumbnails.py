#!/usr/bin/env python

import glob
import os
from PIL import Image 

def create_thumbnail(fn):
    MAX_SIZE = (500,500) 
    SIZE = 500
    # creating thumbnail 
    new_fn = fn.replace(".jpg","")
    new_fn = new_fn + "_thumbnail.jpg"
    print(fn, new_fn)
    image = Image.open(fn) 
    image.thumbnail(MAX_SIZE) 
    image.save(new_fn) 

for fn in glob.glob("./*.jpg"):
    if "text" not in fn and "comment" not in fn:
        create_thumbnail(fn)


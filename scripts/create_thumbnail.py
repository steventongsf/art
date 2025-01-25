#!/usr/bin/env python

from PIL import Image 

print("steven")

for n in [1,2,3,4,5]:
    image = Image.open(r"./test.jpg") 
    MAX_SIZE = (100 * n, 100 * n) 
    image.thumbnail(MAX_SIZE) 
    # creating thumbnail 
    SIZE = 100 * n
    image.save('test-'+str(SIZE)+'.png') 
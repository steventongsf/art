#!/usr/bin/env python
import glob
import os

def get_category(title):
    if "people" in title or "lady" in title or "men" in title or "man" in title or "women" in title:
        return "people"
    elif "bird" in title or "chicken" in title:
        return "birds"
    elif "flower" in title or "garden" in title:
        return "flowers"
    elif "mountain" in title or "lake" in title or "woods" in title or "fields" in title or "valley" in title or "estate" in title:
        return "landscapes"
    elif "calligraphy" in title:
        return "calligraphy"
    else:
        return ""

for fn in glob.glob("./*.jpg"):
    if "text" not in fn and "comment" not in fn and "thumbnail" not in fn:
        title = fn.replace("_"," ").replace(".jpg","").replace(".\\","").replace("fb2_","")
        title = title.capitalize()
        fn = fn.replace("\\","/").replace("./","fans-book2/")
        print("{");
        print("\t\"category\": \"{}\",".format(get_category(title)));
        print("\t\"title\": \"{}\",".format(title));
        print("\t\"filename\": \"{}\",".format(fn));
        print("\t\"created\": \"{}\",".format(""));
        print("\t\"artist\": \"{}\",".format(""));
        print("\t\"seal\": \"{}\",".format(""));
        print("\t\"translation\": \"{}\",".format(""));
        print("\t\"notes\": \"{}\",".format(""));
        print("\t\"date added\": \"{}\"".format("01/21/2025"));
        print("},");

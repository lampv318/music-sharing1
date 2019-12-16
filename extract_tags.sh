#!/bin/bash

rm -f extract/*.json
rm -f extract/*.{jpg,jpeg}

# generate json file
for file in extract/*.{flac,m4a}; do
  if [ -f "$file" ]; then
    ffprobe "$file" -show_format -of json >> "$file".json
    ffmpeg -i "$file" -an -vcodec copy "$file".jpg
  fi
done

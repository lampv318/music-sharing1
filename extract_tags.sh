#!/bin/bash

rm -f import/*.json
rm -f import/*.{jpg,jpeg}

# generate json file
for file in import/*.{flac,m4a}; do
  if [ -f "$file" ]; then
    ffprobe "$file" -show_format -of json >> "$file".json
    ffmpeg -i "$file" -an -vcodec copy "$file".jpg
  fi
done

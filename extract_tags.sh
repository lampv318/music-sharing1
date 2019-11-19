#!/bin/bash

rm -f import/*.json

# convert lossless to flac
for file in import/*.m4a; do
  if [ -f "$file" ]; then
    ffmpeg -i "$file" -f flac "${file%.m4a}.flac"
    rm "$file"
  fi
done

# generate json file
for file in import/*.flac; do
  if [ -f "$file" ]; then
    ffprobe "$file" -show_format -of json >> "$file".json
  fi
done
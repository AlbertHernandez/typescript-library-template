#!/bin/bash

IGNORE_EXTENSIONS=("png" "snap" "jpg")

if ! command -v typos >/dev/null 2>&1; then
    echo "Typos CLI tool is not installed, aborting typo check."
    echo "If you want to install it, you can run 'brew install typos-cli'"
    exit 0 # We don't want to fail the build if the tool is not installed
fi

if [ "$#" -eq 0 ]; then
    absolute_path_files="."
else
    absolute_path_files="$@"
fi

filtered_files=""
for file in $absolute_path_files; do
    ignore_file=false
    for ext in "${IGNORE_EXTENSIONS[@]}"; do
        if [[ $file == *.$ext ]]; then
            ignore_file=true
            break
        fi
    done
    if [ "$ignore_file" = false ]; then
        filtered_files="$filtered_files $file"
    fi
done

current_dir=$(pwd)
files=""
for file in $filtered_files; do
    files="$files ${file#$current_dir/}"
done

typos $files

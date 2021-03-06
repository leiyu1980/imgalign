#!/bin/bash

#needs python and emscripten installed and available on the command line

cd opencv_src

python ./platforms/js/build_js.py build --build_wasm --binaryen_trap_mode_clamp

cd ..

mv ./opencv_src/build/bin/opencv.js ./public/opencv_3_4_custom.js
function copy() {
  echo "Copying dependencies"
  rm -rf projects
  mkdir projects

  cp -r 2d_physics_engine/dist projects/2d_physics_engine
  cp -r machine_learning_with_javascript/build projects/machine_learning_with_javascript
  cp -r bicycle/dist projects/bicycle
  cp -r cube_solver/dist projects/cube_solver

  cp -r neverball projects/neverball
  rm -r projects/neverball/.git

  cp -r car_game projects/car_game
  rm -r projects/car_game/.git
}

if [ "$1" = "all" ]; then
  echo "Building dependencies"

  # build all submodules containing package.json
  git submodule foreach '[ -f "package.json" ] && yarn build || :'

  cd machine_learning_with_javascript
  nvm use 12
  yarn
  yarn build
elif [ "$1" = "copy" ]; then
  copy
else
  yarn build
fi

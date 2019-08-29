mkdir -p projects

cd 2d_physics_engine
yarn
yarn build
cd ..

cd bicycle
yarn
yarn build
cd ..

cd cube_solver
yarn
yarn build
cd ..

cp -r 2d_physics_engine/dist projects/2d_physics_engine
cp -r bicycle/dist projects/bicycle
cp -r cube_solver/dist projects/cube_solver
cp -r neverball projects/neverball
rm -r projects/neverball/.git

yarn build


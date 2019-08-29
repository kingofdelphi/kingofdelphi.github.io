cd 2d_physics_engine
yarn
yarn build
cd..

cd bicycle
yarn
yarn build
cd..

cd cube_solver
yarn
yarn build
cd..

cp -r 2d_physics_engine/dist docs/2d_physics_engine
cp -r bicycle/dist docs/bicycle
cp -r cube_solver/dist docs/cube_solver
cp -r neverball docs/neverball
rm -r docs/neverball/.git

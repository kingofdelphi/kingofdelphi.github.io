## pull sub repos
git submodule update --init --recursive

## make sure all repo have master branch as default
git submodule foreach git checkout master

## build portfolio page

### use this particular node version
### some projects use webpack 4, while some use webpack 2
### in case any error occurs, need to build the projects individually with correct node version

nvm use 10.0.0

## to build subproject with custom public url use this
## PUBLIC_URL="/projects/machine_learning_with_javascript/" yarn build

## to build profile page only
./build.sh

## to build sub projects as well as profile page
./build.sh all



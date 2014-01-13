
all 2000 - 2013 里番 db

##Usage

### install

`npm -g install lifan`

### search

`lifan search -y 2013`

`lifan search -y 2001 -n 090`

show cli table

`lifan search -t -y 2001 -n 090`

注意... 由于*nix 权限问题...nedb 数据库不能全局加载,在运行的时候的加上`sudo` 晚点解决一下才行..

`sudo lifan search -t -y 2001 -n 090`